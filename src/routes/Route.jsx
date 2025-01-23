import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home";
import About from "../pages/About";
import Help from "../pages/Help";
import Fetch from "../pages/Fetch";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";


export const route = createBrowserRouter([
    {
path: '/',
element: <MainLayOut/>,
children: [
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/about',
        element: <About/>,
    },
{
    path: '/help',
    element: <Help/>,
},
{
    path: '/api',
element: <Fetch/>,
},
{
    path: '/login',
    element: <Login/>,
},
{
    path: '/signUp',
    element: <SignUp/>,
},
],
},
]);