import {z} from "zod";

export const RiskLevelResponseSchema = z.object({
    riskLevel: z.string(),
})

export type RiskLevelResponse = z.infer<typeof RiskLevelResponseSchema>