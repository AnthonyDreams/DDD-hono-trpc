import Job from "../entity/job";
import { BaseRepository } from "./base-repository";

export default interface JobRepository extends BaseRepository<Job> {
    findByOrganizationId(organizationId: string): Promise<Job[]>;
    findAll(): Promise<Job[]>;
}