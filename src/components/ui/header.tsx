import { FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";

const Header = () => {
   const navigate = useNavigate();

   const handleSignOut = () => {
      localStorage.removeItem("admin-login");
      navigate("/admin-login");
   };
   return (
      <header className="container z-40 w-full ml-auto mr-auto bg-coal">
         <div className="flex items-center justify-between h-20 py-6 sm:mx-0">
            <div className="flex gap-6 md:gap-10">
               <a className="items-center space-x-2 flex" href="/">
                  <img src={logo} alt="karmalife-logo" className="w-8 h-8 mx-auto" />
                  <span className=" font-extraBold sm:inline-block">Karmalife</span>
               </a>
            </div>
            <span
               className="cursor-pointer inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none bg-charcoal text-biege hover:bg-charcoal/80 h-9 rounded-md px-4"
               onClick={handleSignOut}
            >
               <FaSignOutAlt />
            </span>
         </div>
      </header>
   );
};

export default Header;
