"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import mailIcon from "../../../assest/mail.svg";
import lockIcon from "../../../assest/lock.svg";
import FormFields from "../../../components/FormFields";
import NavLogo from "../../../components/NavLogo";
import { useRouter } from "next/navigation";
import { supabase } from "@/supabaseClient";
import { Button } from "@chakra-ui/react";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [errorNote, setErrorNote] = useState("");
  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { email, password } = data;
    const { data: signInData, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Error signing in", error.message);
      setErrorNote(error.message);
    } else {
      router.push("/user");
      console.log("Successfully signed up:", signInData?.user);
    }
  };

  return (
    <div className="bg-lightGrey flex flex-col items-center w-full h-screen box-sizing-border">
      <NavLogo />
      <div className="rounded-[0.8rem] bg-white flex flex-col p-[2.5rem] w-[472px] box-sizing-border">
        <div className="mb-[2.5rem] flex flex-col self-start w-[fit-content] box-sizing-border">
          <h2 className="mb-[0.5rem] font-bold text-[2rem] text-darkGrey">
            Login
          </h2>
          <p className="font-normal text-[1rem] text-gray">
            Welcome back! Please login to your account.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-[fit-content] box-sizing-border"
        >
          <FormFields
            label="Email address"
            type="email"
            placeholder="e.g. alex@email.com"
            icon={mailIcon}
            register={register}
            error={errors.email?.message}
            id="email"
          />
          <FormFields
            label="Password"
            type="password"
            placeholder="At least 8 characters"
            icon={lockIcon}
            register={register}
            error={errors.password?.message}
            id="password"
          />
          <p className="text-red-500 text-sm pt-4">{errorNote}</p>
          <Button
            variant="solid"
            type="submit"
            className="mt-[1.5rem] font-semibold w-full h-[46px]"
          >
            Login
          </Button>
        </form>
        <p className="font-normal text-[1rem] text-grayy mt-4 text-center">
          Don&apos;t have an account?
          <span className="text-purple">
            <Link href="/auth/signup"> Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
