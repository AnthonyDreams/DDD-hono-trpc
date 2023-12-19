import { ValueObject } from '../shared/value-object'

enum EmploymentTypeEnum {
  FULL_TIME = 'full-time',
  PART_TIME = 'part-time',
  CONTRACT = 'contract',
  TEMPORARY = 'temporary',
  VOLUNTEER = 'volunteer',
  INTERNSHIP = 'internship',
}

interface EmploymentTypeProps {
  value: EmploymentTypeEnum
}

export class EmploymentType extends ValueObject<EmploymentTypeProps> {
  private constructor(props: EmploymentTypeProps) {
    super(props)
  }

  get value(): EmploymentTypeEnum {
    return this.props.value
  }

  public static create(name: string): EmploymentType {
    return new EmploymentType({ value: name as EmploymentTypeEnum })
  }
}
