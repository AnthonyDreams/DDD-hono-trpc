import Job, { JobProps } from "../../entity/job";

export class JobMapper {
    static toDomain(data: JobProps, id: string): Job {
        return Job.create(data, id);
    }
}