import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { showThankPage } from "../redux/actions";

const Information = () => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen px-10 sm:px-0">
            <div className="mx-auto flex w-full flex-col justify-center sm:w-[450px]">
                <div className="flex flex-col space-y-2 text-center">
                    <img src={logo} alt="karmalife-logo" className="h-auto mx-auto mb-4 w-60" />
                    <h1 className="text-4xl font-bold tracking-tight">Thank you</h1>
                </div>
                <p className="px-8 text-lg text-center text-grayDark">for reaching out!</p>
                <p className="px-8 mt-4 text-sm text-center text-grayDark">
                    We appreciate your interest in{" "}
                    <a href="https://karmalife.ai/" target="_blank" className="text-lightGreen" rel="noreferrer">
                        karmalife
                    </a>
                    . We'll be in touch within one business day.
                </p>
                <span
                    onClick={() => dispatch(showThankPage(false))}
                    className="px-8 mt-4 text-sm text-center cursor-pointer text-amber-400"
                >
                    Add new account
                </span>
            </div>
        </div>
    );
};

export default Information;
