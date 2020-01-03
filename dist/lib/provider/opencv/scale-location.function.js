"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var region_class_1 = require("../../region.class");
var bound_value_function_1 = require("./bound-value.function");
function scaleLocation(result, scaleFactor) {
    var boundScaleFactor = bound_value_function_1.lowerBound(scaleFactor, 0.0, 1.0);
    return new region_class_1.Region(result.left / boundScaleFactor, result.top / boundScaleFactor, result.width, result.height);
}
exports.scaleLocation = scaleLocation;
