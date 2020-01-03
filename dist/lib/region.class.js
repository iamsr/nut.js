"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Region = /** @class */ (function () {
    function Region(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    }
    Region.scaled = function (region, scaleX, scaleY) {
        if (scaleX === void 0) { scaleX = 1.0; }
        if (scaleY === void 0) { scaleY = 1.0; }
        if (scaleX === 0 || scaleY === 0) {
            throw new Error("Scaling to 0. Please check parameters: scaleX: " + scaleX + ", scaleY: " + scaleY);
        }
        return new Region(region.left * scaleX, region.top * scaleY, region.width * scaleX, region.height * scaleY);
    };
    Region.prototype.area = function () {
        return this.width * this.height;
    };
    Region.prototype.toString = function () {
        return "(" + this.left + ", " + this.top + ", " + (this.left + this.width) + ", " + (this.top +
            this.height) + ")";
    };
    return Region;
}());
exports.Region = Region;
