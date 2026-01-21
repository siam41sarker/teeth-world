import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AllTreatments from "../Pages/AllTreatments/AllTreatments";
import DetailsTreatment from "../Pages/DetailsTreatment/DetailsTreatment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Appointment from "../Pages/Appointment/Appointment";
const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('/treatments.json')
                },
                {
                    path: '/all-treatments',
                    element: <PrivateRouter>
                        <AllTreatments></AllTreatments>
                    </PrivateRouter>,
                    loader: () => fetch('/treatments.json')
                },
                {
                    path: '/profile',
                    element: <PrivateRouter>
                        <Profile></Profile>
                    </PrivateRouter>
                },
                {
                    path: '/my-appointments',
                    element: <PrivateRouter>
                        <Appointment></Appointment>
                    </PrivateRouter>
                },
                {
                    path: `/details/:id`,
                    element: <PrivateRouter>
                        <DetailsTreatment></DetailsTreatment>
                    </PrivateRouter>,
                    loader: async ({ params }) => {
                        const resp = await fetch('/treatments.json');
                        const data = await resp.json();
                        const specificData = data.find(eachData => eachData.id === params.id);
                        return specificData;
                    }
                }
            ]
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]
)

export default Router;