import {useQuery} from "react-query";
import * as patientService from "../service/patient.service";
import {HTTPError} from "ky";
import {renderError} from "@/util/error.util";
import {PatientRequestSchemaType} from "@/model/request/patient.request";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

export const usePatientStore = () => {

    const router = useRouter();

    const getAllPatients = () => {
        return useQuery({
            queryKey: 'patients',
            queryFn: patientService.getAllPatients,
            onError: (error: HTTPError) => {
                renderError(error, "Failed to fetch patients");
            }
        })
    }

    const getPatientById = (id: string) => {
        return useQuery({
            queryKey: ['patients', id],
            queryFn: () => patientService.getPatientById(id),
            onError: (error: HTTPError) => {
                renderError(error, "Failed to fetch patient");
            }
        })
    }

    const createPatient = (patient: PatientRequestSchemaType) => {
        return useQuery({
            queryKey: 'patients',
            queryFn: () => patientService.createPatient(patient),
            onSuccess: () => {
                toast.success("Patient created successfully")
            },
            onError: (error: HTTPError) => {
                renderError(error, "Failed to create patient");
            }
        })
    }

    const updatePatient = (id: string, patient: PatientRequestSchemaType) => {
        const {data} = useQuery({
            queryKey: 'patients',
            queryFn: () => patientService.updatePatient(id, patient),
            onSuccess: () => {
                toast.success("Patient updated successfully")
                router.push(`/${id}`)
            },
            onError: (error: HTTPError) => {
                renderError(error, "Failed to update patient");
            }
        })

        return { data }
    }

    const deletePatient = (id: string) => {
        return useQuery({
            queryKey: 'patients',
            queryFn: () => patientService.deletePatient(id),
            onSuccess: () => {
                toast.success("Patient deleted successfully")
            },
            onError: (error: HTTPError) => {
                renderError(error, "Failed to delete patient");
            }
        })
    }

    return {
        getAllPatients,
        getPatientById,
        createPatient,
        updatePatient,
        deletePatient
    }
}