import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className="navigation">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    🌺 Orchid Gallery
                </Link>

                <div className="nav-links">
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Gallery
                    </Link>
                    <Link
                        to="/natural"
                        className={`nav-link ${location.pathname === '/natural' ? 'active' : ''}`}
                    >
                        Natural
                    </Link>
                    <Link
                        to="/about"
                        className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                    >
                        Contact
                    </Link>
                    <Link
                        to="/intro"
                        className={`nav-link ${location.pathname === '/intro' ? 'active' : ''}`}
                    >
                        Intro
                    </Link>
                    <Link
                        to="/dashboard"
                        className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/login"
                        className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
                    >
                        Login
                    </Link>
                    <Link
                        to="/seeder"
                        className={`nav-link ${location.pathname === '/seeder' ? 'active' : ''}`}
                    >
                        Seeder
                    </Link>
                    <Link
                        to="/lab6"
                        className={`nav-link ${location.pathname === '/lab6' ? 'active' : ''}`}
                    >
                        Lab 6
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;