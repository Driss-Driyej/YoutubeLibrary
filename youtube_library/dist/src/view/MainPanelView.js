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
var SearchFormView_1 = __importDefault(require("./SearchFormView"));
var VideoPlaybackView_1 = __importDefault(require("./VideoPlaybackView"));
require("../css/mainPanel.css");
// Composant qui affiche l'élément de droite de la vue 
var MainPanelView = /** @class */ (function (_super) {
    __extends(MainPanelView, _super);
    function MainPanelView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainPanelView.prototype.render = function () {
        var _a = this.props, showSearchForm = _a.showSearchForm, videoSelected = _a.videoSelected;
        return (react_1.default.createElement("div", { className: "main-panel-container" }, showSearchForm ? (
        // Si la variable showSearchForm est à true, alors on affiche le formulaire de recherche
        react_1.default.createElement("div", { className: "main-panel-search-view" },
            react_1.default.createElement(SearchFormView_1.default, null))) : (
        // Si la variable showSearchForm est à false, alors on affiche la vidéo selectionné par l'utilisateur
        react_1.default.createElement("div", { className: "main-panel-video" }, videoSelected && (
        // Si la variable videoSelected n'est pas null, alors on affiche la vidéo que l'utilisateur veut visionner en donnant l'id et le titre de la vidéo selectionné en props 
        react_1.default.createElement(VideoPlaybackView_1.default, { videoId: videoSelected.id, videoTitle: videoSelected.title }))))));
    };
    return MainPanelView;
}(react_1.default.Component));
exports.default = MainPanelView;
