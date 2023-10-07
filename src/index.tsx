import "./styles/globals.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AdminLogin from "./pages/adminLogin";
import App from "./pages/App";
import Dashboard from "./pages/dashboard";
import Information from "./pages/information";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin-login",
        element: <AdminLogin />,
    },
    {
        path: "/thank-you",
        element: <Information />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={routes} />
        </React.StrictMode>
    </Provider>
);

reportWebVitals();
