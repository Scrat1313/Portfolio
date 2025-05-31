import { usePageTitle } from "../hooks";
import { Hero, Skills, BestProjects, Enterprises } from "../components/commons";

const Home = () => {
    usePageTitle("Home");
    return (
        <div>
            <Hero />
            <Skills />
            <BestProjects />
            <Enterprises />
        </div>
    );
};

export default Home;