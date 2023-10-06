import { Link, useNavigate } from "react-router-dom";
import { cm, isAdminLogin } from "../lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import AccountForm from "../components/account-form";
import { FaCodeBranch } from "react-icons/fa";
import Information from "./information";
import { InitialStateProps } from "../redux/reducer";
import Loading from "../components/loading";
import SearchIFSC from "../components/ui/search-IFSC";
import Terms from "../components/ui/terms";
import { buttonVariants } from "../components/ui/button";
import logo from "../assets/logo.png";
import { updateLoadingStatus } from "../redux/actions";

const App = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { isDataSave, isLoading } = useSelector(
      (state: { data: InitialStateProps }) => state.data
   );
   const [isModalOpen, setIsModalOpen] = useState(false);

   useEffect(() => {
      if (isAdminLogin()) {
         dispatch(updateLoadingStatus(false));
         navigate("/dashboard");
      } else {
         isLoading &&
            setTimeout(() => {
               dispatch(updateLoadingStatus(false));
            }, 1000);
      }
   }, [isLoading, dispatch, navigate]);

   if (isDataSave) {
      return <Information />;
   } else if (isLoading) {
      return <Loading />;
   } else {
      return (
         <>
            <div className="flex flex-col items-center justify-center w-screen h-screen px-10 sm:px-0">
               <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                  <div className="flex flex-col space-y-2 text-center">
                     <img src={logo} alt="karmalife-logo" className="w-20 h-20 mx-auto" />
                     <h1 className="text-2xl font-bold tracking-tight">Karmalife</h1>
                     <p className="text-sm text-grayDark">
                        Enter your account information for KYC
                     </p>
                  </div>
                  <AccountForm />
                  <button
                     type="button"
                     className={cm(buttonVariants({ variant: "outline" }))}
                     onClick={() => setIsModalOpen(true)}
                  >
                     <FaCodeBranch className="w-4 h-4 mr-2" />
                     Find IFSC Code
                  </button>
                  <p className="px-8 text-sm text-center text-lightGreen">
                     <Link
                        className="underline hover:text-brand underline-offset-4"
                        to="/admin-login"
                     >
                        Are you admin? Login in
                     </Link>
                  </p>
                  <Terms />
               </div>
            </div>
            {isModalOpen && <SearchIFSC closeModal={() => setIsModalOpen(false)} />}
         </>
      );
   }
};

export default App;
