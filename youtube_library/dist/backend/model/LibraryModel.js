"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var LibraryModel = /** @class */ (function () {
    function LibraryModel() {
    }
    LibraryModel.getLibraryPath = function (userName) {
        // Utilisez __dirname pour obtenir le chemin du répertoire actuel et construisez le chemin relatif aux fichiers JSON
        var libraryPath = path.join(__dirname, '../data', "".concat(userName, ".lib.json"));
        console.log("Library path for user ".concat(userName, ": ").concat(libraryPath));
        return libraryPath;
    };
    LibraryModel.readLibrary = function (userName) {
        var libraryPath = LibraryModel.getLibraryPath(userName);
        console.log("Reading library from ".concat(libraryPath));
        var data = fs.readFileSync(libraryPath, 'utf-8');
        console.log("Library data: ".concat(data));
        return JSON.parse(data);
    };
    LibraryModel.writeLibrary = function (userName, library) {
        var libraryPath = LibraryModel.getLibraryPath(userName);
        console.log("Writing library to ".concat(libraryPath));
        fs.writeFileSync(libraryPath, JSON.stringify(library, null, 2), 'utf-8');
        console.log("Library written for user ".concat(userName));
    };
    LibraryModel.addVideo = function (userName, video) {
        var library = LibraryModel.readLibrary(userName);
        library.videos.push(video);
        LibraryModel.writeLibrary(userName, library);
        console.log("Added video ".concat(video.id, " to user ").concat(userName));
    };
    LibraryModel.removeVideo = function (userName, videoId) {
        var library = LibraryModel.readLibrary(userName);
        var videoIndex = library.videos.findIndex(function (video) { return video.id === videoId; });
        if (videoIndex !== -1) {
            library.videos.splice(videoIndex, 1);
            LibraryModel.writeLibrary(userName, library);
            console.log("Removed video ".concat(videoId, " from user ").concat(userName));
        }
        else {
            throw new Error("Video with ID: ".concat(videoId, " not found in the library of user: ").concat(userName));
        }
    };
    return LibraryModel;
}());
exports.default = LibraryModel;
