import { AccountDataProps } from "./../types/form";
import { ActionType } from "./actions";

export interface InitialStateProps {
    accountData?: AccountDataProps | null;
    accountList?: AccountDataProps[];
    isLoading?: boolean;
    isDataSave?: boolean;
    username?: string;
}

const initialState: InitialStateProps = {
    accountData: null,
    isLoading: true,
    isDataSave: false,
    username: "",
};

export const rootReducer = (state: InitialStateProps = initialState, action: ActionType) => {
    switch (action.type) {
        case "SAVE_ACCOUNT_DATA":
            return {
                ...state,
                accountData: action.playload,
            };
        case "REMOVE_ACCOUNT_DATA":
            return {
                ...state,
                accountData: null,
            };
        case "UPDATE_ACCOUNT_DATA":
            return {
                ...state,
                accountList: action.playload,
            };
        case "UPDATE_LOADING_STATUS":
            return {
                ...state,
                isLoading: action.playload,
            };
        case "SHOW_THANK_PAGE":
            return {
                ...state,
                isDataSave: action.playload,
            };
        case "ADMIN_LOGIN":
            return {
                ...state,
                username: action.playload,
            };
        default:
            return state;
    }
};
