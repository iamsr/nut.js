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
var image_class_1 = require("../image.class");
var match_request_class_1 = require("../match-request.class");
var robotjs_screen_action_class_1 = require("../provider/native/robotjs-screen-action.class");
var template_matching_finder_class_1 = require("../provider/opencv/template-matching-finder.class");
var region_class_1 = require("../region.class");
var vision_adapter_class_1 = require("./vision.adapter.class");
jest.mock("../provider/opencv/template-matching-finder.class");
jest.mock("../provider/native/robotjs-screen-action.class");
describe("VisionAdapter class", function () {
    it("should delegate calls to grabScreen", function () {
        // GIVEN
        var finderMock = new template_matching_finder_class_1.TemplateMatchingFinder();
        var screenMock = new robotjs_screen_action_class_1.ScreenAction();
        var SUT = new vision_adapter_class_1.VisionAdapter(finderMock, screenMock);
        // WHEN
        SUT.grabScreen();
        // THEN
        expect(screenMock.grabScreen).toBeCalledTimes(1);
    });
    it("should delegate calls to grabScreenRegion", function () { return __awaiter(void 0, void 0, void 0, function () {
        var finderMock, screenMock, SUT, screenRegion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    finderMock = new template_matching_finder_class_1.TemplateMatchingFinder();
                    screenMock = new robotjs_screen_action_class_1.ScreenAction();
                    SUT = new vision_adapter_class_1.VisionAdapter(finderMock, screenMock);
                    screenRegion = new region_class_1.Region(0, 0, 100, 100);
                    // WHEN
                    return [4 /*yield*/, SUT.grabScreenRegion(screenRegion)];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(screenMock.grabScreenRegion).toBeCalledTimes(1);
                    expect(screenMock.grabScreenRegion).toBeCalledWith(screenRegion);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to screenWidth", function () { return __awaiter(void 0, void 0, void 0, function () {
        var finderMock, screenMock, SUT;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    finderMock = new template_matching_finder_class_1.TemplateMatchingFinder();
                    screenMock = new robotjs_screen_action_class_1.ScreenAction();
                    SUT = new vision_adapter_class_1.VisionAdapter(finderMock, screenMock);
                    // WHEN
                    return [4 /*yield*/, SUT.screenWidth()];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(screenMock.screenWidth).toBeCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to screenHeight", function () { return __awaiter(void 0, void 0, void 0, function () {
        var finderMock, screenMock, SUT;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    finderMock = new template_matching_finder_class_1.TemplateMatchingFinder();
                    screenMock = new robotjs_screen_action_class_1.ScreenAction();
                    SUT = new vision_adapter_class_1.VisionAdapter(finderMock, screenMock);
                    // WHEN
                    return [4 /*yield*/, SUT.screenHeight()];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(screenMock.screenHeight).toBeCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to screenSize", function () { return __awaiter(void 0, void 0, void 0, function () {
        var finderMock, screenMock, SUT;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    finderMock = new template_matching_finder_class_1.TemplateMatchingFinder();
                    screenMock = new robotjs_screen_action_class_1.ScreenAction();
                    SUT = new vision_adapter_class_1.VisionAdapter(finderMock, screenMock);
                    // WHEN
                    return [4 /*yield*/, SUT.screenSize()];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(screenMock.screenSize).toBeCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to findImage", function () { return __awaiter(void 0, void 0, void 0, function () {
        var finderMock, SUT, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    finderMock = new template_matching_finder_class_1.TemplateMatchingFinder();
                    SUT = new vision_adapter_class_1.VisionAdapter(finderMock);
                    request = new match_request_class_1.MatchRequest(new image_class_1.Image(100, 100, new ArrayBuffer(0), 3), "foo", new region_class_1.Region(0, 0, 100, 100), 0.99, true);
                    // WHEN
                    return [4 /*yield*/, SUT.findOnScreenRegion(request)];
                case 1:
                    // WHEN
                    _a.sent();
                    expect(finderMock.findMatch).toBeCalledTimes(1);
                    expect(finderMock.findMatch).toBeCalledWith(request);
                    return [2 /*return*/];
            }
        });
    }); });
});
