"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movementtype_function_1 = require("./movementtype.function");
describe("MovementType", function () {
    it("should return a set of linear timesteps, one millisecond per step.", function () {
        var expected = [1, 1, 1, 1, 1, 1];
        expect(movementtype_function_1.linear(6, 1000)).toEqual(expected);
    });
    it("should threshold movement speed to one pixel per millisecond in case of faster movement.", function () {
        var expected = [1, 1, 1, 1, 1, 1];
        expect(movementtype_function_1.linear(6, 2000)).toEqual(expected);
    });
    it("should should return a set of linear timesteps, two milliseconds per step.", function () {
        var expected = [2, 2, 2, 2, 2, 2];
        expect(movementtype_function_1.linear(6, 500)).toEqual(expected);
    });
    it("should floor movement to three milliseconds per step.", function () {
        var expected = [3, 3, 3, 3, 3, 3];
        expect(movementtype_function_1.linear(6, 300)).toEqual(expected);
    });
});
