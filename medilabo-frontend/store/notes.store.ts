import {getNotebookByUserId} from "@/service/notes.service";
import {useQuery} from "react-query";
import {HTTPError} from "ky";
import {renderError} from "@/util/error.util";

export const useNotesStore = () => {
    const getNotebook = (id: string) => {
        return useQuery({
            queryKey: ['notebook', id],
            queryFn: () => getNotebookByUserId(id),
            onError: (error: HTTPError) => {
                renderError(error, "Failed to fetch notebook")
            }
        })
    }



    return {
        getNotebook
    }
}