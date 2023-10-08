import { useEffect, useState } from "react";
import { getAccountData } from "../../lib/utils";
import { AccountDataProps } from "../../types/form";
import notData from "../../assets/no-data.png";
import { addAccountData, updateAccountData } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { InitialStateProps } from "../../redux/reducer";

const AccountList = () => {
    const dispatch = useDispatch();

    const [initialCount, setinitialCount] = useState<number>(3);
    const { accountList, accountData } = useSelector((state: { data: InitialStateProps }) => state.data);

    useEffect(() => {
        const accountData = getAccountData();
        dispatch(updateAccountData(accountData));
    }, [dispatch]);

    const verifyAccountDetail = (account: AccountDataProps) => {
        account?.verifyStatus !== "success" && dispatch(addAccountData(account));
    };

    const showMore = () => {
        setinitialCount((old) => old + 3);
    };

    return (
        <div className="px-8 pt-5 pb-12 rounded-xl bg-charcoal">
            <div className="mt-3 mb-6 text-white">
                <span className="text-3xl font-semiBold">Account details list</span>
            </div>
            {accountList?.length === 0 ? (
                <div className="flex items-center justify-center w-full">
                    <img src={notData} className="h-auto max-w-sm" alt="no-data" />
                </div>
            ) : (
                <>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {accountList?.slice(0, initialCount)?.map((account: AccountDataProps, key: number) => {
                            return (
                                <li
                                    className={`px-4 py-3 border-0 border-transparent cursor-pointer sm:py-4 hover:bg-neutral-900 ${
                                        account?.accountNumber === accountData?.accountNumber && "bg-neutral-900"
                                    }`}
                                    key={key}
                                    onClick={() => verifyAccountDetail(account)}
                                >
                                    <div className="flex flex-col items-center justify-between sm:flex-row">
                                        <div className="flex flex-col items-center justify-center min-w-0 sm:flex-row">
                                            <div className="flex items-center justify-center mr-3 rounded-full w-9 h-9 bg-biege">
                                                <img src={account?.image} alt={account?.bankName} />
                                            </div>
                                            <div className="flex flex-col items-center sm:items-start">
                                                <p className="font-medium truncate text-amber-100">
                                                    {account?.bankName}
                                                </p>
                                                <div className="flex gap-3">
                                                    <span className="text-neutral-500">{account?.location}</span>
                                                    {account?.verifyStatus === "pending" && (
                                                        <span className="font-bold rounded-xl text-amber-600">
                                                            {account?.verifyStatus}
                                                        </span>
                                                    )}
                                                    {account?.verifyStatus === "success" && (
                                                        <span className="font-bold rounded-xl text-lime-600">
                                                            {account?.verifyStatus}
                                                        </span>
                                                    )}
                                                    {account?.verifyStatus === "error" && (
                                                        <span className="font-bold rounded-xl text-rose-600">
                                                            {account?.verifyStatus}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center min-w-0 gap-3 sm:flex-col sm:gap-0 sm:items-end">
                                            <span>{account?.ifscCode}</span>
                                            <span>{account?.accountNumber}</span>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    {accountList?.length !== 0 && (accountList || [])?.length > initialCount && (
                        <div className="flex justify-end mt-5">
                            <button
                                className="px-5 py-2 capitalize rounded-xl bg-sky-700 font-semiBold hover:bg-sky-800"
                                onClick={showMore}
                            >
                                View more
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AccountList;
