import React from "react";
import './Login.css';
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }


    // If no errors, submit the form
    if (emailError === '' && passwordError === '') {
      // Submit the form here
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input-box'>
          <input
            type="text"
            placeholder='Email'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <IoMdMail className='icon' />
          {emailError && <p className='error'>{emailError}</p>}
        </div>
        <div className='input-box'>
          <input
            type="password"
            placeholder='Password'
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <FaLock className='icon' />
          {passwordError && <p className='error'>{passwordError}</p>}
        </div>

        <button type="submit">Singin</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>

      </form>
    </div>
  );
};

export default Login;





