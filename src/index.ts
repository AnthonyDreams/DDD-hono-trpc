import { Hono } from 'hono'
import { trpcServer } from '@hono/trpc-server' // Deno 'npm:@hono/trpc-server'
import { appRouter } from './router'
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'
import { drizzle } from 'drizzle-orm/d1';
import container from './ioc/inversify.container'
import tokens from './ioc/tokens'
import * as schema from './infra/database/drizzle/schema'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()
app.use('/trpc/*', async (c, next) => {
  return trpcServer({
    router: appRouter,
    createContext: async ({ req, resHeaders }: FetchCreateContextFnOptions) => {
      const dbInstance = drizzle(c.env.DB, {schema})
      container.bind<typeof dbInstance>(tokens.DbClient).toConstantValue(dbInstance)
      return { req, resHeaders }
    },
  })(c, next)
})

export default app
