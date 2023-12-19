import { z } from "zod";

const CreateJobRequestSchema = z.object({
    title: z.string(),
    description: z.string(),
    organizationId: z.string(),
    employmentType: z.enum([
        "full-time", 
        "part-time", 
        "contract", 
        "internship", 
        "volunteer", 
    ]),
    category: z.array(z.string()),
    skills: z.array(z.string()),
    salaryMin: z.string(),
    salaryMax: z.string(),
    expiryDate: z.string().datetime(),
    status: z.enum(["published", "draft", "closed", "expired"]).default("published"),
    location: z.object({
        latitude: z.number(),
        longitude: z.number(),
    }),
});

export default CreateJobRequestSchema

export type CreateJobRequest = z.infer<typeof CreateJobRequestSchema>;