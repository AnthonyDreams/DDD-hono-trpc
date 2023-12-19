import { inject, injectable } from 'inversify'
import symbols from '../../../ioc/tokens'
import JobRepository from '../../repository/job-repository'
import { UpdateJobRequest } from './update-job-request'
import Job from '../../entity/job'
import { EmploymentType } from '../../value-objects/employment-type'
import { JobStatus } from '../../value-objects/job-status'

@injectable()
export default class UpdateJobUseCase {
  constructor(@inject(symbols.JobRepository) private jobRepository: JobRepository) {}

  async execute(job: UpdateJobRequest): Promise<Job> {
    const updatedJob = {
        title: job.title,
        description: job.description,
        location: job.location,
        organizationId: job.organizationId,
        employmentType: job.employmentType ? EmploymentType.create(job.employmentType) : null,
        status: job.status ? JobStatus.create(job.status) : null,
        salaryMin: job.salaryMin ? BigInt(job.salaryMin) : null,
        salaryMax: job.salaryMax ? BigInt(job.salaryMax) : null,
        postedDate: new Date(),
        expiryDate: new Date(),
        updatedAt: new Date(),
      } as Job
    
    return await this.jobRepository.update(job.id, updatedJob)
  }
}
