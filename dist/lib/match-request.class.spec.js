"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_class_1 = require("./image.class");
var match_request_class_1 = require("./match-request.class");
var region_class_1 = require("./region.class");
describe("MatchRequest", function () {
    it("should default to multi-scale matching", function () {
        var SUT = new match_request_class_1.MatchRequest(new image_class_1.Image(100, 100, new ArrayBuffer(0), 3), "foo", new region_class_1.Region(0, 0, 100, 100), 0.99);
        expect(SUT.searchMultipleScales).toBeTruthy();
    });
});
