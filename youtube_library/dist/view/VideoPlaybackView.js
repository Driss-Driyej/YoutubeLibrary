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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var YoutubeApiModel_1 = __importDefault(require("../model/YoutubeApiModel"));
require("../css/videoPlayback.css");
// Composant qui affiche la vidéo que l'utilisateur a selectionné
var VideoPlaybackView = /** @class */ (function (_super) {
    __extends(VideoPlaybackView, _super);
    function VideoPlaybackView(props) {
        var _this = _super.call(this, props) || this;
        // utilise la méthode checkVideoExists du model pour donner sa valeur de retour (true : vidéo existe, false : vidéo n'existe pas) à la variable videoExists
        _this.updateVideoExists = function () { return __awaiter(_this, void 0, void 0, function () {
            var exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, YoutubeApiModel_1.default.checkVideoExists(this.props.videoId)];
                    case 1:
                        exists = _a.sent();
                        this.setState({ videoExists: exists });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.state = { videoExists: false }; // variable qui permet de vérifier si la vidéo existe. Pour éviter tout problème on part du principe qu'elle n'existe pas tant que le contraire n'a pas été vérifié
        return _this;
    }
    // Méthode appelée immédiatement à la création du composant, permettant de vérifier si la vidéo existe à l'aide de la méthode updateVideoExists.
    VideoPlaybackView.prototype.componentDidMount = function () {
        this.updateVideoExists();
    };
    // Méthode appelée après lorsque le composant a été mis à jour, vérifie si videoId est différent de l'ancien. Si oui, vérifie si la vidéo existe à l'aide de la méthode updateVideoExists.
    VideoPlaybackView.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.videoId !== prevProps.videoId) {
            this.updateVideoExists();
        }
    };
    VideoPlaybackView.prototype.render = function () {
        var videoExists = this.state.videoExists;
        return (react_1.default.createElement("div", null,
            videoExists && react_1.default.createElement("h1", { className: "video-title" }, this.props.videoTitle),
            videoExists ? (
            // Si la vidéo existe, alors on affiche la vidéo
            react_1.default.createElement("iframe", { id: "video-iframe" // Identifiant de l'iframe
                , frameBorder: "0" // Supprime la bordure de l'iframe
                , allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Autorise certaines fonctionnalités pour la vidéo
                , allowFullScreen // Autorise le mode plein écran
                : true, title: "YouTube video" // Titre de l'iframe
                , src: "https://www.youtube.com/embed/".concat(this.props.videoId) })) : (
            // Si ma vidéo n'existe pas, alors on affiche le message d'erreur suivant
            react_1.default.createElement("p", null, "This video does not exist."))));
    };
    return VideoPlaybackView;
}(react_1.default.Component));
exports.default = VideoPlaybackView;
