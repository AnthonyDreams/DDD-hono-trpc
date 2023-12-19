import { ne } from "drizzle-orm";
import Job from "../../../core/entity/job";
import { job } from "../../database/drizzle/schema";
import { UniqueEntityID } from "../../../core/value-objects/unique-entity-id";

type NewJob = typeof job.$inferInsert;

export class DrizzleJobMapper {
    static toPersistence(_job: Job): NewJob {
        return {
            id: UniqueEntityID.create(_job.id).value,
            title: _job.title,
            description: _job.description,
            organizationId: _job.organizationId,
            expiryDate: _job.expiryDate.toISOString(),
            location: _job.location,
            employmentType: _job.employmentType.value,
            salaryMin: _job.salaryMin ? Number(_job.salaryMin): null,
            salaryMax: _job.salaryMax ? Number(_job.salaryMax): null,
            status: _job.status.value,
        }
    }

    static partialToPersistence(_job: Partial<Job>): Partial<NewJob> {
        return {
            title: _job.title,
            description: _job.description,
            organizationId: _job.organizationId,
            expiryDate: _job.expiryDate?.toISOString(),
            location: _job.location,
            employmentType: _job.employmentType?.value,
            salaryMin: _job.salaryMin ? Number(_job.salaryMin): null,
            salaryMax: _job.salaryMax ? Number(_job.salaryMax): null,
            status: _job.status?.value,
        }
    }
}