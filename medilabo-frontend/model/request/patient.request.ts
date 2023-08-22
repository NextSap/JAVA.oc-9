import {z} from "zod";

export const PatientRequestSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    birthdate: z.string(),
    gender: z.string(),
    address: z.string(),
    phone: z.string(),
})

export type PatientRequestSchemaType = z.infer<typeof PatientRequestSchema>