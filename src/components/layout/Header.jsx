import { Link } from 'react-router-dom';
import routes from '../../routes/routes';

const Header = () => {
    return (
        <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <Link to={routes.home}>
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                        MonPortfolio<span className="text-blue-600">.</span>
                    </h1>
                </Link>
                <nav className="flex gap-6 text-gray-700 dark:text-gray-200">
                    <Link to={routes.aboutMe} className="hover:text-blue-500">
                        À propos
                    </Link>
                    <Link to={routes.achievements} className="hover:text-blue-500">
                        Réalisations
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;