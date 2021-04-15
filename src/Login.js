import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className='login-container'>
      <img
        src='https://i.redd.it/otc4rgiiox761.jpg'
        alt='login-background'
        className='login-background'
      />
      <Link to='/' className='login-btn'>
        Login
      </Link>
    </div>
  );
};

export default Login;
