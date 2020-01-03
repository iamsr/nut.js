"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_class_1 = require("../point.class");
var Bresenham = /** @class */ (function () {
    function Bresenham() {
    }
    Bresenham.compute = function (from, to) {
        var result = [];
        var deltaX = to.x - from.x;
        var deltaY = to.y - from.y;
        var absoluteDeltaX = Math.abs(deltaX);
        var absoluteDeltaY = Math.abs(deltaY);
        var incrementX = Bresenham.calculateIncrementalStep(deltaX);
        var incrementY = Bresenham.calculateIncrementalStep(deltaY);
        if (deltaX < 0) {
            deltaX = -deltaX;
        }
        if (deltaY < 0) {
            deltaY = -deltaY;
        }
        var fastStepInX, fastStepInY, slowStepInX, slowStepInY, slowDelta, fastDelta;
        if (absoluteDeltaX > absoluteDeltaY) {
            fastStepInX = incrementX;
            fastStepInY = 0;
            slowStepInX = incrementX;
            slowStepInY = incrementY;
            slowDelta = absoluteDeltaY;
            fastDelta = absoluteDeltaX;
        }
        else {
            fastStepInX = 0;
            fastStepInY = incrementY;
            slowStepInX = incrementX;
            slowStepInY = incrementY;
            slowDelta = absoluteDeltaX;
            fastDelta = absoluteDeltaY;
        }
        var error = fastDelta / 2;
        for (var idx = 0, x = from.x, y = from.y; idx < fastDelta; ++idx) {
            result.push(new point_class_1.Point(x, y));
            error -= slowDelta;
            if (error < 0) {
                error += fastDelta;
                x += slowStepInX;
                y += slowStepInY;
            }
            else {
                x += fastStepInX;
                y += fastStepInY;
            }
        }
        result.push(to);
        return result;
    };
    Bresenham.calculateIncrementalStep = function (x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
    };
    return Bresenham;
}());
exports.Bresenham = Bresenham;
