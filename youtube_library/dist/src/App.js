"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LibraryView_1 = __importDefault(require("./view/LibraryView"));
var MainPanelView_1 = __importDefault(require("./view/MainPanelView"));
require("./css/App.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        // L'etat de showSearchForm permet de savoir si on affiche le formulaire de recherche, si il est sur false on affiche la vidéo selectionné (videoSelected).
        _this.state = { showSearchForm: true, videoSelected: null };
        _this.displaySearchForm = _this.displaySearchForm.bind(_this);
        _this.displayVideo = _this.displayVideo.bind(_this);
        return _this;
    }
    // Affiche le formulaire de recherche. Appelée lorque l'utilisateur clique sur le bouton d'affichage du formulaire de recherche ([+]).
    App.prototype.displaySearchForm = function (event) {
        this.setState({ showSearchForm: true, videoSelected: null });
    };
    // Affiche la vidéo que l'utilisateur a séléctionné dans sa librairie. Appelé lorsque l'utilisateur clique sur une des vidéo qu'il a dans sa librairie
    App.prototype.displayVideo = function (event, video) {
        this.setState({ showSearchForm: false, videoSelected: video });
    };
    App.prototype.render = function () {
        var _a = this.state, showSearchForm = _a.showSearchForm, videoSelected = _a.videoSelected;
        var username = this.props.username;
        return (react_1.default.createElement("div", { className: "app-container" },
            react_1.default.createElement(LibraryView_1.default, { username: username, displayFormOnClick: this.displaySearchForm, libraryItemOnClick: this.displayVideo }),
            react_1.default.createElement(MainPanelView_1.default, { showSearchForm: showSearchForm, videoSelected: videoSelected })));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
/*1 - Gère l'évènement de la barre de recherche et des boutons supprimer et ajouter un video*/
/*2 - Bibliothèsque de vidéo(en gros si j'enlève une vidéo de la bd de l'utilisateur, pas besoins de rafraîchir pour qu'elle n'apparaisse plus ).*/ 
