import React, { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleGestionarUsuariosClick = () => {
    navigate('/gestion-usuarios');
  };

  const handleVerLogsClick = () => {
    navigate('/audit');
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Bienvenido al CRUD de usuarios</h1>
      <p className="welcome-description">Por favor, selecciona una opción:</p>
      <ul className="welcome-options">
        <li>
          <button className="welcome-option" onClick={handleGestionarUsuariosClick}>
            Gestionar usuarios
          </button>
        </li>
        <li>
          <button className="welcome-option" onClick={handleVerLogsClick}>
            Ver logs
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Welcome;