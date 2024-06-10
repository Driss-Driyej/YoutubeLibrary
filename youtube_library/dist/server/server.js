"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); // Importation par défaut pour Express
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 5000;
app.use(express_1.default.json());
app.get('/api/library/:userName', function (req, res) {
    var userName = req.params.userName;
    var libraryPath = path_1.default.join(__dirname, '../src/data', "".concat(userName, ".lib.json"));
    if (fs_1.default.existsSync(libraryPath)) {
        var data = fs_1.default.readFileSync(libraryPath, 'utf-8');
        res.json(JSON.parse(data));
    }
    else {
        res.status(404).json({ error: 'Library not found' });
    }
});
app.post('/api/library/:userName', function (req, res) {
    var userName = req.params.userName;
    var libraryPath = path_1.default.join(__dirname, '../src/data', "".concat(userName, ".lib.json"));
    fs_1.default.writeFileSync(libraryPath, JSON.stringify(req.body, null, 2), 'utf-8');
    res.send('Library updated');
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
