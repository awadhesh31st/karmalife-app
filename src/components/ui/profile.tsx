import banner from "../../assets/profile.jpeg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
   const navigate = useNavigate();

   const handleSignOut = () => {
      localStorage.removeItem("admin-login");
      navigate("/admin-login");
   };

   return (
      <div className="bg-charcoal flex rounded-xl flex-col">
         <img src={banner} alt="banner" className="w-full h-32 object-cover rounded-xl" />
         <div className="m-9 flex flex-col">
            <div className="flex justify-between">
               <h2 className="text-2xl sm:text-4xl font-bold tracking-normal text-biege">
                  Welcome Admin
               </h2>
               <span
                  className="cursor-pointer inline-flex items-center justify-center text-sm font-medium bg-blue text-coal hover:bg-blue/80 h-9 rounded-md px-5"
                  onClick={handleSignOut}
               >
                  Logout
               </span>
            </div>
            <div className="flex flex-col mt-2 text-sm sm:text-base">
               <span className="text-grayDark leading-5">
                  Manget at Karmalife - Industry
               </span>
               <span className="text-grayDark leading-5">Gurgaon - New Delhi, India</span>
               <div className="flex flex-wrap max-md mt-6 gap-2">
                  {["share", "help", "gift"].map((item) => {
                     return (
                        <span className="text-xs px-5 py-1 bg-grayDark rounded-lg capitalize">
                           {item}
                        </span>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;
