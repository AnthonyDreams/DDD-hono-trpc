import { z } from "zod";

const UpdateJobRequestSchema = z.object({
    id: z.string(),
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

type UpdateJobRequestType = z.infer<typeof UpdateJobRequestSchema>;

// Make all fields optional except 'id'
export type UpdateJobRequest = Partial<Omit<UpdateJobRequestType, 'id'>> & Pick<UpdateJobRequestType, 'id'>;

export default UpdateJobRequestSchema
