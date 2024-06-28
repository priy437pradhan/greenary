import React from 'react';

const LoginButton = ({ toggleLoginPage }) => {
    return (
        <div>
            <div className="llbtn" id="from-open" onClick={toggleLoginPage}> 
                <p> Login</p>
            </div>
        </div>
    );
};

export default LoginButton;
