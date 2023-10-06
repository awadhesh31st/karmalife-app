import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import { cm, isAdminLogin } from "../lib/utils";

import { FaSpinner } from "react-icons/fa";
import { Input } from "./ui/input";
import { LoginFormProps } from "../types/form";
import Message from "./ui/message";
import { buttonVariants } from "./ui/button";
import { useNavigate } from "react-router-dom";

export interface AccountFormProps extends HTMLAttributes<HTMLDivElement> {}

const LoginForm: FC<AccountFormProps> = ({ className }) => {
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const {
      handleSubmit,
      control,
      formState: {
         errors: { username },
      },
      setError,
   } = useForm<LoginFormProps>();

   useEffect(() => {
      isAdminLogin() && navigate("/dashboard");
   }, [navigate]);

   const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
      setIsLoading(true);
      try {
         const { username }: LoginFormProps = data;
         const isValidUser = username === "admin";
         await new Promise((resolve) => setTimeout(resolve, 2000));
         if (isValidUser) {
            localStorage.setItem("admin-login", JSON.stringify(data));
            navigate("/dashboard");
         } else {
            setError("username", {
               type: "manual",
               message: "User name is invalid",
            });
         }
         setIsLoading(false);
      } catch (error) {
         setIsLoading(false);
      }
   };

   return (
      <div className={cm("grid gap-6", className)}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
               <div className="grid gap-1">
                  <Controller
                     name="username"
                     control={control}
                     render={({ field }) => (
                        <Input {...field} placeholder="Enter your username" />
                     )}
                  />
                  {username?.message && <Message message={username?.message} />}
               </div>
               <p className="text-sm text-grayDark">Hint: admin</p>
               <button className={cm(buttonVariants(), "mt-4")} disabled={isLoading}>
                  {isLoading && <FaSpinner className="w-4 h-4 mr-2 animate-spin" />}
                  {isLoading ? "Checking user ..." : "Login in"}
               </button>
            </div>
         </form>
      </div>
   );
};

export default LoginForm;
