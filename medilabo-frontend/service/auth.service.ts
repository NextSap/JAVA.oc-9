import {base_url} from "@/config/service.config";
import ky from "ky";
import {LoginRequestSchemaType} from "@/model/request/auth.request";
import {LoginResponseSchema} from "@/model/response/auth.response";

const endpoint: string = `${base_url}/medilabo-auth/auth`;

export const login = async (loginRequest: LoginRequestSchemaType) => {
    return await ky.post(`${endpoint}/login`, {json: loginRequest}).json().then(LoginResponseSchema.parse);
}