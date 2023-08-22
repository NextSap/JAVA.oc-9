import React from 'react';
import {useRouter} from "next/router";
import {usePatientStore} from "@/store/patient.store";
import Button from "@/components/ui/button.ui";
import {useDiabetesStore} from "@/store/diabetes.store";
import {useNotesStore} from "@/store/notes.store";

const Index = () => {

    const router = useRouter();
    const patientStore = usePatientStore();
    const diabetesStore = useDiabetesStore();
    const notesStore = useNotesStore();

    const {
        data: patient
    } = patientStore.getPatientById(router.query.id as string);

    const {
        data: diabetes
    } = diabetesStore.getRisk(router.query.id as string);

    const {
        data: notes
    } = notesStore.getNotebook(router.query.id as string);

    return (
        <div className="flex flex-col gap-5">
            <Button onClick={() => router.push('/')}>Back to the menu</Button>
            <Button onClick={() => router.push(`/edit/${router.query.id}`)}>Modify</Button>
            <div>
                <h1>Fiche Patient : {patient?.firstName} {patient?.lastName}</h1>
                <p>Gender : {patient?.gender}</p>
                <p>Age : {patient?.birthdate}</p>
                <p>Phone : {patient?.phoneNumber}</p>
                <p>Address : {patient?.address}</p>
                <p>Diabetes risk : {diabetes}</p>
            </div>
            <div>
                <Button onClick={() => router.push(`/create/note/${router.query.id}`)}>Add a note</Button>
                <p>Notes</p>
                {notes?.notes.map((note, index) => {
                    return (
                        <div className="border" key={index}>
                            <p>{note.title} • {note.createdAt}</p>
                            <p className="whitespace-pre-line">{note.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Index;