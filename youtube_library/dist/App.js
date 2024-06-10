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
var LibraryView_1 = __importDefault(require("./view/LibraryView"));
var MainPanelView_1 = __importDefault(require("./view/MainPanelView"));
require("./css/App.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showSearchForm: true,
            videoSelected: null,
            userVideos: [],
            isLoading: false
        };
        _this.displaySearchForm = _this.displaySearchForm.bind(_this);
        _this.displayVideo = _this.displayVideo.bind(_this);
        _this.handleVideoAdd = _this.handleVideoAdd.bind(_this);
        _this.handleVideoDelete = _this.handleVideoDelete.bind(_this);
        _this.fetchUserVideos = _this.fetchUserVideos.bind(_this);
        return _this;
    }
    App.prototype.componentDidMount = function () {
        this.fetchUserVideos();
    };
    App.prototype.fetchUserVideos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var username, response, userVideos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.props.username;
                        this.setState({ isLoading: true });
                        return [4 /*yield*/, fetch("http://localhost:3001/api/user/".concat(username, "/videos"))];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        userVideos = _a.sent();
                        this.setState({ userVideos: userVideos, isLoading: false });
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState({ isLoading: false });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.handleVideoAdd = function (video) {
        return __awaiter(this, void 0, void 0, function () {
            var username, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.props.username;
                        return [4 /*yield*/, fetch("http://localhost:3001/api/library/".concat(username, "/videos"), {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(video),
                            })];
                    case 1:
                        response = _a.sent();
                        if (response.ok) {
                            this.fetchUserVideos();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.handleVideoDelete = function (videoId) {
        return __awaiter(this, void 0, void 0, function () {
            var username, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = this.props.username;
                        return [4 /*yield*/, fetch("http://localhost:3001/api/library/".concat(username, "/videos/").concat(videoId), {
                                method: 'DELETE',
                            })];
                    case 1:
                        response = _a.sent();
                        if (response.ok) {
                            this.fetchUserVideos();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // Affiche le formulaire de recherche. Appelée lorsque l'utilisateur clique sur le bouton d'affichage du formulaire de recherche ([+]).
    App.prototype.displaySearchForm = function (event) {
        this.setState({ showSearchForm: true, videoSelected: null });
    };
    // Affiche la vidéo que l'utilisateur a séléctionnée dans sa librairie. Appelée lorsque l'utilisateur clique sur une des vidéos qu'il a dans sa librairie.
    App.prototype.displayVideo = function (event, video) {
        this.setState({ showSearchForm: false, videoSelected: video });
    };
    App.prototype.render = function () {
        var _a = this.state, showSearchForm = _a.showSearchForm, videoSelected = _a.videoSelected, userVideos = _a.userVideos, isLoading = _a.isLoading;
        var username = this.props.username;
        return (react_1.default.createElement("div", { className: "app-container" },
            react_1.default.createElement(LibraryView_1.default, { username: username, userVideos: userVideos, isLoading: isLoading, displayFormOnClick: this.displaySearchForm, libraryItemOnClick: this.displayVideo, onDeleteVideo: this.handleVideoDelete }),
            react_1.default.createElement(MainPanelView_1.default, { showSearchForm: showSearchForm, videoSelected: videoSelected, onVideoAdd: this.handleVideoAdd })));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
