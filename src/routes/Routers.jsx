import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import TopRated from "../pages/topRated";
import MyCart from "../pages/myCart";
import MainLayout from "../layout/mainLayout";

const routers = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
            path:'/',
            element:<Home></Home>
            },
            {
            path:'/topRated',
            element:<TopRated></TopRated>
            },
            // {
            // path:'/about',
            // element:<About></About>
            // },
            {
            path:'/myCart',
            element:<MyCart></MyCart>
            },
        ]
        
    }

]);

export default routers;