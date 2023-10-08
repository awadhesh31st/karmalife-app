import { isAdminLogin } from "../lib/utils";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountList from "../components/ui/account-list";
import DateComponent from "../components/date";
import MakePaymentForm from "../components/make-payment-form";
import { InitialStateProps } from "../redux/reducer";
import { addAccountData } from "../redux/actions";

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const { accountData, accountList } = useSelector((state: { data: InitialStateProps }) => state.data);

    useEffect(() => {
        if (!isAdminLogin()) {
            navigate("/");
        }
    }, [dispatch, navigate]);

    useEffect(() => {
        const sum: number = accountList?.reduce((total, item) => total + (item.amountSent ?? 0), 0) || 0;
        setTotalAmount(sum);
        !accountData && accountList && dispatch(addAccountData(accountList?.[0]));
    }, [accountData, accountList, accountList?.length, dispatch]);

    return (
        <div className="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0">
            <div className="flex flex-col justify-between h-screen my-12 sm:my-24">
                <div className="grid grid-cols-2 gap-16">
                    <div className="col-span-1">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="col-span-1">
                                <DateComponent />
                            </div>
<<<<<<< Updated upstream
                            <div className="col-span-1">two</div>
=======
                            <div className="flex flex-col items-center justify-center col-span-2 gap-4 lg:col-span-1">
                                <img src="https://robohash.org/lgo.png" alt="user-logo" className="w-2/3" />
                                <span className="flex flex-col items-center justify-center">
                                    <span className="text-xl font-bold ">Total amount paid</span>
                                    <span className="text-3xl font-bold text-rose-600">₹{totalAmount}</span>
                                </span>
                            </div>
>>>>>>> Stashed changes
                            {accountData && (
                                <div className="col-span-2">
                                    <MakePaymentForm />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-1">
                        <AccountList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
