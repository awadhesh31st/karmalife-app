import { AccountDataProps } from "./../types/form";
import { ActionType } from "./actions";

export interface InitialStateProps {
   accountData?: AccountDataProps[];
   isLoading?: boolean;
   isDataSave?: boolean;
   username?: string;
}

const initialState: InitialStateProps = {
   accountData: [],
   isLoading: true,
   isDataSave: false,
   username: "",
};

export const rootReducer = (
   state: InitialStateProps = initialState,
   action: ActionType
) => {
   switch (action.type) {
      case "SAVE_ACCOUNT_DATA":
         return { ...state, accountData: state.accountData?.concat([action.playload]) };
      case "UPDATE_LOADING_STATUS":
         return { ...state, isLoading: action.playload };
      case "SHOW_THANK_PAGE":
         return { ...state, isDataSave: action.playload };
      case "ADMIN_LOGIN":
         return { ...state, username: action.playload };
      default:
         return state;
   }
};
