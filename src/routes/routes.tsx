import {createBrowserRouter} from "react-router-dom";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";
import CommentPage from "../pages/CommentPage";
import MainLayout from "../layouts/MainLayout";
import UserDetailsPage from "../pages/UserDetailsPage";
import UserDetailsPostsPage from "../pages/UserDetailsPostsPage";
import PostDetailsPage from "../pages/PostDetailsPage";

export const routes = createBrowserRouter([{
    path:'/', element:<MainLayout/>,children:[
        {path:'users',element:<UserPage/>},
        {path:'users/:id',element:<UserDetailsPage/>,children:[
                {path:'',element:<UserDetailsPostsPage/>},
            ]},
        {path:'posts',element:<PostPage/>},
        {path:'posts/:id',element:<PostDetailsPage/>,children:[
                {path:'',element:<UserDetailsPostsPage/>},
            ]},
        {path:'comments',element:<CommentPage/>},
    ]
}])