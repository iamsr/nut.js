"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var region_class_1 = require("./region.class");
describe("Region", function () {
    it("should calcutate the correct area of a region", function () {
        var region = new region_class_1.Region(0, 0, 100, 100);
        var expected = 10000;
        expect(region.area()).toEqual(expected);
    });
    it("should return a proper string representation", function () {
        var region = new region_class_1.Region(0, 0, 100, 100);
        var expected = "(0, 0, 100, 100)";
        expect(region.toString()).toEqual(expected);
    });
    it("should scale and translate in x", function () {
        var scaleFactor = 2.0;
        var region = new region_class_1.Region(100, 100, 100, 100);
        var result = region_class_1.Region.scaled(region, scaleFactor);
        expect(result.left).toBeCloseTo(region.left * scaleFactor);
        expect(result.width).toBeCloseTo(region.width * scaleFactor);
        expect(result.top).toBeCloseTo(region.top);
        expect(result.height).toBeCloseTo(region.height);
    });
    it("should scale and translate in y", function () {
        var scaleFactor = 2.0;
        var region = new region_class_1.Region(200, 250, 100, 100);
        var result = region_class_1.Region.scaled(region, undefined, scaleFactor);
        expect(result.left).toBeCloseTo(region.left);
        expect(result.width).toBeCloseTo(region.width);
        expect(result.top).toBeCloseTo(region.top * scaleFactor);
        expect(result.height).toBeCloseTo(region.height * scaleFactor);
    });
    it("should scale and translate in both x and y", function () {
        var scaleFactorX = 1.75;
        var scaleFactorY = 2.5;
        var region = new region_class_1.Region(300, 720, 100, 100);
        var result = region_class_1.Region.scaled(region, scaleFactorX, scaleFactorY);
        expect(result.left).toBeCloseTo(region.left * scaleFactorX);
        expect(result.width).toBeCloseTo(region.width * scaleFactorX);
        expect(result.top).toBeCloseTo(region.top * scaleFactorY);
        expect(result.height).toBeCloseTo(region.height * scaleFactorY);
    });
    it("should throw an error when scaling to 0 in x", function () {
        var scaleFactorX = 0.0;
        var scaleFactorY = 2.5;
        var region = new region_class_1.Region(300, 720, 100, 100);
        expect(function () { return region_class_1.Region.scaled(region, scaleFactorX, scaleFactorY); }).toThrow("Scaling to 0. Please check parameters: scaleX: " + scaleFactorX + ", scaleY: " + scaleFactorY);
    });
    it("should throw an error when scaling to 0 in y", function () {
        var scaleFactorX = 2.5;
        var scaleFactorY = 0.0;
        var region = new region_class_1.Region(300, 720, 100, 100);
        expect(function () { return region_class_1.Region.scaled(region, scaleFactorX, scaleFactorY); }).toThrow("Scaling to 0. Please check parameters: scaleX: " + scaleFactorX + ", scaleY: " + scaleFactorY);
    });
});
