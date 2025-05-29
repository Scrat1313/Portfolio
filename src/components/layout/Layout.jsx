import { Header, Footer } from "./";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#0B0B0B]">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;