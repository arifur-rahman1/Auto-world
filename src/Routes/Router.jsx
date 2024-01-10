import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path:'/',
        element:<Home></Home>,
        
      },
    {
      path:'/login',
        element:<Login/>,
    },
    {
      path:'/signup',
        element:<Signup/>,
    },
    ]
    },
  ]);

  export default router