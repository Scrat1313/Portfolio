import { usePageTitle } from "../hooks";
import { Hero } from "../components/commons";

const Home = () => {
    usePageTitle("Home");
    return (
        <div>
            <Hero />
            <h1 className="text-2xl font-bold text-[#DAA520] tracking-tight">Home</h1>
        </div>
    );
};

export default Home;