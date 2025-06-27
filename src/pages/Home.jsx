import { usePageTitle, useScrollToTop } from "../hooks";
import { Hero, Skills, BestProjects, Enterprises } from "../components/commons";

const Home = () => {
    usePageTitle("Home");
    useScrollToTop();
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