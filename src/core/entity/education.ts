import { UniqueEntityID } from '../value-objects/unique-entity-id'
import { Entity } from './contracts/entity'

interface EducationEntityProps {
  id: bigint
  title: string
  university: string
  description: string
  startedAt: Date
  endedAt: Date
}

export default class Education extends Entity<EducationEntityProps> {
  private constructor(props: EducationEntityProps, id?: UniqueEntityID) {
    super(props, id)
  }
}
