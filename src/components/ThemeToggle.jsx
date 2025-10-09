import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <div className="toggle-icon">
                {isDark ? '☀️' : '🌙'}
            </div>
            <span className="toggle-text">
                {isDark ? 'Light Mode' : 'Dark Mode'}
            </span>
        </button>
    );
};

export default ThemeToggle;