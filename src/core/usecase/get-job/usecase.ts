import { inject, injectable } from 'inversify'
import symbols from '../../../ioc/tokens'
import JobRepository from '../../repository/job-repository'
import Job from '../../entity/job'

@injectable()
export default class GetJobUseCase {
  constructor(@inject(symbols.JobRepository) private jobRepository: JobRepository) {}

  async execute(id: string): Promise<Job> {
    return await this.jobRepository.findById(id)
  }
}
