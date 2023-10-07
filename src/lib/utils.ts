import { ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function cm(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getAccountData = () => {
    if (localStorage.getItem("account-data") !== null) {
        const accountData = JSON.parse(localStorage.getItem("account-data") || "[]");
        if (accountData.length > 0) {
            return accountData;
        } else {
            return [];
        }
    } else {
        return [];
    }
};

export const isAdminLogin = () => {
    if (localStorage.getItem("admin-login") !== null) {
        const isAdmin = JSON.parse(localStorage.getItem("admin-login") || "");
        if (isAdmin.username === "admin") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
