import { createBrowserRouter } from "react-router-dom";
import AdminOrder from "../components/Admin/components/AdminOrder/AdminOder";
import AdminCreate from "../components/Admin/components/AdminProduct/AdminCreate";
import AdminProduct from "../components/Admin/components/AdminProduct/AdminProduct";
import AdminUpdate from "../components/Admin/components/AdminProduct/AdminUpdate";
import DataFilterProduct from "../components/Admin/components/AdminProduct/DataFilterProduct/DataFilterProduct";
import ReviewProduct from "../components/Admin/components/AdminProduct/ReviewProduct/ReviewProduct";
import AdminUser from "../components/Admin/components/AdminUser/AdminUser";
import AppChat from "../components/Admin/components/Appchat/AppChat";
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
        path: "/admin",
        element: <AdminPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "customer/",
                element: <AdminUser />
            },

            {
                path: "product/create/",
                element:<AdminCreate/>,
            },

            {
                path: "product/update/infor/",
                element:<DataFilterProduct/>,
            },

            {
                path: "product/update/:id/",
                element:<AdminUpdate/>,
            },

            {
                path: "product/reviewProduct/:id/",
                element:<ReviewProduct/>,
            },

            {
                path: "product/",
                element:<AdminProduct/>,
            },

            {
                path: "order/",
                element:<AdminOrder/>,
            },

            {       
                path: "/admin/chat/",
                element:<AppChat/>,
            },
        ]
    }
]);

export default routerName;