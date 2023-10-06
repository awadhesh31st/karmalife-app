import Header from "../components/ui/header";
import { isAdminLogin } from "../lib/utils";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   useEffect(() => {
      if (!isAdminLogin()) {
         navigate("/");
      }
   }, [dispatch, navigate]);

   return (
      <div className="flex flex-col w-screen h-screen px-10 sm:px-0">
         <Header />
      </div>
   );
};

export default Dashboard;
