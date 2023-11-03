"use client";

import axios from "axios";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";

const RegisterModal = () => {
  const registerModal = useRegisterModal(); // for form visibility
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => registerModal.onClose())
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading 
      title="Welcome to Airbnb"
      subtitle="create an Account"
      />
      <Input/>
    </div>
  )

  return (
		<Modal 
		title="Register"
		actionLabel="Continue"
    body={bodyContent}
		disabled={isLoading}
		isOpen={registerModal.isOpen}
		onClose={registerModal.onClose}
		onSubmit={handleSubmit(onSubmit)}
		/>

	)
};

export default RegisterModal;