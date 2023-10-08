import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InitialStateProps } from "../redux/reducer";

const DateComponent = () => {
    const navigate = useNavigate();
    const { accountList } = useSelector((state: { data: InitialStateProps }) => state.data);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today: number = new Date().getDay();

    const handleLogOut = () => {
        navigate("/");
        localStorage.removeItem("admin-login");
    };

    return (
        <div className="row-span-2 p-4 rounded-2xl lg:col-span-1 md:col-span-1">
            <div className="flex flex-col text-biege">
                <span className="text-4xl font-medium">{days[today]}</span>
                <span className="font-bold text-7xl">
                    <>{new Date().getDate()}</>
                    <span className="ml-3 text-2xl font-semiBold">
                        {new Date().getMonth()}-{new Date().getFullYear()}
                    </span>
                </span>
                <div className="py-2 pl-4 mt-6 tracking-wide border-l-8 rounded-lg font-regular border-amber-400">
                    Hi Admin you have{" "}
                    <span className="text-lime-300">
                        {accountList?.reduce((total, item) => total + (item.verifyStatus !== "success" ? 1 : 0), 0) ||
                            0}{" "}
                        accounts
                    </span>{" "}
                    that need to be verified
                </div>
                <button className="px-5 py-2 mt-5 bg-indigo-700 rounded-lg" onClick={handleLogOut}>
                    Log out
                </button>
            </div>
        </div>
    );
};

export default DateComponent;
