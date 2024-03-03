import React, { useState } from 'react';
import './Register.css';
import { FaLock, FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { MdDriveFileRenameOutline } from "react-icons/md";


const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
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

    // Validate password
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters.');
    } else {
      setPasswordError('');
    }

    // If no errors, submit the form
    if (emailError === '' && passwordError === '') {
      // Submit the form here
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className='input-box'>
          <input
            type="text"
            placeholder='First Name'
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <MdDriveFileRenameOutline className='icon'/>
        </div>
        <div className='input-box'>
          <input
            type="text"
            placeholder='Last Name'
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <MdDriveFileRenameOutline className='icon'/>
        </div>
        <div className='input-box'>
          <input
            type="text"
            placeholder='Username'
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <FaUser className='icon' />
        </div>
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;