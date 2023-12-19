import { v4 } from 'uuid';
import { ValueObject } from '../shared/value-object';
interface UniqueEntityIDProps {
  value: string
}

export class UniqueEntityID extends ValueObject<UniqueEntityIDProps> {
  private constructor(props: UniqueEntityIDProps) {
    super(props)
  }

  get value(): string {
    return this.props.value
  }

  public static create(id: string = v4()): UniqueEntityID {
    return new UniqueEntityID({ value: id as string })
  }
}