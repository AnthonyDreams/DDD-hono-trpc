import { UniqueEntityID } from "../value-objects/unique-entity-id";
import { Entity } from "./contracts/entity";

interface ExperienceEntityProps {
    id: bigint;
    title: string;
    company: string;
    description: string;
    startedAt: Date;
    endedAt: Date;
}

export default class Experience extends Entity<ExperienceEntityProps> {
    private constructor(props: ExperienceEntityProps, id?: UniqueEntityID) {
    super(props, id)
  }
}