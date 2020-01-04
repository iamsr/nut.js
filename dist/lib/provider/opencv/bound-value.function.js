"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lowerBound(value, boundary, minValue) {
    return (value <= boundary) ? minValue : value;
}
exports.lowerBound = lowerBound;
function upperBound(value, boundary, maxValue) {
    return (value >= boundary) ? maxValue : value;
}
exports.upperBound = upperBound;
