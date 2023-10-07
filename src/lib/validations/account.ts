import { AccountDataProps } from "../../types/form";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import { UseFormSetError } from "react-hook-form";
import { bankAccountDetailsMock } from "../../mock/account-mock";
import { showThankPage } from "../../redux/actions";

export const storeAccountData = async (
    data: AccountDataProps,
    accountDataList: AccountDataProps[],
    dispatch: Dispatch<AnyAction>,
    setIsError: React.Dispatch<React.SetStateAction<boolean>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: UseFormSetError<AccountDataProps>
) => {
    const { ifscCode, accountNumber }: AccountDataProps = data;
    const hasBank = bankAccountDetailsMock.find((account) => account?.IFSCCode === ifscCode);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (hasBank) {
        const hasAccountDetail = accountDataList.some(
            (account) => account.ifscCode === ifscCode && account.accountNumber === accountNumber
        );
        if (!hasAccountDetail) {
            localStorage.setItem(
                "account-data",
                JSON.stringify([
                    ...[
                        {
                            ...data,
                            verifyStatus: "pending",
                            amountSent: 0,
                            location: hasBank.location,
                            bankName: hasBank.bankName,
                            image: `https://robohash.org/${hasBank?.IFSCCode}.png`,
                        },
                    ],
                    ...accountDataList,
                ])
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
};
