import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminOrder from "../components/Admin/components/AdminOrder/AdminOder";
import AdminCreate from "../components/Admin/components/AdminProduct/AdminCreate";
import AdminProduct from "../components/Admin/components/AdminProduct/AdminProduct";
import AdminUpdate from "../components/Admin/components/AdminProduct/AdminUpdate";
import DataFilterProduct from "../components/Admin/components/AdminProduct/DataFilterProduct/DataFilterProduct";
import ReviewProduct from "../components/Admin/components/AdminProduct/ReviewProduct/ReviewProduct";
import AdminUser from "../components/Admin/components/AdminUser/AdminUser";
import AppChat from "../components/Admin/components/Appchat/AppChat";
import DashBoard from "../components/Admin/components/DashBoard/Dashboard";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../components/SignUp/SignUp";
import Home from "../pages";
import AdminPage from "../pages/AdminPage";
import CartPage from "../pages/cart";
import LoginPage from "../pages/LogInPage";


const routerName = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/cart",
        element: <CartPage />,
        errorElement: <ErrorPage />
    },

    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />
    },

    {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />
    },

    {
        path: "admin",
        element: <AdminPage />,
        errorElement: <ErrorPage />,
        children: [
            {  
                index: true,
                element: <Navigate to={"dashboard"}  />
            },
            {  
                path: "dashboard",
                element: <DashBoard />
            },
            {
                path: "dashboard/customer",
                element: <AdminUser />
            },
            {
                path: "dashboard/product",
                element:<AdminProduct/>,
            },
            {
                path: "dashboard/product/create",
                element:<AdminCreate/>,
            },
            {
                path: "dashboard/product/update/infor",
                element:<DataFilterProduct/>,
            },

            {
                path: "dashboard/product/update/:id",
                element:<AdminUpdate/>,
            },

            {
                path: "dashboard/product/reviewProduct/:id",
                element:<ReviewProduct/>,
            },
            {
                path: "dashboard/order",
                element:<AdminOrder/>,
            },

            {       
                path: "dashboard/chat",
                element:<AppChat/>,
            },
        ]
    }
]);

export default routerName;