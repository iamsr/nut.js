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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cv = __importStar(require("opencv4nodejs"));
var path = __importStar(require("path"));
var region_class_1 = require("../../region.class");
var scaled_match_result_class_1 = require("../../scaled-match-result.class");
var determine_searchregion_function_1 = require("./determine-searchregion.function");
var image_processor_class_1 = require("./image-processor.class");
var image_reader_class_1 = require("./image-reader.class");
var match_image_function_1 = require("./match-image.function");
var scale_image_function_1 = require("./scale-image.function");
var scale_location_function_1 = require("./scale-location.function");
function loadNeedle(image) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (image.hasAlphaChannel) {
                return [2 /*return*/, image_processor_class_1.ImageProcessor.fromImageWithAlphaChannel(image)];
            }
            return [2 /*return*/, image_processor_class_1.ImageProcessor.fromImageWithoutAlphaChannel(image)];
        });
    });
}
function loadHaystack(matchRequest) {
    return __awaiter(this, void 0, void 0, function () {
        var searchRegion;
        return __generator(this, function (_a) {
            searchRegion = determine_searchregion_function_1.determineScaledSearchRegion(matchRequest);
            if (matchRequest.haystack.hasAlphaChannel) {
                return [2 /*return*/, image_processor_class_1.ImageProcessor.fromImageWithAlphaChannel(matchRequest.haystack, searchRegion)];
            }
            else {
                return [2 /*return*/, image_processor_class_1.ImageProcessor.fromImageWithoutAlphaChannel(matchRequest.haystack, searchRegion)];
            }
            return [2 /*return*/];
        });
    });
}
function debugImage(image, filename, suffix) {
    var parsedPath = path.parse(filename);
    var fullFilename = parsedPath.name;
    if (suffix) {
        fullFilename = fullFilename + "_" + suffix;
    }
    fullFilename += parsedPath.ext;
    var fullPath = path.join(parsedPath.dir, fullFilename);
    cv.imwriteAsync(fullPath, image);
}
// function debugResult(image: cv.Mat, result: MatchResult, filename: string, suffix?: string) {
//   const roiRect = new cv.Rect(
//     Math.min(Math.max(result.location.left, 0), image.cols),
//     Math.min(Math.max(result.location.top, 0), image.rows),
//     Math.min(result.location.width, image.cols - result.location.left),
//     Math.min(result.location.height, image.rows - result.location.top));
//   debugImage(image.getRegion(roiRect), filename, suffix);
// }
function isValidSearch(needle, haystack) {
    return (needle.cols <= haystack.cols) && (needle.rows <= haystack.rows);
}
var TemplateMatchingFinder = /** @class */ (function () {
    function TemplateMatchingFinder(source) {
        if (source === void 0) { source = new image_reader_class_1.ImageReader(); }
        this.source = source;
        this.initialScale = [1.0];
        this.scaleSteps = [0.9, 0.8, 0.7, 0.6, 0.5];
    }
    TemplateMatchingFinder.prototype.findMatches = function (matchRequest, debug) {
        if (debug === void 0) { debug = false; }
        return __awaiter(this, void 0, void 0, function () {
            var needle, needleInput, e_1, haystack, matchResults, scaledNeedleResult, scaledHaystackResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.source.load(matchRequest.pathToNeedle)];
                    case 1:
                        needleInput = _a.sent();
                        return [4 /*yield*/, loadNeedle(needleInput)];
                    case 2:
                        needle = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        throw new Error("Failed to load " + matchRequest.pathToNeedle + ". Reason: '" + e_1 + "'.");
                    case 4:
                        if (!needle || needle.empty) {
                            throw new Error("Failed to load " + matchRequest.pathToNeedle + ", got empty image.");
                        }
                        return [4 /*yield*/, loadHaystack(matchRequest)];
                    case 5:
                        haystack = _a.sent();
                        if (debug) {
                            debugImage(needle, "input_needle.png");
                            debugImage(haystack, "input_haystack.png");
                        }
                        matchResults = this.initialScale.map(function (currentScale) { return __awaiter(_this, void 0, void 0, function () {
                            var matchResult;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!isValidSearch(needle, haystack)) {
                                            return [2 /*return*/, new scaled_match_result_class_1.ScaledMatchResult(0, currentScale, new region_class_1.Region(0, 0, 0, 0))];
                                        }
                                        return [4 /*yield*/, match_image_function_1.matchImages(haystack, needle)];
                                    case 1:
                                        matchResult = _a.sent();
                                        return [2 /*return*/, new scaled_match_result_class_1.ScaledMatchResult(matchResult.confidence, currentScale, matchResult.location)];
                                }
                            });
                        }); });
                        if (matchRequest.searchMultipleScales) {
                            scaledNeedleResult = this.scaleSteps.map(function (currentScale) { return __awaiter(_this, void 0, void 0, function () {
                                var scaledNeedle, matchResult;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, scale_image_function_1.scaleImage(needle, currentScale)];
                                        case 1:
                                            scaledNeedle = _a.sent();
                                            if (!isValidSearch(scaledNeedle, haystack)) {
                                                return [2 /*return*/, new scaled_match_result_class_1.ScaledMatchResult(0, currentScale, new region_class_1.Region(0, 0, 0, 0))];
                                            }
                                            return [4 /*yield*/, match_image_function_1.matchImages(haystack, scaledNeedle)];
                                        case 2:
                                            matchResult = _a.sent();
                                            return [2 /*return*/, new scaled_match_result_class_1.ScaledMatchResult(matchResult.confidence, currentScale, matchResult.location)];
                                    }
                                });
                            }); });
                            scaledHaystackResult = this.scaleSteps.map(function (currentScale) { return __awaiter(_this, void 0, void 0, function () {
                                var scaledHaystack, matchResult;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, scale_image_function_1.scaleImage(haystack, currentScale)];
                                        case 1:
                                            scaledHaystack = _a.sent();
                                            if (!isValidSearch(needle, scaledHaystack)) {
                                                return [2 /*return*/, new scaled_match_result_class_1.ScaledMatchResult(0, currentScale, new region_class_1.Region(0, 0, 0, 0))];
                                            }
                                            return [4 /*yield*/, match_image_function_1.matchImages(scaledHaystack, needle)];
                                        case 2:
                                            matchResult = _a.sent();
                                            return [2 /*return*/, new scaled_match_result_class_1.ScaledMatchResult(matchResult.confidence, currentScale, scale_location_function_1.scaleLocation(matchResult.location, currentScale))];
                                    }
                                });
                            }); });
                            matchResults.push.apply(matchResults, __spreadArrays(scaledHaystackResult, scaledNeedleResult));
                        }
                        return [2 /*return*/, Promise.all(matchResults).then(function (results) {
                                results.forEach(function (matchResult) {
                                    matchResult.location.left /= matchRequest.haystack.pixelDensity.scaleX;
                                    matchResult.location.width /= matchRequest.haystack.pixelDensity.scaleX;
                                    matchResult.location.top /= matchRequest.haystack.pixelDensity.scaleY;
                                    matchResult.location.height /= matchRequest.haystack.pixelDensity.scaleY;
                                });
                                return results.sort(function (first, second) { return second.confidence - first.confidence; });
                            })];
                }
            });
        });
    };
    TemplateMatchingFinder.prototype.findMatch = function (matchRequest, debug) {
        if (debug === void 0) { debug = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var matches, potentialMatches, e_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.findMatches(matchRequest, debug)];
                                case 1:
                                    matches = _a.sent();
                                    potentialMatches = matches
                                        .filter(function (match) { return match.confidence >= matchRequest.confidence; });
                                    if (potentialMatches.length === 0) {
                                        reject("Unable to locate " + matchRequest.pathToNeedle + ", no match!");
                                    }
                                    resolve(potentialMatches[0]);
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_2 = _a.sent();
                                    reject(e_2);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return TemplateMatchingFinder;
}());
exports.TemplateMatchingFinder = TemplateMatchingFinder;
