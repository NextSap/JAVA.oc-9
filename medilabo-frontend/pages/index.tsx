import React from 'react';
import PatientCard from "@/components/page/patientcard.page";
import {usePatientStore} from "@/store/patient.store";
import {PatientResponseSchemaType} from "@/model/response/patient.response";
import Button from "@/components/ui/button.ui";
import {useRouter} from "next/router";

const Home = () => {

    const router = useRouter();
    const patientStore = usePatientStore();

    const {
        data
    } = patientStore.getAllPatients();

    return (
        <div>
            <div className="flex flex-col gap-5">
                <Button onClick={() => router.push('/logout')}>Logout</Button>
                <Button onClick={() => router.push('/create/patient')}>Create a patient</Button>
            </div>
            <h1>Patients list :</h1>
            <div className="flex flex-col gap-0.5 w-[300px]">
                {data?.map((patient: PatientResponseSchemaType) => (
                    <PatientCard key={patient.id} patient={patient}/>
                ))}
            </div>
        </div>
    );
};

export default Home;