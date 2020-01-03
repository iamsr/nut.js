"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_class_1 = require("./point.class");
describe("Point", function () {
    it("should return a proper string representation.", function () {
        var point = new point_class_1.Point(10, 15);
        var expected = "(10, 15)";
        expect(point.toString()).toEqual(expected);
    });
});
