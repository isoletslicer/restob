import { Outlet } from "react-router-dom";
import Navbar from "./navbarcomponents/NavBar";

export default function PageLayout() {
    return (
        <div className="vh-100">
            <Navbar />
            <div className="">
                <Outlet />
            </div>
        </div>
    );
}
