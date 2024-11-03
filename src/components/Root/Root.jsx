import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-288px)]"></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;