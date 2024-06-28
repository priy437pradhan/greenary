import  { useState } from 'react';
import LoginButton from './LoginButton';
import LoginPage from './LoginPage'; 
function HeaderComponent() {
    const menuItems = ["home", "Plant Shop", "about", "faq", "contact"];
    const [showLoginPage, setShowLoginPage] = useState(false); 
    const toggleLoginPage = () => {
        setShowLoginPage(!showLoginPage);
    };

    return (
        <>
            <div className="lloging">
                <h1 className="logoHP">go green</h1>
                <p>do good and take a offer good   </p>
              
                
                <LoginButton toggleLoginPage={toggleLoginPage} />
            </div>
            <header className="gapp-header">
                {menuItems.map((menuItem, index) => (
                    <div key={index} className="singleMenu">
                        <p>{menuItem}</p>
                    </div>
                ))}
                
            </header>
            {showLoginPage && <LoginPage />}
        </>
    );
}

export default HeaderComponent;
