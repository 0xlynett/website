import { v } from 'convex/values'
import { action, mutation, query } from './_generated/server'
import { api, components } from './_generated/api'
import { ShardedCounter } from '@convex-dev/sharded-counter'

const counter = new ShardedCounter(components.shardedCounter)

export const milady = mutation({
  args: {},
  handler: async (ctx, args) => {
    await counter.inc(ctx, 'milady')
  },
})
export const getCount = query({
  args: {},
  handler: async (ctx, _args) => {
    return await counter.count(ctx, 'milady')
  },
})
