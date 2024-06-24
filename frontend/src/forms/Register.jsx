import React, { Fragment } from 'react';


const Register = () => {
  return (
    <Fragment>
      <form>
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="uname">Name</label>
        <input type="text" name="uname" id="uname" />
      </div>
      <div className="form-group">
        <label htmlFor="role">You are a</label>
        <select id="role">
          <option value="default">Select</option>
          <option value="guest">Guest</option>
          <option value="owner">Owner</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="create_pass">Create Password</label>
        <input type="password" name="create_pass" id="create_pass" />
      </div>
      <div className="form-group">
        <label htmlFor="confirm_pass">Confirm Password</label>
        <input type="password" name="confirm_pass" id="confirm_pass" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </Fragment>
  );
};

export default Register;
