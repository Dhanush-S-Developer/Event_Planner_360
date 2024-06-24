import React, { Fragment } from 'react';


const Login = () => {
  return (
    <Fragment>
      <form>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    </Fragment>
  );
};

export default Login;
