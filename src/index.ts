import { Hono } from 'hono'
import { trpcServer } from '@hono/trpc-server' // Deno 'npm:@hono/trpc-server'
import { appRouter } from './router'

const app = new Hono()

app.use(
  '/trpc/*',
  trpcServer({
    router: appRouter
  })
)

app.get('/', (c) => c.text('Hello Hono!'))

export default app
