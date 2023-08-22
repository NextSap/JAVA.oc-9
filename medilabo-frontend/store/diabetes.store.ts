import {useQuery} from "react-query";
import * as diabetesService from "../service/diabetes.service";
import {HTTPError} from "ky";
import {renderError} from "@/util/error.util";

export const useDiabetesStore = () => {

    const getRisk = (id: string) => {
        return useQuery({
            queryKey: ['risk', id],
            queryFn: () => diabetesService.getRisk(id),
            onError: (error: HTTPError) => {
                renderError(error, "Failed to fetch risk");
            }
        })
    }

    return {
        getRisk
    }
}