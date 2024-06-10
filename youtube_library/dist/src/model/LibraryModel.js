"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var LibraryModel = /** @class */ (function () {
    function LibraryModel() {
    }
    LibraryModel.getLibrary = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            var response, errorMessage, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/api/library/".concat(userName))];
                    case 1:
                        response = _a.sent();
                        if (!!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.text()];
                    case 2:
                        errorMessage = _a.sent();
                        console.error("Error fetching library: ".concat(errorMessage));
                        throw new Error("Library not found: ".concat(errorMessage));
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, response.json()];
                    case 4:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 5:
                        error_1 = _a.sent();
                        console.error('Failed to parse JSON response:', error_1);
                        throw new Error('Invalid JSON response');
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LibraryModel.saveLibrary = function (userName, library) {
        return __awaiter(this, void 0, void 0, function () {
            var response, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/api/library/".concat(userName), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(library)
                        })];
                    case 1:
                        response = _a.sent();
                        if (!!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.text()];
                    case 2:
                        errorMessage = _a.sent();
                        console.error("Error saving library: ".concat(errorMessage));
                        throw new Error("Failed to save library: ".concat(errorMessage));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LibraryModel.addVideo = function (userName, video) {
        return __awaiter(this, void 0, void 0, function () {
            var library, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, LibraryModel.getLibrary(userName)];
                    case 1:
                        library = _a.sent();
                        library.videos.push(video);
                        return [4 /*yield*/, LibraryModel.saveLibrary(userName, library)];
                    case 2:
                        _a.sent();
                        console.log("Video with ID: ".concat(video.id, " added to the library of user: ").concat(library.name));
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        if (error_2 instanceof Error) {
                            console.error("Error adding video: ".concat(error_2.message));
                        }
                        else {
                            console.error('Unexpected error', error_2);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LibraryModel.removeVideo = function (userName, videoId) {
        return __awaiter(this, void 0, void 0, function () {
            var library, videoIndex, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, LibraryModel.getLibrary(userName)];
                    case 1:
                        library = _a.sent();
                        videoIndex = library.videos.findIndex(function (video) { return video.id === videoId; });
                        if (!(videoIndex !== -1)) return [3 /*break*/, 3];
                        library.videos.splice(videoIndex, 1);
                        return [4 /*yield*/, LibraryModel.saveLibrary(userName, library)];
                    case 2:
                        _a.sent();
                        console.log("Video with ID: ".concat(videoId, " removed from the library of user: ").concat(library.name));
                        return [3 /*break*/, 4];
                    case 3:
                        console.log("Video with ID: ".concat(videoId, " not found in the library of user: ").concat(library.name));
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        if (error_3 instanceof Error) {
                            console.error("Error removing video: ".concat(error_3.message));
                        }
                        else {
                            console.error('Unexpected error', error_3);
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return LibraryModel;
}());
exports.default = LibraryModel;
