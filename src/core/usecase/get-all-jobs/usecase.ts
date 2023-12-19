import { inject, injectable } from 'inversify'
import symbols from '../../../ioc/tokens'
import JobRepository from '../../repository/job-repository'
import Job from '../../entity/job'

@injectable()
export default class GetAllJobsUseCase {
  constructor(@inject(symbols.JobRepository) private jobRepository: JobRepository) {}

  async execute(): Promise<Job[]> {
    return await this.jobRepository.findAll()
  }
}
