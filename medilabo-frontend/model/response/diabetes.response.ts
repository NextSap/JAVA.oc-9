import {z} from "zod";

export const RiskLevelResponseSchema = z.string();

export type RiskLevelResponse = z.infer<typeof RiskLevelResponseSchema>