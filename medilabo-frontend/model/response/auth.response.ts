import {z} from "zod";

export const LoginResponseSchema = z.object({
    token: z.string(),
});

export type LoginResponseSchemaType = z.infer<typeof LoginResponseSchema>;