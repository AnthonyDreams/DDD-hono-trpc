import { UniqueEntityID } from "../value-objects/unique-entity-id";
import { Entity } from "./contracts/entity";

interface IndustryProps {
    id: bigint;
    name: string;
}

export default class Industry extends Entity<IndustryProps> {
    private constructor(props: IndustryProps, id?: UniqueEntityID) {
    super(props, id)
  }
}