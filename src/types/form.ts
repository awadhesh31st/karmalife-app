export interface AccountDataProps {
   accountNumber: string;
   ifscCode: string;
   verifyStatus?: "pending" | "success" | "error";
   amountSent?: number;
}

export interface LoginFormProps {
   username?: string;
}
