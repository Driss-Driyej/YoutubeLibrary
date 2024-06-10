"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var John_lib_json_1 = __importDefault(require("../data/John.lib.json"));
var Mark_lib_json_1 = __importDefault(require("../data/Mark.lib.json"));
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    // Méthode qui permet de récupérer les vidéos (avec leurs titre et leurs id) qui sont dans la librairie de l'utilisateur
    UserModel.getUserVideos = function (props) {
        var username = props.username;
        var johnVideos = John_lib_json_1.default.videos; // contient les vidéos de John
        var markVideos = Mark_lib_json_1.default.videos; // contient les vidéos de Mark
        if (username === "john") {
            // Si c'est John qui est connecté, alors on retourne ses vidéos
            return johnVideos;
        }
        if (username === "mark") {
            // Si c'est Mark qui est connecté, alors on retourne ses vidéos
            return markVideos;
        }
        // Si le username ne correspond ni à "john" ni à "mark" on retourne un tableau vide
        return [];
    };
    return UserModel;
}());
exports.default = UserModel;
