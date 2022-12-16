import React, {useState} from 'react';
import '../css/LoginButton.css'
import Button from '@mui/material/Button'

const LoginButton = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <div className='loginButton'>
        <Button variant="outlined" onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Log out" : "Log in"}
        </Button>
        <p>You are {isLoggedIn ? "Logged in" : "Logged out"}</p>
      </div>
      )
}

export default LoginButton;