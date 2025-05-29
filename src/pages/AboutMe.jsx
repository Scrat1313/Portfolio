import { usePageTitle } from "../hooks";

const AboutMe = () => {
    usePageTitle("About Me");
    return (
        <div>
            <h1>About Me</h1>
        </div>
    );
};

export default AboutMe;