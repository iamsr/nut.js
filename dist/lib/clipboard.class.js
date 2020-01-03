"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clipboard = /** @class */ (function () {
    function Clipboard(nativeAdapter) {
        this.nativeAdapter = nativeAdapter;
    }
    Clipboard.prototype.copy = function (text) {
        return this.nativeAdapter.copy(text);
    };
    Clipboard.prototype.paste = function () {
        return this.nativeAdapter.paste();
    };
    return Clipboard;
}());
exports.Clipboard = Clipboard;
