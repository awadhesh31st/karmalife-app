import { combineReducers, createStore } from "redux";

import { rootReducer } from "./reducer";

declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION__: () => any;
   }
}
export const reducer = combineReducers({
   data: rootReducer,
});

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
