import { usePageTitle } from "../hooks";
import { Hero } from "../components/commons";

const Home = () => {
    usePageTitle("Home");
    return (
        <div>
            <Hero />
        </div>
    );
};

export default Home;