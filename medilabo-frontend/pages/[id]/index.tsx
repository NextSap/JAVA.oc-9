import React from 'react';
import {useRouter} from "next/router";

const Index = () => {

    const router = useRouter();

    return (
        <div>
            <h1>Fiche Patient : {router.query.id}</h1>
        </div>
    );
};

export default Index;