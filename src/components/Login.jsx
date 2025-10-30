import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../redux/authSlice';
import { jwtDecode } from 'jwt-decode';
import './Login.css';

function Login() {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const handleLoginSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        dispatch(loginSuccess({
            name: decoded.name,
            email: decoded.email,
            picture: decoded.picture,
        }));
    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="login-container">
            {!isAuthenticated ? (
                <div className="login-box">
                    <h2>Login to Manage Orchids</h2>
                    <p>Sign in with your Google account to access CRUD features</p>
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginError}
                    />
                </div>
            ) : (
                <div className="user-info">
                    <img src={user.picture} alt={user.name} className="user-avatar" />
                    <div className="user-details">
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <button onClick={handleLogout} className="logout-btn">
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
