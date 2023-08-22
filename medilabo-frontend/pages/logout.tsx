import React, {useEffect} from 'react';
import {useAuthStore} from "@/store/auth.store";

const Logout = () => {

    const authStore = useAuthStore();

    useEffect(() => {
        authStore.logout();
    });

    return (
        <></>
    );
};

export default Logout;