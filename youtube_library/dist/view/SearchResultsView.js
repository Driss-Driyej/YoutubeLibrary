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
var SearchResultsView = /** @class */ (function (_super) {
    __extends(SearchResultsView, _super);
    function SearchResultsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchResultsView.prototype.render = function () {
        var _a = this.props, results = _a.results, onVideoAdd = _a.onVideoAdd;
        return (react_1.default.createElement("div", { className: "results-container" }, results.map(function (result, index) { return (react_1.default.createElement("div", { key: result.id.videoId, className: "result-item" },
            react_1.default.createElement("img", { src: result.snippet.thumbnails.default.url, alt: result.snippet.title }),
            react_1.default.createElement("h3", null, "".concat(index + 1, ": ").concat(result.snippet.title)),
            react_1.default.createElement("button", { onClick: function () { return onVideoAdd({ title: result.snippet.title, id: result.id.videoId }); } }, "Add"))); })));
    };
    return SearchResultsView;
}(react_1.default.Component));
exports.default = SearchResultsView;
