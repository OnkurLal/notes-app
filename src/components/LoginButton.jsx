import React, {useState} from 'react';
import '../css/LoginButton.css'
import { Button } from '@mui/material';

const LoginButton = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <div className='loginButton'>
        <Button variant='contained' id='loginButton' className='loginComponent' size='medium' onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Log out" : "Log in"}
        </Button>
        <p className='loginComponent'>You are {isLoggedIn ? "Logged in" : "Logged out"}</p>
      </div>
      )
}

export default LoginButton;