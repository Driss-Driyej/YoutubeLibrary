"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client")); // Importer createRoot depuis react-dom/client
var App_1 = __importDefault(require("./App"));
var getUserNameFromURL = function () {
    var account_name = new URLSearchParams(window.location.search);
    return account_name.get('user');
};
var Main = function () {
    var username = getUserNameFromURL();
    return (react_1.default.createElement("div", null, !username ? (react_1.default.createElement("h1", null, "Veuillez vous connecter")) : (
    /* Charge l'application avec les données de l'utilisateur connecté */
    react_1.default.createElement(App_1.default, { username: username }))));
};
var container = document.getElementById('root'); // Sélectionne l'élément DOM avec l'ID 'root'
// Vérifie si l'élément 'root' existe
if (container) {
    // Si root existe, sa crée une racine React
    var root = client_1.default.createRoot(container);
    // Rend l'application React à l'intérieur de l'élément 'root'
    root.render(react_1.default.createElement(react_1.default.StrictMode, null,
        react_1.default.createElement(Main, null)));
}
