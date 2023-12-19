import JobRepository from '../../core/repository/job-repository'
import { DbClient } from '../../infra/database/drizzle'
import Job from '../../core/entity/job'
import { JobMapper } from '../../core/repository/mapper/job-mapper'
import { EmploymentType } from '../../core/value-objects/employment-type'
import { DrizzleJobMapper } from './mapper/drizzle-job-mapper'
import { job } from '../database/drizzle/schema'
import { eq } from 'drizzle-orm'
import { inject, injectable } from 'inversify'
import { JobStatus } from '../../core/value-objects/job-status'
import tokens from '../../ioc/tokens'

@injectable()
export default class DrizzleJobRepository implements JobRepository {
  constructor(@inject(tokens.DbClient) readonly client: DbClient) {}

  async save(_job: Job): Promise<void> {
    const newJob = DrizzleJobMapper.toPersistence(_job)
    await this.client.insert(job).values(newJob)
  }

  async update(id: string, _job: Partial<Job>): Promise<Job> {
    const newJob = DrizzleJobMapper.partialToPersistence(_job)
    await this.client.update(job).set(newJob).where(eq(job.id, id))
    return await this.findById(id)
  }

  async delete(id: string): Promise<void> {
    await this.client.delete(job).where(eq(job.id, id))
  }

  async findById(id: string): Promise<Job> {
    const result = await this.client.query.job.findFirst({
      where: (jobs, { eq }) => eq(jobs.id, id),
    })

    if (!result) {
      throw new Error(`Job with id ${id} not found`)
    }

    return this.resultToDomain(result)
  }

  async findByOrganizationId(organizationId: string): Promise<Job[]> {
    const results = await this.client.query.job.findMany({
      where: (jobs, { eq }) => eq(jobs.organizationId, organizationId),
    })
    return results.map((result) => this.resultToDomain(result))
  }

  async findAll(): Promise<Job[]> {
    const results = await this.client.query.job.findMany()
    return results.map((result) => this.resultToDomain(result))
  }

  private resultToDomain(result: typeof job.$inferSelect): Job {
    return JobMapper.toDomain(
      {
        title: result.title,
        description: result.description,
        organizationId: result.organizationId,
        postedDate: new Date(result.postedDate),
        expiryDate: new Date(result.expiryDate),
        updatedAt: new Date(result.updatedAt),
        location: result.location,
        employmentType: EmploymentType.create(result.employmentType),
        status: JobStatus.create(result.status),
        salaryMin: null,
        salaryMax: null,
      },
      result.id
    )
  }
}
