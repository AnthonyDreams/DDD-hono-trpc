import { ValueObject } from '../shared/value-object'

enum JobStatusEnum {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    EXPIRED = 'expired',
    CLOSED = 'closed'
}

interface JobStatusProps {
  value: JobStatusEnum
}

export class JobStatus extends ValueObject<JobStatusProps> {
  private constructor(props: JobStatusProps) {
    super(props)
  }

  get value(): JobStatusEnum {
    return this.props.value
  }

  public static create(name: string): JobStatus {
    return new JobStatus({ value: name as JobStatusEnum })
  }
}
