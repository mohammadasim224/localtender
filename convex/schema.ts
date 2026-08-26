import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  jobs: defineTable({
    title: v.string(), council: v.string(), trade: v.string(), value: v.string(), deadline: v.string(), portal: v.string(),
    whoCanApply: v.string(), score: v.string(),
    advice: v.union(v.literal("bid"), v.literal("skip"), v.literal("sub")),
    summary: v.string(), mustHaves: v.array(v.string()), ideas: v.array(v.string()), officialNote: v.string(),
    status: v.union(v.literal("draft"), v.literal("live")),
  }).index("by_trade", ["trade"]),
  profiles: defineTable({
    clerkUserId: v.string(), company: v.string(), email: v.string(), trades: v.array(v.string()),
    plan: v.union(v.literal("free"), v.literal("alerts"), v.literal("help")),
  }).index("by_clerk", ["clerkUserId"]),
  helpRequests: defineTable({
    clerkUserId: v.string(), jobId: v.string(), message: v.string(),
    status: v.union(v.literal("new"), v.literal("done")),
  }).index("by_status", ["status"]),
});
