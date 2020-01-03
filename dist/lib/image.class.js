"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Image = /** @class */ (function () {
    function Image(width, height, data, channels, pixelDensity) {
        if (pixelDensity === void 0) { pixelDensity = {
            scaleX: 1.0,
            scaleY: 1.0,
        }; }
        this.width = width;
        this.height = height;
        this.data = data;
        this.channels = channels;
        this.pixelDensity = pixelDensity;
        if (channels <= 0) {
            throw new Error("Channel <= 0");
        }
    }
    Object.defineProperty(Image.prototype, "hasAlphaChannel", {
        get: function () {
            return this.channels > 3;
        },
        enumerable: true,
        configurable: true
    });
    return Image;
}());
exports.Image = Image;
