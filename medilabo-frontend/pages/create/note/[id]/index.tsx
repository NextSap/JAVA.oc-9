import React from 'react';
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "react-toastify";
import {HTTPError} from "ky";
import {renderError} from "@/util/error.util";
import Input from "@/components/ui/input.ui";
import Button from "@/components/ui/button.ui";
import Form from "@/components/ui/form.ui";
import {useRouter} from "next/router";
import {createNote} from "@/service/notes.service";
import {NoteRequestSchemaType} from "@/model/request/note.request";
import TextArea from "@/components/ui/textarea.ui";

const NoteForm = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
})

type FormValues = z.infer<typeof NoteForm>;

const Create = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({resolver: zodResolver(NoteForm)});

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        createNote(router.query.id as string, data as NoteRequestSchemaType).then(() => {
            toast.success("Note created successfully")
            router.push(`/${router.query.id}`)
        }).catch((error: HTTPError) => renderError(error, "Error while updating patient"));
    }

    return (
        <div className="flex flex-col items-center gap-10 mt-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input register={register("title")}
                       id="title" label="title :" type="text"
                       placeholder="title"
                       errormessage={errors.title?.message}
                />
                <TextArea register={register("content")}
                       id="content" label="content :" cols={30} rows={10}
                       placeholder="content"
                       errormessage={errors.content?.message}

                />
                <Button type="submit">Create Note</Button>
            </Form>
        </div>
    );
};

export default Create;