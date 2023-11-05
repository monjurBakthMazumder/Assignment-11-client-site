import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import ManageMyFood from "../Pages/ManageMyFood/ManageMyFood";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import SingIn from "../Pages/Authentication/SingIn/SingIn";
import SingUp from "../Pages/Authentication/SingUp/SingUp";
import AddFood from "../Pages/AddFood/AddFood";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import ManageSingleFood from "../Pages/ManageSingleFood/ManageSingleFood";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/available-food',
                element: <AvailableFood/>
            },
            {
                path: '/add-food',
                element: <AddFood/>
            },
            {
                path: '/update-food/:id',
                element: <UpdateFood/>
            },
            {
                path: '/manage-food/:id',
                element: <ManageSingleFood/>
            },
            {
                path: '/manage-my-food',
                element: <ManageMyFood/>
            },
            {
                path: '/my-food-request',
                element: <MyFoodRequest/>
            },
            {
                path: '/food/:id',
                element: <FoodDetails/>
            },
            {
                path: '/sing-in',
                element: <SingIn/>
            },
            {
                path: '/sing-up',
                element: <SingUp/>
            }
        ]

    }
])

export default Router;