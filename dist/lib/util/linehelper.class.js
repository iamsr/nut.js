"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bresenham_class_1 = require("./bresenham.class");
var LineHelper = /** @class */ (function () {
    function LineHelper() {
    }
    LineHelper.prototype.straightLine = function (from, to) {
        return bresenham_class_1.Bresenham.compute(from, to);
    };
    return LineHelper;
}());
exports.LineHelper = LineHelper;
