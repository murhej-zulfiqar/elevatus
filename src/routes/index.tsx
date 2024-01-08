import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import JobView from "../pages/jobView";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: '/job/:uri',
        element: <JobView />
    }
]);