import { usePageTitle } from "../hooks";
import { AllProjects } from "../components/commons";

const Achievements = () => {
    usePageTitle("Achievements");
    return (
        <div>
            <AllProjects />
        </div>
    );
};

export default Achievements;