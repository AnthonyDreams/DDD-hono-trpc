import { EmploymentType } from '../value-objects/employment-type'
import { JobStatus } from '../value-objects/job-status'
import { UniqueEntityID } from '../value-objects/unique-entity-id'
import { Entity } from './contracts/entity'

export interface JobProps {
  title: string
  description: string | null
  location: unknown
  organizationId: string | null
  employmentType: EmploymentType
  status: JobStatus
  salaryMin: bigint | null
  salaryMax: bigint | null
  postedDate: Date
  expiryDate: Date
  updatedAt: Date
}

export default class Job extends Entity<JobProps> {
  static create(data: JobProps, id?: string): Job {
    return new Job(data, UniqueEntityID.create(id))
  }
  private constructor(props: JobProps, id?: UniqueEntityID) {
    super(props, id)
  }

  get id(): string {
    return this._id.value
  }

  get title(): string {
    return this.props.title
  }

  get description(): string | null {
    return this.props.description
  }

  get location(): unknown {
    return this.props.location
  }

  get organizationId(): string | null {
    return this.props.organizationId
  }

  get employmentType(): EmploymentType {
    return this.props.employmentType
  }

  get status(): JobStatus {
    return this.props.status
  }

  get salaryMin(): bigint | null {
    return this.props.salaryMin
  }

  get salaryMax(): bigint | null {
    return this.props.salaryMax
  }

  get postedDate(): Date {
    return this.props.postedDate
  }

  get expiryDate(): Date {
    return this.props.expiryDate
  }

  get updatedAt(): Date {
    return this.props.updatedAt
  }
}
