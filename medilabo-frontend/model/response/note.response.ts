import {z} from "zod";

export const NoteResponseSchema = z.object({
    title: z.string(),
    content: z.string(),
    createdAt: z.string(),
    trigger: z.boolean()
})

export const NotebookResponseSchema = z.object({
    notes: z.array(NoteResponseSchema)
});

export type NoteResponseSchemaType = z.infer<typeof NoteResponseSchema>
export type NotebookResponseSchemaType = z.infer<typeof NotebookResponseSchema>
