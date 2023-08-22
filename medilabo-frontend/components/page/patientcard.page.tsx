import React from 'react';
import {Patient} from "@/model/response/patient.response";
import {useRouter} from "next/router";

type PatientCardProps = {
    patient: any;
}

const PatientCard = (props: PatientCardProps) => {

    const router = useRouter();

    return (
        <div className="border-2 flex justify-center items-center cursor-pointer duration-300" onClick={() => router.push(`/${props.patient.id}`)}>
            <p className="text-xs-2">{props.patient.firstName} {props.patient.lastName.toUpperCase()}</p>
        </div>
    );
};

export default PatientCard;