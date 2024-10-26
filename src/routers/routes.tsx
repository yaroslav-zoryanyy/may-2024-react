import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CartsPage from "../pages/CartsPage";

export const routes = createBrowserRouter([
    {path:'/', element:<MainLayout/>,children:[
            {index:true,element:<HomePage/>},
            {path:'carts',element:<CartsPage/>},

        ]}
])