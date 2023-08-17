import {z} from 'zod'

export const PatientSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    birthdate: z.string(),
    gender: z.string(),
    address: z.string(),
    phone: z.string(),
})

export type Patient = z.infer<typeof PatientSchema>