import { FC, HTMLAttributes, useEffect, useState } from "react";
import { cm } from "../lib/utils";

import { InitialStateProps } from "../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { addAccountData, removeAccountData, updateAccountData } from "../redux/actions";
import { AccountDataProps } from "../types/form";
import { bankAccountDetailsMock } from "../mock/account-mock";

export interface MakePaymentFormProps extends HTMLAttributes<HTMLDivElement> {}

const MakePaymentForm: FC<MakePaymentFormProps> = ({ className }) => {
    const dispatch = useDispatch();
    const { accountData, accountList } = useSelector((state: { data: InitialStateProps }) => state.data);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [accountNumberValidation, setAccountNumberValidation] = useState<boolean>(false);

    useEffect(() => {
        if (accountData) {
            const status = (bankAccountDetailsMock || [])?.some((account) => {
                return (
                    account?.IFSCCode === accountData?.ifscCode && account?.accountNumber === accountData?.accountNumber
                );
            });
            console.log(status);
            setAccountNumberValidation(status);
        }
    }, [accountData, accountData?.accountNumber]);

    const makePayment = async () => {
        setIsLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const updateAccountList: AccountDataProps[] =
                accountList?.map((account: AccountDataProps) => {
                    return account.accountNumber === accountData?.accountNumber
                        ? {
                              accountNumber: account?.accountNumber,
                              ifscCode: account?.ifscCode,
                              verifyStatus: accountNumberValidation ? "success" : "error",
                              amountSent: accountNumberValidation ? 1 : 0,
                              bankName: account?.bankName,
                              location: account?.location,
                              image: account?.image,
                          }
                        : account;
                }) || [];
            dispatch(
                addAccountData(
                    updateAccountList?.filter((account) => account?.accountNumber === accountData?.accountNumber)[0]
                )
            );
            dispatch(updateAccountData(updateAccountList));
            localStorage.setItem("account-data", JSON.stringify(updateAccountList));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    return (
        <div className={cm("flex flex-col gap-8 px-8 py-5 rounded-xl", className)}>
            <div className="text-3xl font-semiBold">Mange account verification</div>
            <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2">
                    <span className="col-span-1 font-medium uppercase text-grayDark">Bank Name</span>
                    <span className="col-span-1 text-biege">{accountData?.bankName}</span>
                </div>
                <div className="grid grid-cols-2">
                    <span className="col-span-1 font-medium uppercase text-grayDark">Account Number</span>
                    <span className="col-span-1 text-biege">{accountData?.accountNumber}</span>
                </div>
                <div className="grid grid-cols-2">
                    <span className="col-span-1 font-medium uppercase text-grayDark">IFSC Code</span>
                    <span className="col-span-1 text-biege">{accountData?.ifscCode}</span>
                </div>
            </div>
            <div className="col-span-2">
                <span className="flex px-5 py-2 bg-neutral-800">Make Payment for verification account</span>
                <span className="flex justify-between text-2xl mt-11 font-extraBold">
                    <span className="flex flex-col gap-2">
                        <span
                            className={
                                accountData?.verifyStatus === "pending"
                                    ? "text-amber-700"
                                    : accountData?.verifyStatus === "error"
                                    ? "text-rose-700"
                                    : "text-lime-500"
                            }
                        >
                            {accountData?.verifyStatus === "pending" ? "Total Amount" : "Amount Paid "}
                        </span>
                        <span
                            className={`px-3 py-1 text-sm font-regular ${
                                accountData?.verifyStatus === "error" ? "bg-rose-900" : "bg-lime-900"
                            }`}
                        >
                            {accountData?.verifyStatus === "pending"
                                ? "This payment is for only verify account"
                                : accountData?.verifyStatus === "success"
                                ? "Account has been verified successfully"
                                : "Account has been not verified successfully"}
                        </span>
                    </span>
                    <span
                        className={
                            accountData?.verifyStatus === "pending"
                                ? "text-amber-700"
                                : accountData?.verifyStatus === "error"
                                ? "text-rose-700"
                                : "text-lime-500"
                        }
                    >
                        ₹1
                    </span>
                </span>
                {accountData?.verifyStatus === "pending" && (
                    <span className="flex justify-end mt-11">
                        {!isLoading && (
                            <button
                                className="flex items-center justify-center gap-1 px-5 py-2 text-xl font-medium bg-teal-800 rounded-lg hover:bg-teal-900"
                                onClick={makePayment}
                            >
                                Make Payment
                            </button>
                        )}
                        {isLoading && <img src={logo} alt="logo" className="w-10 animate-spin" />}
                    </span>
                )}
            </div>
        </div>
    );
};

export default MakePaymentForm;
