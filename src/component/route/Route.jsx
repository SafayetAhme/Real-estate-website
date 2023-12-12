import { Outlet } from "react-router-dom";
import Navbar from "../page/home/Navbar";
import Footer from "../page/home/Footer";


const Route = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Route;