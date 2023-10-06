import { MessageProps } from "../../types/common";
import React from "react";

const Message: React.FC<MessageProps> = ({ isError = true, message }) => {
   return isError ? (
      <p className="px-1 text-xs text-error">{message}</p>
   ) : (
      <p className="px-1 text-xs text-green">{message}</p>
   );
};

export default Message;
