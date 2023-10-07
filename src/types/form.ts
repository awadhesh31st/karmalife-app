export interface AccountDataProps {
    accountNumber: string;
    ifscCode: string;
    verifyStatus?: "pending" | "success" | "error";
    amountSent?: number;
    bankName?: string;
    location?: string;
    image?: string;
}

export interface LoginFormProps {
    username?: string;
}
