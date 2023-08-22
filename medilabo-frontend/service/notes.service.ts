import {base_url} from "@/config/service.config";
import {NoteRequestSchemaType} from "@/model/request/note.request";
import {NotebookResponseSchema, NoteResponseSchema} from "@/model/response/note.response";
import {api} from "@/config/ky.config";

const endpoint: string = `${base_url}/medilabo-notes`;

export const getNotebookByUserId = async (id: string) => {
    return await api.get(`${endpoint}/notes/${id}`).json().then(NotebookResponseSchema.parse);
}

export const createNotebook = async (id: string) => {
    return await api.post(`${endpoint}/notebook/${id}`).json().then(NotebookResponseSchema.parse);
}

export const createNote = async (id: string, note: NoteRequestSchemaType) => {
    return await api.post(`${endpoint}/notes/${id}`, {json: note}).json().then(NoteResponseSchema.parse);
}