import { z } from 'zod'
import CreateJobRequest from '../../core/usecase/create-job/create-job-request'
import CreateJobUseCase from '../../core/usecase/create-job/usecase'
import container from '../../ioc/inversify.container'
import tokens from '../../ioc/tokens'
import { publicProcedure, router } from '../../trpc'
import GetJobUseCase from '../../core/usecase/get-job/usecase'
import GetAllJobsUseCase from '../../core/usecase/get-all-jobs/usecase'
import DeleteJobUseCase from '../../core/usecase/delete-job/usecase'
import UpdateJobUseCase from '../../core/usecase/update-job/usecase'
import UpdateJobRequest from '../../core/usecase/update-job/update-job-request'

export default router({
  create: publicProcedure.input(CreateJobRequest).mutation(({input}) => {
    return container.get<CreateJobUseCase>(tokens.CreateJobUseCase).execute(input)
  }),
  getAll: publicProcedure.query(() => {
    return container.get<GetAllJobsUseCase>(tokens.GetAllJobsUseCase).execute()
  }),
  get: publicProcedure.input(z.string()).query(({input}) => {
    return container.get<GetJobUseCase>(tokens.CreateJobUseCase).execute(input)
  }),

  update: publicProcedure.input(UpdateJobRequest).mutation(({input}) => {
    return container.get<UpdateJobUseCase>(tokens.UpdateJobUseCase).execute(input)
  }),

  delete: publicProcedure.input(z.string()).query(({input}) => {
    return container.get<DeleteJobUseCase>(tokens.DeleteJobUseCase).execute(input)
  }),
})
