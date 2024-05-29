import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css';

const getUserNameFromURL = (): string | null => {
  const account_name = new URLSearchParams(window.location.search);
  return account_name.get('user');
}

const Main = () => {
  const username = getUserNameFromURL();

  return (
    <div>
      {/* Charger l'application avec le nom d'utilisateur */}
      {username && <App username={username} />} 
    </div>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
