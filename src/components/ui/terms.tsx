import React from "react";

const Terms = () => {
   return (
      <p className="px-8 text-sm text-center text-grayDark">
         By clicking continue, you agree to our
         <a className="underline hover:text-yellow underline-offset-4 mx-1" href="/terms">
            Terms of Service
         </a>
         and
         <a
            className="underline hover:text-yellow underline-offset-4 ml-1"
            href="/privacy"
         >
            Privacy Policy
         </a>
         .
      </p>
   );
};

export default Terms;
