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
var region_class_1 = require("../../region.class");
var robotjs_screen_action_class_1 = require("./robotjs-screen-action.class");
jest.mock("../../../libnut");
beforeEach(function () {
    jest.resetAllMocks();
});
var screenSize = new region_class_1.Region(0, 0, 100, 100);
var screenShotSize = new region_class_1.Region(0, 0, 200, 200);
describe("robotjs screen action", function () {
    describe("screen data", function () {
        it("should reject when no screenshot data is available", function () { return __awaiter(void 0, void 0, void 0, function () {
            var SUT, call;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SUT = new robotjs_screen_action_class_1.ScreenAction();
                        return [4 /*yield*/, SUT.grabScreen];
                    case 1:
                        call = _a.sent();
                        // THEN
                        return [4 /*yield*/, expect(call()).rejects.toEqual("Unable to fetch screen content.")];
                    case 2:
                        // THEN
                        _a.sent();
                        expect(robot.screen.capture).toBeCalledTimes(1);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should resolve when screenshot data is available", function () { return __awaiter(void 0, void 0, void 0, function () {
            var SUT, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SUT = new robotjs_screen_action_class_1.ScreenAction();
                        robot.screen.capture = jest.fn(function () { return ({
                            bitsPerPixel: 0,
                            byteWidth: 0,
                            bytesPerPixel: 0,
                            colorAt: jest.fn(),
                            height: screenShotSize.height,
                            image: new ArrayBuffer(0),
                            width: screenShotSize.width,
                        }); });
                        robot.getScreenSize = jest.fn(function () { return ({
                            height: screenSize.height,
                            width: screenSize.width,
                        }); });
                        return [4 /*yield*/, SUT.grabScreen()];
                    case 1:
                        image = _a.sent();
                        // THEN
                        expect(image.width).toEqual(screenShotSize.width);
                        expect(image.height).toEqual(screenShotSize.height);
                        expect(image.pixelDensity.scaleX).toEqual(2);
                        expect(image.pixelDensity.scaleY).toEqual(2);
                        expect(robot.screen.capture).toBeCalledTimes(1);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should resolve when screenshot data of a screen region is available", function () { return __awaiter(void 0, void 0, void 0, function () {
            var screenRegion, SUT, image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        screenRegion = new region_class_1.Region(0, 0, 10, 10);
                        SUT = new robotjs_screen_action_class_1.ScreenAction();
                        robot.screen.capture = jest.fn(function () { return ({
                            bitsPerPixel: 0,
                            byteWidth: 0,
                            bytesPerPixel: 0,
                            colorAt: jest.fn(),
                            height: screenShotSize.height,
                            image: new ArrayBuffer(0),
                            width: screenShotSize.width,
                        }); });
                        return [4 /*yield*/, SUT.grabScreenRegion(screenRegion)];
                    case 1:
                        image = _a.sent();
                        // THEN
                        expect(image.width).toEqual(screenShotSize.width);
                        expect(image.height).toEqual(screenShotSize.height);
                        expect(image.pixelDensity.scaleX).toEqual(20);
                        expect(image.pixelDensity.scaleY).toEqual(20);
                        expect(robot.screen.capture).toBeCalledTimes(1);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should reject when no screenshot of a screen region is available", function () { return __awaiter(void 0, void 0, void 0, function () {
            var SUT, call, screenRegion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SUT = new robotjs_screen_action_class_1.ScreenAction();
                        return [4 /*yield*/, SUT.grabScreenRegion];
                    case 1:
                        call = _a.sent();
                        screenRegion = new region_class_1.Region(0, 0, 10, 10);
                        // THEN
                        return [4 /*yield*/, expect(call(screenRegion)).rejects.toEqual("Unable to fetch screen content.")];
                    case 2:
                        // THEN
                        _a.sent();
                        expect(robot.screen.capture).toBeCalledTimes(1);
                        expect(robot.screen.capture)
                            .toBeCalledWith(screenRegion.left, screenRegion.top, screenRegion.width, screenRegion.height);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("screen size", function () {
        describe("screenWidth", function () {
            it("should determine screen width via robotjs", function () { return __awaiter(void 0, void 0, void 0, function () {
                var SUT, width;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            SUT = new robotjs_screen_action_class_1.ScreenAction();
                            robot.getScreenSize = jest.fn(function () { return ({ width: screenSize.width, height: screenSize.height }); });
                            return [4 /*yield*/, SUT.screenWidth()];
                        case 1:
                            width = _a.sent();
                            // THEN
                            expect(width).toEqual(screenSize.width);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should reject on robotjs errors", function () { return __awaiter(void 0, void 0, void 0, function () {
                var SUT, error;
                return __generator(this, function (_a) {
                    SUT = new robotjs_screen_action_class_1.ScreenAction();
                    error = "Test error";
                    robot.getScreenSize = jest.fn(function () {
                        throw new Error(error);
                    });
                    // WHEN
                    // THEN
                    expect(SUT.screenWidth()).rejects.toThrowError(error);
                    return [2 /*return*/];
                });
            }); });
        });
        describe("screenWidth", function () {
            it("should determine screen height via robotjs", function () { return __awaiter(void 0, void 0, void 0, function () {
                var SUT, width;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            SUT = new robotjs_screen_action_class_1.ScreenAction();
                            robot.getScreenSize = jest.fn(function () { return ({ width: screenSize.width, height: screenSize.height }); });
                            return [4 /*yield*/, SUT.screenHeight()];
                        case 1:
                            width = _a.sent();
                            // THEN
                            expect(width).toEqual(screenSize.height);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should reject on robotjs errors", function () { return __awaiter(void 0, void 0, void 0, function () {
                var SUT, error;
                return __generator(this, function (_a) {
                    SUT = new robotjs_screen_action_class_1.ScreenAction();
                    error = "Test error";
                    robot.getScreenSize = jest.fn(function () {
                        throw new Error(error);
                    });
                    // WHEN
                    // THEN
                    expect(SUT.screenHeight()).rejects.toThrowError(error);
                    return [2 /*return*/];
                });
            }); });
        });
        describe("screenWidth", function () {
            it("should determine screen size via robotjs", function () { return __awaiter(void 0, void 0, void 0, function () {
                var SUT, size;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            SUT = new robotjs_screen_action_class_1.ScreenAction();
                            robot.getScreenSize = jest.fn(function () { return ({ width: screenSize.width, height: screenSize.height }); });
                            return [4 /*yield*/, SUT.screenSize()];
                        case 1:
                            size = _a.sent();
                            // THEN
                            expect(size).toEqual(screenSize);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should reject on robotjs errors", function () { return __awaiter(void 0, void 0, void 0, function () {
                var SUT, error;
                return __generator(this, function (_a) {
                    SUT = new robotjs_screen_action_class_1.ScreenAction();
                    error = "Test error";
                    robot.getScreenSize = jest.fn(function () {
                        throw new Error(error);
                    });
                    // WHEN
                    // THEN
                    expect(SUT.screenSize()).rejects.toThrowError(error);
                    return [2 /*return*/];
                });
            }); });
        });
    });
});
