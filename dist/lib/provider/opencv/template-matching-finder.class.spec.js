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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var image_class_1 = require("../../image.class");
var match_request_class_1 = require("../../match-request.class");
var region_class_1 = require("../../region.class");
var image_reader_class_1 = require("./image-reader.class");
var template_matching_finder_class_1 = require("./template-matching-finder.class");
describe("Template-matching finder", function () {
    it("findMatch should return a match when present in image", function () { return __awaiter(void 0, void 0, void 0, function () {
        var imageLoader, SUT, haystackPath, needlePath, haystack, needle, minConfidence, searchRegion, matchRequest, expectedResult, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imageLoader = new image_reader_class_1.ImageReader();
                    SUT = new template_matching_finder_class_1.TemplateMatchingFinder();
                    haystackPath = path.resolve(__dirname, "./__mocks__/mouse.png");
                    needlePath = path.resolve(__dirname, "./__mocks__/needle.png");
                    return [4 /*yield*/, imageLoader.load(haystackPath)];
                case 1:
                    haystack = _a.sent();
                    return [4 /*yield*/, imageLoader.load(needlePath)];
                case 2:
                    needle = _a.sent();
                    minConfidence = 0.99;
                    searchRegion = new region_class_1.Region(0, 0, haystack.width, haystack.height);
                    matchRequest = new match_request_class_1.MatchRequest(haystack, needlePath, searchRegion, minConfidence);
                    expectedResult = new region_class_1.Region(16, 31, needle.width, needle.height);
                    return [4 /*yield*/, SUT.findMatch(matchRequest)];
                case 3:
                    result = _a.sent();
                    // THEN
                    expect(result.confidence).toBeGreaterThanOrEqual(minConfidence);
                    expect(result.location).toEqual(expectedResult);
                    return [2 /*return*/];
            }
        });
    }); });
    it("findMatch should return a match within a search region when present in image", function () { return __awaiter(void 0, void 0, void 0, function () {
        var imageLoader, SUT, haystackPath, needlePath, haystack, needle, minConfidence, searchRegion, matchRequest, expectedResult, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imageLoader = new image_reader_class_1.ImageReader();
                    SUT = new template_matching_finder_class_1.TemplateMatchingFinder();
                    haystackPath = path.resolve(__dirname, "./__mocks__/mouse.png");
                    needlePath = path.resolve(__dirname, "./__mocks__/needle.png");
                    return [4 /*yield*/, imageLoader.load(haystackPath)];
                case 1:
                    haystack = _a.sent();
                    return [4 /*yield*/, imageLoader.load(needlePath)];
                case 2:
                    needle = _a.sent();
                    minConfidence = 0.99;
                    searchRegion = new region_class_1.Region(10, 20, 140, 100);
                    matchRequest = new match_request_class_1.MatchRequest(haystack, needlePath, searchRegion, minConfidence);
                    expectedResult = new region_class_1.Region(6, 11, needle.width, needle.height);
                    return [4 /*yield*/, SUT.findMatch(matchRequest)];
                case 3:
                    result = _a.sent();
                    // THEN
                    expect(result.confidence).toBeGreaterThanOrEqual(minConfidence);
                    expect(result.location).toEqual(expectedResult);
                    return [2 /*return*/];
            }
        });
    }); });
    it("findMatch should throw on invalid image paths", function () { return __awaiter(void 0, void 0, void 0, function () {
        var imageLoader, SUT, pathToNeedle, pathToHaystack, needle, minConfidence, searchRegion, haystack, matchRequest, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imageLoader = new image_reader_class_1.ImageReader();
                    SUT = new template_matching_finder_class_1.TemplateMatchingFinder();
                    pathToNeedle = path.resolve(__dirname, "./__mocks__/mouse.png");
                    pathToHaystack = "./__mocks__/foo.png";
                    return [4 /*yield*/, imageLoader.load(pathToNeedle)];
                case 1:
                    needle = _a.sent();
                    minConfidence = 0.99;
                    searchRegion = new region_class_1.Region(0, 0, 100, 100);
                    haystack = new image_class_1.Image(needle.width, needle.height, needle.data, 3);
                    matchRequest = new match_request_class_1.MatchRequest(haystack, pathToHaystack, searchRegion, minConfidence);
                    result = SUT.findMatch(matchRequest);
                    // THEN
                    return [4 /*yield*/, expect(result)
                            .rejects
                            .toThrowError("Failed to load " + pathToHaystack + ". Reason: 'Failed to load image from '" + pathToHaystack + "''.")];
                case 2:
                    // THEN
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
