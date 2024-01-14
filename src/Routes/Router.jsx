import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import CheckOut from "../Pages/Checkout/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";

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
    {
      path:'/checkout/:id',
      element:<CheckOut></CheckOut>,
      loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
    },
    {
      path:'/bookings',
      element:<Bookings></Bookings>,
    },
    ]
    },
  ]);

  export default router