import React from 'react';
import {z} from "zod";
import {usePatientStore} from "@/store/patient.store";
import {useRouter} from "next/router";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createPatient, updatePatient} from "@/service/patient.service";
import {PatientRequestSchemaType} from "@/model/request/patient.request";
import {toast} from "react-toastify";
import {HTTPError} from "ky";
import {renderError} from "@/util/error.util";
import {createNotebook} from "@/service/notes.service";
import Button from "@/components/ui/button.ui";
import Form from "@/components/ui/form.ui";
import Input from "@/components/ui/input.ui";

const UserForm = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    gender: z.string().regex(new RegExp("^(FEMALE|MALE)$"), "Valid gender required (FEMALE or MALE)"),
    birthdate: z.string().regex(new RegExp("^(?!0000)[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$"), "Valid date is required (YYYY-MM-DD)"),
    address: z.string().optional(),
    phoneNumber: z.string().optional(),
})

type FormValues = z.infer<typeof UserForm>;

const CreatePatient = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({resolver: zodResolver(UserForm)});

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        createPatient(data as PatientRequestSchemaType).then((json) => {
            createNotebook(json.id);
            toast.success("Patient created successfully")
            router.push(`/`)
        }).catch((error: HTTPError) => renderError(error, "Error while updating patient"));
    }

    return (
        <div className="flex flex-col items-center gap-10 mt-5">
            <Button onClick={() => router.push(`/`)}>Back to the menu</Button>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input register={register("firstName")}
                       id="firstName" label="firstName :" type="text"
                       placeholder="firstName"
                       errormessage={errors.firstName?.message}
                />
                <Input register={register("lastName")}
                       id="lastName" label="lastName :" type="text"
                       placeholder="lastName"
                       errormessage={errors.lastName?.message}
                />
                <Input register={register("gender")}
                       id="gender" label="gender :" type="text"
                       placeholder="gender"
                       errormessage={errors.gender?.message}
                />
                <Input register={register("birthdate")}
                       id="birthdate" label="birthdate :" type="text"
                       placeholder="birthdate"
                       errormessage={errors.birthdate?.message}
                />
                <Input register={register("address")}
                       id="address" label="address :" type="text"
                       placeholder="address"
                       errormessage={errors.address?.message}
                />
                <Input register={register("phoneNumber")}
                       id="phoneNumber" label="phoneNumber :" type="text"
                       placeholder="phoneNumber"
                       errormessage={errors.phoneNumber?.message}
                />
                <Button type="submit">Create</Button>
            </Form>
        </div>
    );
};

export default CreatePatient;