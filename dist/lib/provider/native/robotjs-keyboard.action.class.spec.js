"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var robot = require("../../../libnut");
var key_enum_1 = require("../../key.enum");
var robotjs_keyboard_action_class_1 = require("./robotjs-keyboard-action.class");
jest.mock("../../../libnut");
beforeEach(function () {
    jest.resetAllMocks();
});
describe("robotjs keyboard action", function () {
    describe("click", function () {
        it("should forward the keyTap call to robotjs for a known key", function () {
            // GIVEN
            var SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
            // WHEN
            SUT.click(key_enum_1.Key.A);
            // THEN
            expect(robot.keyTap).toBeCalledTimes(1);
        });
        it("should reject on robotjs errors", function () { return __awaiter(void 0, void 0, void 0, function () {
            var SUT;
            return __generator(this, function (_a) {
                SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
                robot.keyTap = jest.fn(function () {
                    throw new Error("Test error");
                });
                // WHEN
                // THEN
                expect(SUT.click(key_enum_1.Key.A)).rejects.toThrowError("Test error");
                return [2 /*return*/];
            });
        }); });
        it("should not forward the keyTap call to robotjs for an unknown key", function () {
            // GIVEN
            var SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
            // WHEN
            SUT.click(key_enum_1.Key.Add);
            // THEN
            expect(robot.keyTap).not.toBeCalled();
        });
    });
    describe("type", function () {
        it("should forward the type call to robotjs", function () {
            // GIVEN
            var SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
            var payload = "testInput";
            // WHEN
            SUT.type(payload);
            // THEN
            expect(robot.typeString).toBeCalledTimes(1);
            expect(robot.typeString).toBeCalledWith(payload);
        });
        it("should reject on robotjs errors", function () { return __awaiter(void 0, void 0, void 0, function () {
            var SUT;
            return __generator(this, function (_a) {
                SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
                robot.typeString = jest.fn(function () {
                    throw new Error("Test error");
                });
                // WHEN
                // THEN
                expect(SUT.type("foo")).rejects.toThrowError("Test error");
                return [2 /*return*/];
            });
        }); });
    });
    describe("pressKey", function () {
        it("should forward the pressKey call to robotjs for a known key", function () {
            // GIVEN
            var SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
            // WHEN
            SUT.pressKey(key_enum_1.Key.A);
            // THEN
            expect(robot.keyToggle).toBeCalledTimes(1);
            expect(robot.keyToggle).toBeCalledWith(robotjs_keyboard_action_class_1.KeyboardAction.keyLookup(key_enum_1.Key.A), "down", []);
        });
        it("should treat a list of keys as modifiers + the actual key to press", function () {
            // GIVEN
            var SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
            // WHEN
            SUT.pressKey(key_enum_1.Key.LeftControl, key_enum_1.Key.A);
            // THEN
            expect(robot.keyToggle).toBeCalledTimes(1);
            expect(robot.keyToggle)
                .toBeCalledWith(robotjs_keyboard_action_class_1.KeyboardAction.keyLookup(key_enum_1.Key.A), "down", [robotjs_keyboard_action_class_1.KeyboardAction.keyLookup(key_enum_1.Key.LeftControl)]);
        });
        it("should not forward the pressKey call to robotjs for an unknown key", function () {
            // GIVEN
            var SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
            // WHEN
            SUT.pressKey(key_enum_1.Key.Add);
            // THEN
            expect(robot.keyToggle).not.toBeCalled();
        });
        it("should reject on robotjs errors", function () { return __awaiter(void 0, void 0, void 0, function () {
            var SUT;
            return __generator(this, function (_a) {
                SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
                robot.keyToggle = jest.fn(function () {
                    throw new Error("Test error");
                });
                // WHEN
                // THEN
                expect(SUT.pressKey(key_enum_1.Key.A)).rejects.toThrowError("Test error");
                return [2 /*return*/];
            });
        }); });
    });
    describe("releaseKey", function () {
        it("should forward the releaseKey call to robotjs for a known key", function () {
            // GIVEN
            var SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
            // WHEN
            SUT.releaseKey(key_enum_1.Key.A);
            // THEN
            expect(robot.keyToggle).toBeCalledTimes(1);
            expect(robot.keyToggle).toBeCalledWith(robotjs_keyboard_action_class_1.KeyboardAction.keyLookup(key_enum_1.Key.A), "up", []);
        });
        it("should treat a list of keys as modifiers + the actual key to release", function () {
            // GIVEN
            var SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
            // WHEN
            SUT.releaseKey(key_enum_1.Key.LeftControl, key_enum_1.Key.A);
            // THEN
            expect(robot.keyToggle).toBeCalledTimes(1);
            expect(robot.keyToggle)
                .toBeCalledWith(robotjs_keyboard_action_class_1.KeyboardAction.keyLookup(key_enum_1.Key.A), "up", [robotjs_keyboard_action_class_1.KeyboardAction.keyLookup(key_enum_1.Key.LeftControl)]);
        });
        it("should not forward the releaseKey call to robotjs for an unknown key", function () {
            // GIVEN
            var SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
            // WHEN
            SUT.releaseKey(key_enum_1.Key.Add);
            // THEN
            expect(robot.keyToggle).not.toBeCalled();
        });
        it("should reject on robotjs errors", function () { return __awaiter(void 0, void 0, void 0, function () {
            var SUT;
            return __generator(this, function (_a) {
                SUT = new robotjs_keyboard_action_class_1.KeyboardAction();
                robot.keyToggle = jest.fn(function () {
                    throw new Error("Test error");
                });
                // WHEN
                // THEN
                expect(SUT.releaseKey(key_enum_1.Key.A)).rejects.toThrowError("Test error");
                return [2 /*return*/];
            });
        }); });
    });
});
