import React from 'react';
import PatientCard from "@/components/PatientCard";

const Home = () => {


    return (
        <div>
            <h1>Liste des patients :</h1>
            <div className="flex flex-col gap-0.5 w-[300px]">
                <PatientCard patient={{id: "1", firstName: "John", lastName: "Doe"}}/>
                <PatientCard patient={{id: "1", firstName: "John", lastName: "Doe"}}/>
                <PatientCard patient={{id: "1", firstName: "John", lastName: "Doe"}}/>
                <PatientCard patient={{id: "1", firstName: "John", lastName: "Doe"}}/>
                <PatientCard patient={{id: "1", firstName: "John", lastName: "Doe"}}/>
            </div>
        </div>
    );
};

export default Home;