import { initTRPC } from '@trpc/server'
import { z } from 'zod'
import jobController from './presentation/controller/job-controller'
import { router } from './trpc'

export const appRouter = router({
  job: jobController
})

export type AppRouter = typeof appRouter