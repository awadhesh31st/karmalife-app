import { isAdminLogin } from "../lib/utils";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountList from "../components/ui/account-list";
import DateComponent from "../components/date";
import MakePaymentForm from "../components/make-payment-form";
import { InitialStateProps } from "../redux/reducer";

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { accountData } = useSelector((state: { data: InitialStateProps }) => state.data);

    useEffect(() => {
        if (!isAdminLogin()) {
            navigate("/");
        }
    }, [dispatch, navigate]);

    return (
        <div className="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0">
            <div className="flex flex-col justify-between h-screen my-12 sm:my-24">
                <div className="grid grid-cols-2 gap-16">
                    <div className="col-span-1">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="col-span-1">
                                <DateComponent />
                            </div>
                            <div className="col-span-1">two</div>
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
