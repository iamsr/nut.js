"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linear = function (amountOfSteps, speedInPixelsPerSecond) {
    var timeSteps = [];
    var stepDuration = Math.floor((1 / speedInPixelsPerSecond) * 1000);
    if (stepDuration <= 0) {
        stepDuration = 1;
    }
    for (var idx = 0; idx < amountOfSteps; ++idx) {
        timeSteps.push(stepDuration);
    }
    return timeSteps;
};
