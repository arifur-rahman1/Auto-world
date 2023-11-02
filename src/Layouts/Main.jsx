import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Main = () => {
    return (
        <>
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default Main;