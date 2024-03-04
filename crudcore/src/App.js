import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage'
import Crud from './Components/CrudOperations/Crud';
import Audit from './Components/Audit/Audit';
import Login from './Components/LoginForm/Login';
import Register from './Components/RegisterForm/Register';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/gestion-usuarios" element={<Crud />} />
        <Route path="/ver-logs" element={<Audit />} />
      </Routes>
    </Router>
  );
}

export default App;