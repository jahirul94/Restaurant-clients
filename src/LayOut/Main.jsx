import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";

const Main = () => {
     const location = useLocation();
     const notHeaderFooter = location.pathname.includes("login")
    return (
        <div>
            { notHeaderFooter || <NavBar></NavBar> }
            <Outlet></Outlet>
            {notHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;