import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';
import { loginSuccess, logout } from '../redux/authSlice';
import Navigation from './Navigation';
import './Login.css';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            dispatch(loginSuccess({
                name: user.displayName,
                email: user.email,
                picture: user.photoURL,
            }));

            console.log('✅ Login successful:', user.displayName);

            // Redirect to dashboard after login
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);

        } catch (error) {
            console.error('❌ Login error:', error.message);
            alert('Login failed: ' + error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            dispatch(logout());
            console.log('✅ Logout successful');
            navigate('/');
        } catch (error) {
            console.error('❌ Logout error:', error.message);
        }
    };

    return (
        <div className="login-page">
            <Navigation />
            <div className="login-container">
                {!isAuthenticated ? (
                    <div className="login-box">
                        <div className="login-icon">🌺</div>
                        <h2>Orchid Management System</h2>
                        <p>Sign in with your Google account to access CRUD features</p>

                        <button onClick={handleGoogleLogin} className="google-login-btn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                                <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fill="#34A853" />
                                <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                                <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335" />
                            </svg>
                            Sign in with Google
                        </button>

                        <div className="login-note">
                            <p>🔒 Secure authentication via Firebase</p>
                            <p>✅ No credit card required</p>
                        </div>
                    </div>
                ) : (
                    <div className="user-info">
                        <div className="user-card">
                            <img src={user.picture} alt={user.name} className="user-avatar" />
                            <div className="user-details">
                                <h3>{user.name}</h3>
                                <p>{user.email}</p>
                            </div>
                        </div>

                        <div className="user-actions">
                            <button onClick={() => navigate('/dashboard')} className="dashboard-btn">
                                📊 Go to Dashboard
                            </button>
                            <button onClick={handleLogout} className="logout-btn">
                                🚪 Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
