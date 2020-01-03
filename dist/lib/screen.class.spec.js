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
var path_1 = require("path");
var process_1 = require("process");
var vision_adapter_class_1 = require("./adapter/vision.adapter.class");
var image_class_1 = require("./image.class");
var locationparameters_class_1 = require("./locationparameters.class");
var match_request_class_1 = require("./match-request.class");
var match_result_class_1 = require("./match-result.class");
var region_class_1 = require("./region.class");
var screen_class_1 = require("./screen.class");
jest.mock("./adapter/native.adapter.class");
jest.mock("./adapter/vision.adapter.class");
var searchRegion = new region_class_1.Region(0, 0, 100, 100);
beforeAll(function () {
    vision_adapter_class_1.VisionAdapter.prototype.grabScreen = jest.fn(function () {
        return Promise.resolve(new image_class_1.Image(searchRegion.width, searchRegion.height, new ArrayBuffer(0), 3));
    });
    vision_adapter_class_1.VisionAdapter.prototype.screenSize = jest.fn(function () {
        return Promise.resolve(searchRegion);
    });
});
describe("Screen.", function () {
    it("should resolve with sufficient confidence.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var matchResult, visionAdapterMock, SUT, imagePath, matchRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    matchResult = new match_result_class_1.MatchResult(0.99, searchRegion);
                    vision_adapter_class_1.VisionAdapter.prototype.findOnScreenRegion = jest.fn(function () {
                        return Promise.resolve(matchResult);
                    });
                    visionAdapterMock = new vision_adapter_class_1.VisionAdapter();
                    SUT = new screen_class_1.Screen(visionAdapterMock);
                    imagePath = "test/path/to/image.png";
                    return [4 /*yield*/, expect(SUT.find(imagePath)).resolves.toEqual(matchResult.location)];
                case 1:
                    _a.sent();
                    matchRequest = new match_request_class_1.MatchRequest(expect.any(image_class_1.Image), path_1.join(process_1.cwd(), imagePath), searchRegion, SUT.config.confidence, true);
                    expect(visionAdapterMock.findOnScreenRegion).toHaveBeenCalledWith(matchRequest);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should call registered hook before resolve", function () { return __awaiter(void 0, void 0, void 0, function () {
        var matchResult, visionAdapterMock, SUT, testCallback, imagePath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    matchResult = new match_result_class_1.MatchResult(0.99, searchRegion);
                    vision_adapter_class_1.VisionAdapter.prototype.findOnScreenRegion = jest.fn(function () {
                        return Promise.resolve(matchResult);
                    });
                    visionAdapterMock = new vision_adapter_class_1.VisionAdapter();
                    SUT = new screen_class_1.Screen(visionAdapterMock);
                    testCallback = jest.fn(function () { return Promise.resolve(); });
                    imagePath = "test/path/to/image.png";
                    SUT.on(imagePath, testCallback);
                    return [4 /*yield*/, SUT.find(imagePath)];
                case 1:
                    _a.sent();
                    expect(testCallback).toBeCalledTimes(1);
                    expect(testCallback).toBeCalledWith(matchResult);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should call multiple registered hooks before resolve", function () { return __awaiter(void 0, void 0, void 0, function () {
        var matchResult, visionAdapterMock, SUT, testCallback, secondCallback, imagePath, _i, _a, callback;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    matchResult = new match_result_class_1.MatchResult(0.99, searchRegion);
                    vision_adapter_class_1.VisionAdapter.prototype.findOnScreenRegion = jest.fn(function () {
                        return Promise.resolve(matchResult);
                    });
                    visionAdapterMock = new vision_adapter_class_1.VisionAdapter();
                    SUT = new screen_class_1.Screen(visionAdapterMock);
                    testCallback = jest.fn(function () { return Promise.resolve(); });
                    secondCallback = jest.fn(function () { return Promise.resolve(); });
                    imagePath = "test/path/to/image.png";
                    SUT.on(imagePath, testCallback);
                    SUT.on(imagePath, secondCallback);
                    return [4 /*yield*/, SUT.find(imagePath)];
                case 1:
                    _b.sent();
                    for (_i = 0, _a = [testCallback, secondCallback]; _i < _a.length; _i++) {
                        callback = _a[_i];
                        expect(callback).toBeCalledTimes(1);
                        expect(callback).toBeCalledWith(matchResult);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    it("should reject with insufficient confidence.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var matchResult, visionAdapterMock, SUT, imagePath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    matchResult = new match_result_class_1.MatchResult(0.8, searchRegion);
                    vision_adapter_class_1.VisionAdapter.prototype.findOnScreenRegion = jest.fn(function () {
                        return Promise.resolve(matchResult);
                    });
                    visionAdapterMock = new vision_adapter_class_1.VisionAdapter();
                    SUT = new screen_class_1.Screen(visionAdapterMock);
                    imagePath = "test/path/to/image.png";
                    return [4 /*yield*/, expect(SUT.find(imagePath))
                            .rejects
                            .toEqual("No match for " + imagePath + ". Required: " + SUT.config.confidence + ", given: " + matchResult.confidence)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should reject when search fails.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rejectionReason, visionAdapterMock, SUT, imagePath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rejectionReason = "Search failed.";
                    vision_adapter_class_1.VisionAdapter.prototype.findOnScreenRegion = jest.fn(function () {
                        return Promise.reject(rejectionReason);
                    });
                    visionAdapterMock = new vision_adapter_class_1.VisionAdapter();
                    SUT = new screen_class_1.Screen(visionAdapterMock);
                    imagePath = "test/path/to/image.png";
                    return [4 /*yield*/, expect(SUT.find(imagePath))
                            .rejects
                            .toEqual("Searching for " + imagePath + " failed. Reason: '" + rejectionReason + "'")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should override default confidence value with parameter.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var minMatch, matchResult, visionAdapterMock, SUT, imagePath, parameters, matchRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    minMatch = 0.8;
                    matchResult = new match_result_class_1.MatchResult(minMatch, searchRegion);
                    vision_adapter_class_1.VisionAdapter.prototype.findOnScreenRegion = jest.fn(function () {
                        return Promise.resolve(matchResult);
                    });
                    visionAdapterMock = new vision_adapter_class_1.VisionAdapter();
                    SUT = new screen_class_1.Screen(visionAdapterMock);
                    imagePath = "test/path/to/image.png";
                    parameters = new locationparameters_class_1.LocationParameters(undefined, minMatch);
                    return [4 /*yield*/, expect(SUT.find(imagePath, parameters)).resolves.toEqual(matchResult.location)];
                case 1:
                    _a.sent();
                    matchRequest = new match_request_class_1.MatchRequest(expect.any(image_class_1.Image), path_1.join(process_1.cwd(), imagePath), searchRegion, minMatch, true);
                    expect(visionAdapterMock.findOnScreenRegion).toHaveBeenCalledWith(matchRequest);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should override default search region with parameter.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var customSearchRegion, matchResult, visionAdapterMock, SUT, imagePath, parameters, matchRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customSearchRegion = new region_class_1.Region(10, 10, 90, 90);
                    matchResult = new match_result_class_1.MatchResult(0.99, searchRegion);
                    vision_adapter_class_1.VisionAdapter.prototype.findOnScreenRegion = jest.fn(function () {
                        return Promise.resolve(matchResult);
                    });
                    visionAdapterMock = new vision_adapter_class_1.VisionAdapter();
                    SUT = new screen_class_1.Screen(visionAdapterMock);
                    imagePath = "test/path/to/image.png";
                    parameters = new locationparameters_class_1.LocationParameters(customSearchRegion);
                    return [4 /*yield*/, expect(SUT.find(imagePath, parameters)).resolves.toEqual(matchResult.location)];
                case 1:
                    _a.sent();
                    matchRequest = new match_request_class_1.MatchRequest(expect.any(image_class_1.Image), path_1.join(process_1.cwd(), imagePath), customSearchRegion, SUT.config.confidence, true);
                    expect(visionAdapterMock.findOnScreenRegion).toHaveBeenCalledWith(matchRequest);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should override both confidence and search region with parameter.", function () { return __awaiter(void 0, void 0, void 0, function () {
        var minMatch, customSearchRegion, matchResult, visionAdapterMock, SUT, imagePath, parameters, matchRequest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    minMatch = 0.8;
                    customSearchRegion = new region_class_1.Region(10, 10, 90, 90);
                    matchResult = new match_result_class_1.MatchResult(minMatch, searchRegion);
                    vision_adapter_class_1.VisionAdapter.prototype.findOnScreenRegion = jest.fn(function () {
                        return Promise.resolve(matchResult);
                    });
                    visionAdapterMock = new vision_adapter_class_1.VisionAdapter();
                    SUT = new screen_class_1.Screen(visionAdapterMock);
                    imagePath = "test/path/to/image.png";
                    parameters = new locationparameters_class_1.LocationParameters(customSearchRegion, minMatch);
                    return [4 /*yield*/, expect(SUT.find(imagePath, parameters)).resolves.toEqual(matchResult.location)];
                case 1:
                    _a.sent();
                    matchRequest = new match_request_class_1.MatchRequest(expect.any(image_class_1.Image), path_1.join(process_1.cwd(), imagePath), customSearchRegion, minMatch, true);
                    expect(visionAdapterMock.findOnScreenRegion).toHaveBeenCalledWith(matchRequest);
                    return [2 /*return*/];
            }
        });
    }); });
});
