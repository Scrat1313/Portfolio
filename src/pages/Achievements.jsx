import { usePageTitle, useScrollToTop } from "../hooks";
import { AllProjects } from "../components/commons";

const Achievements = () => {
    usePageTitle("Achievements");
    useScrollToTop();
    return (
        <div>
            <AllProjects />
        </div>
    );
};

export default Achievements;