import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../pages";
import CartPage from "../pages/cart";

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
]);

export default routerName;