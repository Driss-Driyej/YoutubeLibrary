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
require("../css/library.css");
// Composant qui affiche un bouton supprimer et un bouton pour sélectionner la vidéo donnée en props
var MyVideoView = /** @class */ (function (_super) {
    __extends(MyVideoView, _super);
    function MyVideoView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyVideoView.prototype.render = function () {
        var _a = this.props, video = _a.video, onDelete = _a.onDelete, libraryItemOnClick = _a.libraryItemOnClick;
        return (react_1.default.createElement("div", { className: "my-video-container" },
            react_1.default.createElement("button", { className: "my-video-button-supp", onClick: onDelete }, "X"),
            react_1.default.createElement("button", { className: "my-video-button", onClick: function (event) { return libraryItemOnClick(event, video); } }, video.title)));
    };
    return MyVideoView;
}(react_1.default.Component));
exports.default = MyVideoView;
