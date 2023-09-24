import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Login from "../components/login/Login";
import PhoneDetails from "../components/phoneDetails/PhoneDetails";
import Fevorite from "../pages/fevorite/Fevorite";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/product/:id",
                element: <PhoneDetails />
            },
            {
                path: "/fevorite",
                element: <Fevorite />
            }
        ]
    }
])

