import { Header, Footer } from "./";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col bg-[#0B0B0B] overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;