"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sneer_1 = require("sneer");
var match_request_class_1 = require("../../match-request.class");
var region_class_1 = require("../../region.class");
var determine_searchregion_function_1 = require("./determine-searchregion.function");
describe("determineSearchRegion", function () {
    it("should return a search region adopted to pixel density", function () {
        // GIVEN
        var imageMock = sneer_1.mockPartial({
            pixelDensity: {
                scaleX: 1.5,
                scaleY: 2.0
            }
        });
        var needlePath = "/path/to/needle";
        var inputSearchRegion = new region_class_1.Region(0, 0, 100, 100);
        var expectedSearchRegion = new region_class_1.Region(0, 0, 150, 200);
        var matchRequest = new match_request_class_1.MatchRequest(imageMock, needlePath, inputSearchRegion, 0.99);
        // WHEN
        var result = determine_searchregion_function_1.determineScaledSearchRegion(matchRequest);
        // THEN
        expect(result).toEqual(expectedSearchRegion);
    });
    it.each([[0, 1], [1, 0]])("should not adjust searchregion for factor 0: scaleX: %i scaleY: %i", function (scaleX, scaleY) {
        // GIVEN
        var imageMock = sneer_1.mockPartial({
            pixelDensity: {
                scaleX: scaleX,
                scaleY: scaleY
            }
        });
        var needlePath = "/path/to/needle";
        var inputSearchRegion = new region_class_1.Region(0, 0, 100, 100);
        var expectedSearchRegion = new region_class_1.Region(0, 0, 100, 100);
        var matchRequest = new match_request_class_1.MatchRequest(imageMock, needlePath, inputSearchRegion, 0.99);
        // WHEN
        var result = determine_searchregion_function_1.determineScaledSearchRegion(matchRequest);
        // THEN
        expect(result).toEqual(expectedSearchRegion);
    });
});
