import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className='login-container'>
      <img
        src='https://www.beefmagazine.com/sites/beefmagazine.com/files/styles/article_featured_retina/public/negotiation-skills-Enisaksoy-iStock-Thinkstock.jpg?itok=fAWu_p7X'
        alt='login-background'
        className='login-background'
      />
      <button onClick={() => loginWithRedirect()} className='login-btn'>
        Login
      </button>
    </div>
  );
};

export default Login;
