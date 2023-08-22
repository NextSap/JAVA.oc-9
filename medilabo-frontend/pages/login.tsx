import {useRouter} from "next/router";
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import Form from "@/components/ui/form.ui";
import Input from "@/components/ui/input.ui";
import CheckBox from "@/components/ui/checkbox.ui";
import Button from "@/components/ui/button.ui";
import {useAuthStore} from "@/store/auth.store";

const LoginSchema = z.object({
    email: z.string().email("Valid email is required"),
    password: z.string().min(1, "Password is required"),
    rememberMe: z.boolean()
})

type FormValues = z.infer<typeof LoginSchema>;

const Login = () => {

    const authStore = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({resolver: zodResolver(LoginSchema)});

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        authStore.login({email: data.email, password: data.password, rememberMe: data.rememberMe});
    }

    return (
        <div className="flex flex-col items-center gap-10 mt-5">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input register={register("email")}
                         id="email" label="Email :" type="email"
                         placeholder="Email"
                         errormessage={errors.email?.message}
                />
                <Input register={register("password")}
                         id="password" label="Password :" type="password"
                         placeholder="Password"
                         errormessage={errors.password?.message}
                />
                <CheckBox register={register("rememberMe")} id="rememberMe" label="Remember me"/>
                <Button type="submit">Log in</Button>
            </Form>
        </div>
    );
};

export default Login;