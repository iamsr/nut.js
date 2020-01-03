"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_class_1 = require("../point.class");
var bresenham_class_1 = require("./bresenham.class");
describe("Bresenham", function () {
    it("should return a diagonal line from (0,0) to (10,10)", function () {
        var from = new point_class_1.Point(0, 0);
        var to = new point_class_1.Point(10, 10);
        var expected = [];
        for (var idx = 0; idx <= to.x; ++idx) {
            expected.push(new point_class_1.Point(idx, idx));
        }
        var result = bresenham_class_1.Bresenham.compute(from, to);
        expect(result.length).toBe(expected.length);
        for (var idx = 0; idx < result.length; ++idx) {
            expect(result[idx]).toEqual(expected[idx]);
        }
    });
    it("should return a diagonal line from (10,10) to (0,0)", function () {
        var from = new point_class_1.Point(10, 10);
        var to = new point_class_1.Point(0, 0);
        var expected = [];
        for (var idx = 10; idx >= to.x; --idx) {
            expected.push(new point_class_1.Point(idx, idx));
        }
        var result = bresenham_class_1.Bresenham.compute(from, to);
        expect(result.length).toBe(expected.length);
        for (var idx = 0; idx < result.length; ++idx) {
            expect(result[idx]).toEqual(expected[idx]);
        }
    });
});
