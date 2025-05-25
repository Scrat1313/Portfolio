import { usePageTitle } from "../hooks";

const NotFound = () => {
    usePageTitle("404");
    return (
        <div>
            <h1>404</h1>
            <h2>Page non trouvée</h2>
        </div>
    );
};

export default NotFound;