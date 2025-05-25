import { usePageTitle } from "../hooks";

const Home = () => {
    usePageTitle("Home");
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;