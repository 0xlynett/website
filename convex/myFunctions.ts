import { mutation, query } from './_generated/server'
import { components } from './_generated/api'
import { ShardedCounter } from '@convex-dev/sharded-counter'

const counter = new ShardedCounter(components.shardedCounter)

export const milady = mutation({
  args: {},
  handler: async (ctx) => {
    await counter.inc(ctx, 'milady')
  },
})
export const getCount = query({
  args: {},
  handler: async (ctx) => {
    return await counter.count(ctx, 'milady')
  },
})
