import { AccountDataProps } from "../types/form";

export const SAVE_ACCOUNT_DATA = "SAVE_ACCOUNT_DATA";
export const UPDATE_LOADING_STATUS = "UPDATE_LOADING_STATUS";
export const SHOW_THANK_PAGE = "SHOW_THANK_PAGE";
export const ADMIN_LOGIN = "ADMIN_LOGIN";

export type ActionType =
   | { type: typeof SAVE_ACCOUNT_DATA; playload: AccountDataProps }
   | { type: typeof UPDATE_LOADING_STATUS; playload: boolean }
   | { type: typeof SHOW_THANK_PAGE; playload: boolean }
   | { type: typeof ADMIN_LOGIN; playload: string };

export const addAccountData = (data: AccountDataProps): ActionType => ({
   type: SAVE_ACCOUNT_DATA,
   playload: data,
});

export const updateLoadingStatus = (status: boolean): ActionType => ({
   type: UPDATE_LOADING_STATUS,
   playload: status,
});

export const showThankPage = (status: boolean): ActionType => ({
   type: SHOW_THANK_PAGE,
   playload: status,
});

export const adminLogin = (username: string): ActionType => ({
   type: ADMIN_LOGIN,
   playload: username,
});
