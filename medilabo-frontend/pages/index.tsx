import React from 'react';
import PatientCard from "@/components/page/patientcard.page";
import {usePatientStore} from "@/store/patient.store";
import {PatientResponseSchemaType} from "@/model/response/patient.response";

const Home = () => {

    const patientStore = usePatientStore();

    const {
        data,
        isLoading,
        isError
    } = patientStore.getAllPatients();

    return (
        <div>
            <h1>Liste des patients :</h1>
            <div className="flex flex-col gap-0.5 w-[300px]">
                {data?.map((patient: PatientResponseSchemaType) => (
                    <PatientCard key={patient.id} patient={patient}/>
                ))}
            </div>
        </div>
    );
};

export default Home;