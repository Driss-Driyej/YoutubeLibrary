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
require("../css/searchBar.css");
// Composant qui affiche la barre de recherche ainsi que son bouton rechercher
var SearchBarView = /** @class */ (function (_super) {
    __extends(SearchBarView, _super);
    function SearchBarView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchBarView.prototype.render = function () {
        return (react_1.default.createElement("form", { className: "search-bar-form", onSubmit: this.props.onSubmit },
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "search-input" }, "Search :"),
                react_1.default.createElement("input", { id: "search-input", type: "text", placeholder: "[ my text searched ]", value: this.props.value, onChange: this.props.onChange, "aria-label": "Search Video" })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("label", { htmlFor: "num-results-input" }, "Display n first results :"),
                react_1.default.createElement("input", { id: "num-results-input", type: "number", placeholder: "[n]", value: this.props.numResults, onChange: this.props.onNumResultsChange, min: "1", max: "5", "aria-label": "Number of results" })),
            react_1.default.createElement("button", { type: "submit", className: "invisible-button" })));
    };
    return SearchBarView;
}(react_1.default.Component));
exports.default = SearchBarView;
