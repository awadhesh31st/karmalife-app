import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import { cm, getAccountData } from "../lib/utils";

import { AccountDataProps } from "../types/form";
import { FaSpinner } from "react-icons/fa";
import { Input } from "./ui/input";
import Message from "./ui/message";
import { bankAccountDetailsMock } from "../mock/account-mock";
import { buttonVariants } from "./ui/button";
import { schema } from "../lib/validations/auth";
import { showThankPage } from "../redux/actions";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

export interface AccountFormProps extends HTMLAttributes<HTMLDivElement> {}

const AccountForm: FC<AccountFormProps> = ({ className }) => {
   const dispatch = useDispatch();
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [isError, setIsError] = useState<boolean>(false);
   const [accountDataList, setAccountDataList] = useState<AccountDataProps[]>([]);

   useEffect(() => {
      const accountData = getAccountData();
      setAccountDataList(accountData);
   }, []);

   useEffect(() => {
      isError &&
         setTimeout(() => {
            setIsError(false);
         }, 3000);
   }, [isError]);

   const {
      handleSubmit,
      control,
      formState: {
         errors: { accountNumber, ifscCode },
      },
      setError,
   } = useForm<AccountDataProps>({
      resolver: yupResolver(schema),
   });

   const onSubmit: SubmitHandler<AccountDataProps> = async (data) => {
      setIsLoading(true);
      try {
         const { ifscCode, accountNumber }: AccountDataProps = data;
         const isIFSCValid = bankAccountDetailsMock.some(
            (account) => account?.IFSCCode === ifscCode
         );
         await new Promise((resolve) => setTimeout(resolve, 2000));
         if (isIFSCValid) {
            const hasAccountDetail = accountDataList.some(
               (account) =>
                  account.ifscCode === ifscCode && account.accountNumber === accountNumber
            );
            if (!hasAccountDetail) {
               localStorage.setItem(
                  "account-data",
                  JSON.stringify([...[data], ...accountDataList])
               );
               dispatch(showThankPage(true));
            } else {
               setIsError(true);
            }
         } else {
            setError("ifscCode", {
               type: "manual",
               message: "IFSC code is invalid",
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
                     name="accountNumber"
                     control={control}
                     render={({ field }) => (
                        <Input {...field} placeholder="Enter your account number" />
                     )}
                  />
                  {accountNumber?.message && <Message message={accountNumber?.message} />}
               </div>
               <div className="grid gap-1">
                  <Controller
                     name="ifscCode"
                     control={control}
                     render={({ field }) => (
                        <Input {...field} placeholder="Enter your IFSC code" />
                     )}
                  />
                  {ifscCode?.message && <Message message={ifscCode?.message} />}
               </div>
               {isError && <Message message="Account already exists in our database." />}
               <button className={cm(buttonVariants(), "mt-4")} disabled={isLoading}>
                  {isLoading && <FaSpinner className="w-4 h-4 mr-2 animate-spin" />}
                  {isLoading ? "Saving you data ..." : "Submit"}
               </button>
            </div>
         </form>
      </div>
   );
};

export default AccountForm;
