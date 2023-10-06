import { FaCheck, FaClock, FaExclamationTriangle } from "react-icons/fa";
import { getAccountData, isAdminLogin } from "../lib/utils";
import { useEffect, useState } from "react";

import { AccountDataProps } from "../types/form";
import Profile from "../components/ui/profile";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [accountDataList, setAccountDataList] = useState<AccountDataProps[]>([]);

   useEffect(() => {
      const accountData = getAccountData();
      setAccountDataList(accountData);
   }, []);

   useEffect(() => {
      if (!isAdminLogin()) {
         navigate("/");
      }
   }, [dispatch, navigate]);

   return (
      <div className="flex flex-col w-screen h-screen px-10 sm:px-0 ">
         <div className="container w-full ml-auto mr-auto my-28">
            <div className="flex sm:gap-8 w-full">
               <div className="sm:w-1/2 flex flex-col gap-8">
                  <Profile />
                  <div className="bg-charcoal flex rounded-xl flex-col p-8">
                     <h3 className="capitalize text-xl font-regular">
                        verify bank account details
                     </h3>
                     <hr className="mt-5 mb-8 text-grayLight/30" />
                     <div className="flex gap-2 flex-col">
                        {accountDataList &&
                           accountDataList.map(
                              (account: AccountDataProps, key: number) => {
                                 return (
                                    <div className="flex justify-between py-3 cursor-pointer bg-coal/40 hover:bg-coal/70 px-8 rounded-md">
                                       <div className="flex items-center gap-2">
                                          {account?.verifyStatus === "pending" && (
                                             <span className="text-yellow">
                                                <FaClock />
                                             </span>
                                          )}
                                          {account?.verifyStatus === "success" && (
                                             <span className="text-green">
                                                <FaCheck />
                                             </span>
                                          )}
                                          {account?.verifyStatus === "error" && (
                                             <span className="text-red">
                                                <FaExclamationTriangle />
                                             </span>
                                          )}
                                          <span>{account?.ifscCode}</span>
                                       </div>
                                       <div>
                                          <span>{account?.accountNumber}</span>
                                       </div>
                                    </div>
                                 );
                              }
                           )}
                     </div>
                  </div>
               </div>
               <div className="sm:w-1/2 w-fit">
                  <div></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
