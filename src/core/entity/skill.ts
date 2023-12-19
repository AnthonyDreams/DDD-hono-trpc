import { Entity } from "./contracts/entity";

interface SkillProps {
    id: bigint;
    name: string;
}

export default class Skill extends Entity<SkillProps> {
    private constructor(props: SkillProps) {
        super(props);
    }
}