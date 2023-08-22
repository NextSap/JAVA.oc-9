import {z} from "zod";

export const NoteRequestSchema = z.object({
    title: z.string(),
    content: z.string(),
})

export type NoteRequestSchemaType = z.infer<typeof NoteRequestSchema>