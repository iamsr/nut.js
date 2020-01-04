"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function determineScaledSearchRegion(matchRequest) {
    var searchRegion = matchRequest.searchRegion;
    var scaleX = matchRequest.haystack.pixelDensity.scaleX || 1.0;
    var scaleY = matchRequest.haystack.pixelDensity.scaleY || 1.0;
    searchRegion.width *= scaleX;
    searchRegion.height *= scaleY;
    return searchRegion;
}
exports.determineScaledSearchRegion = determineScaledSearchRegion;
