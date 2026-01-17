import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    tokenIdentifier: v.string(),
    avatar: v.optional(v.string()),
    role: v.optional(v.string()),
    isCoreMember: v.optional(v.boolean()),
  }).index("by_token", ["tokenIdentifier"]),

  projects: defineTable({
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    // THIS LINE BELOW IS THE FIX: v.optional(...)
    components: v.optional(v.array(v.string())), 
    
    sourceCode: v.optional(v.string()),
    circuitDiagram: v.optional(v.string()),
    ownerId: v.optional(v.id("users")), 
    authorName: v.optional(v.string()), 
    createdAt: v.optional(v.number()),
    imageUrl: v.optional(v.string()),
    link: v.optional(v.string()),
    techStack: v.optional(v.array(v.string())),
  }),
});