 import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getCoreMembers = query({
  args: {},
  handler: async (ctx) => {
    // Just return all users for now
    return await ctx.db
      .query("users")
      .collect();
  },
});

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    return await ctx.db.get(userId);
  },
});

export const getUserById = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.userId);
  },
});

export const seedCoreMembers = mutation({
  args: {},
  handler: async (ctx) => {
    const coreMembers = [
      {
        name: "Karthik SAI",
        email: "karthiksai@group.com",
        role: "Team Architect",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      {
        name: "Hemanth Venkat",
        email: "hemanth@lgcgroup.com",
        role: "Senior Developer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      },
      {
        name: "Kamal",
        email: "kamal@lgcgroup.com",
        role: "Product Manager",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
      {
        name: "Yeshwanth Kumar",
        email: "yeshwanth@lgcgroup.com",
        role: "Web Developer",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
      },
      {
        name: "Ghulam",
        email: "ghulam@lgcgroup.com",
        role: "UI/UX Designer",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      },
      {
        name: "Himani",
        email: "himani@lgcgroup.com",
        role: "Researcher",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      },
    ];

    for (const member of coreMembers) {
      const existing = await ctx.db
        .query("users")
        .filter((q) => q.eq(q.field("email"), member.email))
        .first();

      if (!existing) {
        await ctx.db.insert("users", {
          ...member,
          // FIX: Added a fake tokenIdentifier so the database doesn't complain
          tokenIdentifier: `fake-token-${member.email}`, 
        });
      }
    }
  },
});

