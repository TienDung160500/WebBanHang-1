import { createBrowserRouter } from "react-router-dom";
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
        path: "/admin/",
        element: <AdminPage />,
        errorElement: <ErrorPage />
    }
]);

export default routerName;