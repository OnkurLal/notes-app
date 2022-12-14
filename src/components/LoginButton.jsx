import React, {useState} from 'react';
import './LoginButton.css'

const LoginButton = () =>{
    const [login, setLogin] = useState('Login',);
    const [loginMessage, setLoginMessage] = useState('User is logged out.');
    const handleLogin = (e) => {
        if (e.target.name === 'userLogin'){
            setLogin(prev => prev === 'Login' ? 'Logout' : 'Login');
            setLoginMessage(prev => prev === 'User is logged out.' ? 'User is logged in.' : 'User is logged out.')
        }
    }
    return(
    <>
        <div className="loginButton">
            <button onClick = {handleLogin} name = 'userLogin'>{login}</button>
            <p>{loginMessage}</p>
        </div>
    </>
    )
}

export default LoginButton;