import { inject, injectable } from 'inversify'
import symbols from '../../../ioc/tokens'
import JobRepository from '../../repository/job-repository'
import { CreateJobRequest } from './create-job-request'
import Job from '../../entity/job'
import { EmploymentType } from '../../value-objects/employment-type'
import { JobStatus } from '../../value-objects/job-status'

interface CreateJobUseCasePresentation {
    status: string
}

@injectable()
export default class CreateJobUseCase {
  constructor(@inject(symbols.JobRepository) private jobRepository: JobRepository) {}

  async execute(job: CreateJobRequest): Promise<CreateJobUseCasePresentation> {
    const newJob = Job.create({
        title: job.title,
        description: job.description,
        location: job.location,
        organizationId: job.organizationId,
        employmentType: EmploymentType.create(job.employmentType),
        status: JobStatus.create(job.status),
        salaryMin: BigInt(job.salaryMin),
        salaryMax: BigInt(job.salaryMax),
        postedDate: new Date(),
        expiryDate: new Date(),
        updatedAt: new Date(),
    })
    await this.jobRepository.save(newJob)
    return {
        status: 'success'
    }
  }
}
