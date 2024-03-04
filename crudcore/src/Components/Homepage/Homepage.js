import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome!</h1>
      <p>Please choose an option:</p>
      <Link to="/login" className="button">Log In</Link>
      <Link to="/register" className="button">Register</Link>
    </div>
  );
};

export default Homepage;