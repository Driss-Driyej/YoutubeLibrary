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
            {/* Affiche un message si il n'y a pas d'utilisateur connecté*/}
            {!username ? (
                <h1>Veuillez vous connecter</h1>
            ) : (
                /* Charge l'application avec les données de l'utilisateur connecté */
                <App username={username} />
            )}
        </div>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
