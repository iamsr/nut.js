"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var match_result_class_1 = require("./match-result.class");
var ScaledMatchResult = /** @class */ (function (_super) {
    __extends(ScaledMatchResult, _super);
    function ScaledMatchResult(confidence, scale, location) {
        var _this = _super.call(this, confidence, location) || this;
        _this.confidence = confidence;
        _this.scale = scale;
        _this.location = location;
        return _this;
    }
    return ScaledMatchResult;
}(match_result_class_1.MatchResult));
exports.ScaledMatchResult = ScaledMatchResult;
