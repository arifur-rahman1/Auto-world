import { useContext } from "react";
import { AuthCotext } from "../Providers/Authprovider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthCotext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children
    }
    return <Navigate to={'/login'} replace></Navigate>
};

export default PrivateRoutes;