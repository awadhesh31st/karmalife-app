import logo from "../assets/logo.png";

const Loading = () => {
   return (
      <div className="flex flex-col items-center justify-center w-screen h-screen px-10 sm:px-0">
         <div className="mx-auto flex w-full flex-col justify-center sm:w-[400px]">
            <div className="flex flex-col text-center">
               <img
                  src={logo}
                  alt="karmalife-logo"
                  className="animate-spin w-2/3 h-auto mx-auto"
               />
               <h1 className="text-4xl font-extraBold tracking-tight mt-8">
                  Welcome to Karmalife
               </h1>
            </div>
            <p className="px-8 text-md text-center text-grayDark mt-3">
               Empower your workforce with earnings-linked finance Enjoy productivity and
               retention benefits
            </p>
         </div>
      </div>
   );
};

export default Loading;
