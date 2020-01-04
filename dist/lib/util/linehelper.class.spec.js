"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_class_1 = require("../point.class");
var linehelper_class_1 = require("./linehelper.class");
describe("LineHelper", function () {
    it("should return a diagonal line from (0,0) to (10,10)", function () {
        var SUT = new linehelper_class_1.LineHelper();
        var from = new point_class_1.Point(0, 0);
        var to = new point_class_1.Point(10, 10);
        var expected = [];
        for (var idx = 0; idx <= to.x; ++idx) {
            expected.push(new point_class_1.Point(idx, idx));
        }
        var result = SUT.straightLine(from, to);
        expect(result.length).toBe(expected.length);
        for (var idx = 0; idx < result.length; ++idx) {
            expect(result[idx]).toEqual(expected[idx]);
        }
    });
    it("should return a diagonal line from (10,10) to (0,0)", function () {
        var SUT = new linehelper_class_1.LineHelper();
        var from = new point_class_1.Point(10, 10);
        var to = new point_class_1.Point(0, 0);
        var expected = [];
        for (var idx = 10; idx >= to.x; --idx) {
            expected.push(new point_class_1.Point(idx, idx));
        }
        var result = SUT.straightLine(from, to);
        expect(result.length).toBe(expected.length);
        for (var idx = 0; idx < result.length; ++idx) {
            expect(result[idx]).toEqual(expected[idx]);
        }
    });
});
