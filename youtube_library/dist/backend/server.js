"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var LibraryModel_1 = __importDefault(require("./model/LibraryModel"));
var UserModel_1 = __importDefault(require("./model/UserModel"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3001;
// Middleware pour configurer CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Remplacez par l'origine de votre client
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // Répondre aux requêtes OPTIONS rapidement
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});
app.use(express_1.default.json());
// Route pour obtenir les vidéos d'un utilisateur
app.get('/api/user/:userName/videos', function (req, res) {
    var userName = req.params.userName;
    console.log("Fetching videos for user: ".concat(userName));
    var userVideos = UserModel_1.default.getUserVideos({ username: userName });
    res.json(userVideos);
});
// Route pour ajouter une vidéo à la bibliothèque d'un utilisateur
app.post('/api/library/:userName/videos', function (req, res) {
    var userName = req.params.userName;
    var _a = req.body, title = _a.title, id = _a.id;
    try {
        console.log("Adding video for user: ".concat(userName, " with title: ").concat(title, " and id: ").concat(id));
        LibraryModel_1.default.addVideo(userName, { title: title, id: id });
        res.status(201).json({ message: 'Video added successfully' });
    }
    catch (error) {
        var err = error;
        console.error("Error adding video: ".concat(err.message));
        res.status(500).json({ message: "Error adding video for user ".concat(userName), error: err.message });
    }
});
// Route pour supprimer une vidéo de la bibliothèque d'un utilisateur
app.delete('/api/library/:userName/videos/:videoId', function (req, res) {
    var _a = req.params, userName = _a.userName, videoId = _a.videoId;
    try {
        console.log("Deleting video for user: ".concat(userName, " with id: ").concat(videoId));
        LibraryModel_1.default.removeVideo(userName, videoId);
        res.status(200).json({ message: 'Video deleted successfully' });
    }
    catch (error) {
        var err = error;
        console.error("Error removing video: ".concat(err.message));
        res.status(500).json({ message: "Error removing video for user ".concat(userName), error: err.message });
    }
});
// Middleware pour gérer les routes non trouvées
app.use(function (req, res) {
    res.status(404).json({ message: 'Not Found' });
});
// Middleware pour gérer les erreurs
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
