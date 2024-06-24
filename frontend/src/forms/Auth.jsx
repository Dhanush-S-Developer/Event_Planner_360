import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="card">
        {isLogin ? <Login /> : <Register/>}
        <button className="toggle-button" onClick={toggleForm}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
