"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bound_value_function_1 = require("./bound-value.function");
describe("lowerBound function", function () {
    it.each([
        [5, 10, 1, 1],
        [5, 5, 10, 10],
        [5, 1, 10, 5],
        [0, 0, 0, 0]
    ])("Input: %f, Boundary: %f, minValue: %f, Expected: %f", function (input, boundary, minValue, expected) {
        // WHEN
        var result = bound_value_function_1.lowerBound(input, boundary, minValue);
        // THEN
        expect(result).toBe(expected);
    });
});
describe("upperBound function", function () {
    it.each([
        [5, 10, 1, 5],
        [5, 5, 10, 10],
        [5, 1, 10, 10],
        [5, 5, 5, 5]
    ])("Input: %f, Boundary: %f, maxValue: %f, Expected: %f", function (input, boundary, maxValue, expected) {
        // WHEN
        var result = bound_value_function_1.upperBound(input, boundary, maxValue);
        // THEN
        expect(result).toBe(expected);
    });
});
