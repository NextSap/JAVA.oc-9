import {base_url} from "@/config/service.config";
import ky from "ky";
import {PatientResponseListSchema, PatientResponseSchema} from "@/model/response/patient.response";
import {PatientRequestSchemaType} from "@/model/request/patient.request";
import {api} from "@/config/ky.config";

const endpoint: string = `${base_url}/medilabo-patient/patient`;

export const getAllPatients = async () => {
    return await api.get(`${endpoint}`).json().then(PatientResponseListSchema.parse);
}

export const getPatientById = async (id: string) => {
    return await api.get(`${endpoint}/${id}`).json().then(PatientResponseSchema.parse);
}

export const createPatient = async (patient: PatientRequestSchemaType) => {
    return await api.post(`${endpoint}`, {json: patient}).json().then(PatientResponseSchema.parse);
}

export const updatePatient = async (id: string, patient: PatientRequestSchemaType) => {
    return await api.put(`${endpoint}/${id}`, {json: patient}).json().then(PatientResponseSchema.parse);
}

export const deletePatient = async (id: string) => {
    return await api.delete(`${endpoint}/${id}`).json().then(PatientResponseSchema.parse);
}