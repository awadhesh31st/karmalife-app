import { Link } from "react-router-dom";
import LoginForm from "../components/login-form";
import admin from "../assets/admin.png";

const AdminLogin = () => {
   return (
      <div className="flex flex-col items-center justify-center w-screen h-screen px-10 sm:px-0">
         <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
               <img src={admin} alt="karmalife-logo" className="w-24 h-24 mx-auto" />
               <h1 className="text-2xl font-bold tracking-tight">Karmalife</h1>
               <p className="text-sm text-grayDark">Login in to your Account</p>
            </div>
            <LoginForm />
            <p className="px-8 text-sm text-center text-grayDark">
               <Link className="underline hover:text-brand underline-offset-4" to="/">
                  Add new account
               </Link>
            </p>
         </div>
      </div>
   );
};

export default AdminLogin;
