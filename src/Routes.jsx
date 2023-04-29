import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/details/:code",
        element: <CountryDetails />,
    },
], {
    basename: "/Rest-Countries/",
});