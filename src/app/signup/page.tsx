"use client";

import Link from "next/link";
import React from "react";
import mailIcon from "../../assest/mail.svg";
import lockIcon from "../../assest/lock.svg";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormFields from "@/components/FormFields";
import NavLogo from "@/components/NavLogo";
import { supabase } from "@/supabaseClient";
import { useRouter } from "next/navigation";

const schema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
const SignUp = () => {
  const router = useRouter();
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
    const { data: signUpData, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error("Error signing up:", error.message);
    } else {
      router.push("/user");
      console.log("Successfully signed up:", signUpData?.user);
    }
    console.log("success", data);
  };

  return (
    <div className="bg-lightGrey flex flex-col items-center w-full h-screen box-sizing-border">
      <NavLogo />
      <div className="rounded-[0.8rem] bg-white flex flex-col p-[2.5rem] w-[472px] box-sizing-border">
        <div className="mb-[2.5rem] flex flex-col self-start w-[fit-content] box-sizing-border">
          <h2 className="mb-[0.5rem] font-bold text-[2rem] text-darkGrey">
            Create Account
          </h2>
          <p className="font-normal text-[1rem]  text-gray">
            Let&apos;t get you started sharing your links!
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-[fit-content] box-sizing-border"
        >
          <div className="mb-[1.5rem_] flex flex-col">
            <FormFields
              id="email"
              label="Email address"
              type="email"
              placeholder=" e.g. alex@email.com"
              icon={mailIcon}
              register={register}
              error={errors.email?.message}
            />

<FormFields
  id="password"
  label="Create password"
  type="password"
  placeholder="At least 8 characters"
  icon={lockIcon}
  register={register}
  error={errors.password?.message}
/>

<FormFields
  id="confirmPassword"
  label="Confirm password"
  type="password"
  placeholder="At least 8 characters"
  icon={lockIcon}
  register={register}
  error={errors.confirmPassword?.message}
/>

            <p className="pt-4 text-grayy text-[12px]">
              Password must contain at least 8 characters
            </p>
          </div>
          <button
            type="submit"
            className="rounded-[0.5rem] bg-purple text-white font-semibold w-full h-[46px]"
          >
            Create account
          </button>
        </form>
        <p className=" font-normal text-[1rem] text-grayy mt-4 text-center">
          Already have an accout?
          <span className="text-purple">
            <Link href="/login"> Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
