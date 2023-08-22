import {useRouter} from "next/router";
import {LoginRequestSchemaType} from "@/model/request/auth.request";
import * as authService from "@/service/auth.service";
import {HTTPError} from "ky";
import {toast} from "react-toastify";
import {renderError} from "@/util/error.util";

export const useAuthStore = () => {

    const router = useRouter();

    const login = (loginRequest: LoginRequestSchemaType) => {
        authService.login(loginRequest)
            .then((response) => {
                localStorage.setItem("token", response.token);
                toast.success("Login successful");
                router.push("/");
            }).catch((error: HTTPError) => {
            console.log(error);
            renderError(error, "Signin failed");
        });
    }

    const logout = () => {
        localStorage.removeItem("token");
        toast.success("Logout successful");
        router.push("/login");
    }

    return {
        login,
        logout
    }
}