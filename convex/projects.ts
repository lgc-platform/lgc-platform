import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

// 1. Get All Projects (For the Dashboard Feed)
export const get = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").order("desc").collect();
    
    // Process projects to ensure they don't crash the UI
    return projects.map((p) => ({
      ...p,
      // If no owner, make up a fake one using the author's name
      owner: { 
        name: p.authorName || "Yeshwanth Kumar", 
        role: "Member",
        avatar: "" 
      }
    }));
  },
});

// 2. Get User Projects (We return ALL projects since there is no login yet)
export const getUserProjects = query({
  args: {},
  handler: async (ctx) => {
    // Just return everything so you can see your work in the "My Projects" tab too
    return await ctx.db.query("projects").order("desc").collect();
  },
});

// 3. Create Project (UNLOCKED: No Login Required)
export const createProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    components: v.array(v.string()), // Accepts the list from Dashboard
  },
  handler: async (ctx, args) => {
    // We skipped the "ctx.auth.getUserIdentity()" check.
    
    const projectId = await ctx.db.insert("projects", {
      ...args,
      // HARDCODED: Automatically assigns projects to YOU
      authorName: "Yeshwanth Kumar", 
      createdAt: Date.now(),
      techStack: args.components, // Saves components for the Profile View
      // We leave ownerId empty because we aren't using IDs yet
    });

    return projectId;
  },
});

// 4. Get Projects by Author (Used for your Profile Page)
export const getProjectsByAuthor = query({
  args: { authorName: v.string() },
  handler: async (ctx, args) => {
    // This finds projects where we saved authorName = "Yeshwanth Kumar"
    const projects = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("authorName"), args.authorName))
      .collect();
    return projects;
  },
});