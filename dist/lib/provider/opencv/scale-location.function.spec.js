"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var region_class_1 = require("../../region.class");
var scale_location_function_1 = require("./scale-location.function");
describe("scaleLocation", function () {
    it("should scale location of a Region for valid scale factors", function () {
        // GIVEN
        var scaleFactor = 0.5;
        var inputRegion = new region_class_1.Region(100, 100, 10, 10);
        var expectedRegion = new region_class_1.Region(200, 200, 10, 10);
        // WHEN
        var result = scale_location_function_1.scaleLocation(inputRegion, scaleFactor);
        // THEN
        expect(result).toEqual(expectedRegion);
    });
    it("should not scale location of a Region for invalid scale factors", function () {
        // GIVEN
        var scaleFactor = 0.0;
        var inputRegion = new region_class_1.Region(100, 100, 10, 10);
        var expectedRegion = new region_class_1.Region(100, 100, 10, 10);
        // WHEN
        var result = scale_location_function_1.scaleLocation(inputRegion, scaleFactor);
        // THEN
        expect(result).toEqual(expectedRegion);
    });
});
