import { inject, injectable } from 'inversify'
import symbols from '../../../ioc/tokens'
import JobRepository from '../../repository/job-repository'

@injectable()
export default class DeleteJobUseCase {
  constructor(@inject(symbols.JobRepository) private jobRepository: JobRepository) {}

  async execute(id: string): Promise<void> {
    await this.jobRepository.delete(id)
  }
}
