import axios from 'axios';
import React, { Fragment, useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    pass: '',
    role: '',
    mobile_no: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/register', formData);
      alert('User saved successfully');
    } catch (error) {
      console.log(error);
      alert('Error saving user');
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="uname">Name</label>
          <input
            type="text"
            name="uname"
            id="uname"
            value={formData.uname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">You are a</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Guest">Guest</option>
            <option value="Owner">Owner</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="create_pass">Create Password</label>
          <input
            type="password"
            name="pass"
            value={formData.pass}
            onChange={handleChange}
            id="create_pass"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile_no">Mobile No</label>
          <input
            type="text"
            value={formData.mobile_no}
            onChange={handleChange}
            name="mobile_no"
            id="mobile_no"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </Fragment>
  );
};

export default Register;
