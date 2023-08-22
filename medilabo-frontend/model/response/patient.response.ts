import {z} from 'zod'

export const PatientResponseSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    birthdate: z.string(),
    gender: z.string(),
    address: z.string(),
    phoneNumber: z.string(),
})

export const PatientResponseListSchema = z.array(PatientResponseSchema)

export type PatientResponseSchemaType = z.infer<typeof PatientResponseSchema>