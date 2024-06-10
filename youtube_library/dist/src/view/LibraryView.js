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
var MyVideoView_1 = __importDefault(require("./MyVideoView"));
var UserModel_1 = __importDefault(require("../model/UserModel"));
var LibraryModel_1 = __importDefault(require("../model/LibraryModel"));
require("../css/library.css");
// Composant qui affiche l'élément de gauche de la vue 
var LibraryView = /** @class */ (function (_super) {
    __extends(LibraryView, _super);
    function LibraryView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { userVideos: [], };
        _this.handleVideoDelete = _this.handleVideoDelete.bind(_this);
        return _this;
    }
    LibraryView.prototype.componentDidMount = function () {
        this.fetchUserVideos();
    };
    LibraryView.prototype.fetchUserVideos = function () {
        var username = this.props.username;
        var userVideos = UserModel_1.default.getUserVideos({ username: username });
        this.setState({ userVideos: userVideos });
    };
    LibraryView.prototype.handleVideoDelete = function (videoId) {
        var username = this.props.username;
        LibraryModel_1.default.removeVideo(username, videoId);
        this.fetchUserVideos(); // Rafraîchir la liste des vidéos après la suppression
    };
    LibraryView.prototype.render = function () {
        var _this = this;
        var _a = this.props, username = _a.username, displayFormOnClick = _a.displayFormOnClick, libraryItemOnClick = _a.libraryItemOnClick;
        var userVideos = this.state.userVideos;
        return (react_1.default.createElement("div", { className: "library-container" },
            react_1.default.createElement("div", { className: "library-header" },
                react_1.default.createElement("h1", null,
                    "Library ",
                    username)),
            react_1.default.createElement("button", { className: "display-form", onClick: displayFormOnClick }, "[+]"),
            react_1.default.createElement("div", { className: "library-items" }, userVideos.map(function (video) { return (react_1.default.createElement("li", { key: video.id, className: "library-item" },
                react_1.default.createElement(MyVideoView_1.default, { libraryItemOnClick: libraryItemOnClick, video: video, onDelete: function () { return _this.handleVideoDelete(video.id); } }))); }))));
    };
    return LibraryView;
}(react_1.default.Component));
exports.default = LibraryView;
