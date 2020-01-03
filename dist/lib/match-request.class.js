"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchRequest = /** @class */ (function () {
    function MatchRequest(haystack, pathToNeedle, searchRegion, confidence, searchMultipleScales) {
        if (searchMultipleScales === void 0) { searchMultipleScales = true; }
        this.haystack = haystack;
        this.pathToNeedle = pathToNeedle;
        this.searchRegion = searchRegion;
        this.confidence = confidence;
        this.searchMultipleScales = searchMultipleScales;
    }
    return MatchRequest;
}());
exports.MatchRequest = MatchRequest;
