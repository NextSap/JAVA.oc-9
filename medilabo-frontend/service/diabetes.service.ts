import {base_url} from "@/config/service.config";
import {RiskLevelResponseSchema} from "@/model/response/diabetes.response";
import {api} from "@/config/ky.config";

const endpoint: string = `${base_url}/medilabo-diabetes/risk`;

export const getRisk = async (id: string) => {
    return await api.get(`${endpoint}/${id}`).json().then(RiskLevelResponseSchema.parse);
}