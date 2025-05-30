import { usePageTitle } from "../hooks";
import { Hero, Skills } from "../components/commons";

const Home = () => {
    usePageTitle("Home");
    return (
        <div>
            <Hero />
            <Skills />
        </div>
    );
};

export default Home;