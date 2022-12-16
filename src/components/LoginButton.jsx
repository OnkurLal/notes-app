import React, {useState} from 'react';
import '../css/LoginButton.css'

const LoginButton = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <div className='loginButton'>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Log out" : "Log in"}
        </button>
        <p>You are {isLoggedIn ? "Logged in" : "Logged out"}</p>
      </div>
      )
}

export default LoginButton;