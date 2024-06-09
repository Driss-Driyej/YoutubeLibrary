import React from 'react';
import ReactDOM from 'react-dom/client'; // Importer createRoot depuis react-dom/client
import App from './App';

const getUserNameFromURL = (): string | null => {
    const account_name = new URLSearchParams(window.location.search);
    return account_name.get('user');
}

const Main = () => {
    const username = getUserNameFromURL();

    return (
        <div>
            {/* Affiche un message si il n'y a pas d'utilisateur connecté */}
            {!username ? (
                <h1>Veuillez vous connecter</h1>
            ) : (
                /* Charge l'application avec les données de l'utilisateur connecté */
                <App username={username} />
            )}
        </div>
    );
}

const container = document.getElementById('root'); // Sélectionne l'élément DOM avec l'ID 'root'
// Vérifie si l'élément 'root' existe
if (container) {
    // Si root existe, sa crée une racine React
    const root = ReactDOM.createRoot(container);
    // Rend l'application React à l'intérieur de l'élément 'root'
    root.render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    );
}
