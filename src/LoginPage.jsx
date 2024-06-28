
import React, { useState } from 'react';

function LoginForm() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = () => {
        // Your login logic here
    };

    const hideErrorMessage = () => {
        setErrorMessage('');
    };

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="login_form" style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
            background: '#FFF',
            top: '50%',
            left: '50%',
            background: '#FFF',
            color:'#000',
            padding: '25px',
            maxWidth: '320px',
            width: '100%',
            }}>
            <form onSubmit={handleLogin} className='logingpage'>
                <h2>Login</h2>
                <div className="input_box">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        onClick={hideErrorMessage}
                        required
                    />
                    <i className="uil uil-envelope-alt email"></i>
                </div>
                <div id="invalid-email">
                    <span>{errorMessage}</span>
                </div>
                <div className="input_box">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        onClick={hideErrorMessage}
                        required
                    />
                    <i className="uil uil-lock password"></i>
                    {/* <i className="uil uil-eye-slash pw_hide"></i> */}
                </div>
                {/* <div id="pass-check"><span>incorrect password</span></div> */}
                <div className="option_field">
                    <span className="checkbox">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="check">Remember me</label>
                    </span>
                    <a href="#" id="forgot_pw">Forgot Password</a>
                </div>
                <button type="submit" className="button">Login now</button>
                <div id="success"><span>{successMessage}</span></div>
                <div className="login_signup">
                    Don't have an account? <a href="#" id="signup">Signup</a>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
