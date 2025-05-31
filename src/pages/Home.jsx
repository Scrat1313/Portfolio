import { usePageTitle } from "../hooks";
import { Hero, Skills, BestProjects } from "../components/commons";

const Home = () => {
    usePageTitle("Home");
    return (
        <div>
            <Hero />
            <Skills />
            <BestProjects />
        </div>
    );
};

export default Home;