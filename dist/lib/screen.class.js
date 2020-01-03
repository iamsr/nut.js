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
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var process_1 = require("process");
var file_type_enum_1 = require("./file-type.enum");
var generate_output_path_function_1 = require("./generate-output-path.function");
var match_request_class_1 = require("./match-request.class");
var poll_action_function_1 = require("./util/poll-action.function");
var Screen = /** @class */ (function () {
    function Screen(vision, findHooks) {
        if (findHooks === void 0) { findHooks = new Map(); }
        this.vision = vision;
        this.findHooks = findHooks;
        this.config = {
            confidence: 0.99,
            resourceDirectory: process_1.cwd(),
        };
    }
    Screen.prototype.width = function () {
        return this.vision.screenWidth();
    };
    Screen.prototype.height = function () {
        return this.vision.screenHeight();
    };
    Screen.prototype.find = function (pathToNeedle, params) {
        return __awaiter(this, void 0, void 0, function () {
            var minMatch, searchRegion, _a, fullPathToNeedle, screenImage, matchRequest;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        minMatch = (params && params.confidence) || this.config.confidence;
                        _a = (params && params.searchRegion);
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.vision.screenSize()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        searchRegion = _a;
                        fullPathToNeedle = path_1.normalize(path_1.join(this.config.resourceDirectory, pathToNeedle));
                        return [4 /*yield*/, this.vision.grabScreen()];
                    case 3:
                        screenImage = _b.sent();
                        matchRequest = new match_request_class_1.MatchRequest(screenImage, fullPathToNeedle, searchRegion, minMatch);
                        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                var matchResult, possibleHooks, _i, possibleHooks_1, hook, e_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 8, , 9]);
                                            return [4 /*yield*/, this.vision.findOnScreenRegion(matchRequest)];
                                        case 1:
                                            matchResult = _a.sent();
                                            if (!(matchResult.confidence >= minMatch)) return [3 /*break*/, 6];
                                            possibleHooks = this.findHooks.get(pathToNeedle) || [];
                                            _i = 0, possibleHooks_1 = possibleHooks;
                                            _a.label = 2;
                                        case 2:
                                            if (!(_i < possibleHooks_1.length)) return [3 /*break*/, 5];
                                            hook = possibleHooks_1[_i];
                                            return [4 /*yield*/, hook(matchResult)];
                                        case 3:
                                            _a.sent();
                                            _a.label = 4;
                                        case 4:
                                            _i++;
                                            return [3 /*break*/, 2];
                                        case 5:
                                            resolve(matchResult.location);
                                            return [3 /*break*/, 7];
                                        case 6:
                                            reject("No match for " + pathToNeedle + ". Required: " + minMatch + ", given: " + matchResult.confidence);
                                            _a.label = 7;
                                        case 7: return [3 /*break*/, 9];
                                        case 8:
                                            e_1 = _a.sent();
                                            reject("Searching for " + pathToNeedle + " failed. Reason: '" + e_1 + "'");
                                            return [3 /*break*/, 9];
                                        case 9: return [2 /*return*/];
                                    }
                                });
                            }); })];
                }
            });
        });
    };
    Screen.prototype.waitFor = function (pathToNeedle, timeoutMs, params) {
        if (timeoutMs === void 0) { timeoutMs = 5000; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, poll_action_function_1.timeout(500, timeoutMs, function () { return _this.find(pathToNeedle, params); })];
            });
        });
    };
    Screen.prototype.on = function (pathToNeedle, callback) {
        var existingHooks = this.findHooks.get(pathToNeedle) || [];
        this.findHooks.set(pathToNeedle, __spreadArrays(existingHooks, [callback]));
    };
    Screen.prototype.capture = function (fileName, fileFormat, filePath, fileNamePrefix, fileNamePostfix) {
        if (fileFormat === void 0) { fileFormat = file_type_enum_1.FileType.PNG; }
        if (filePath === void 0) { filePath = process_1.cwd(); }
        if (fileNamePrefix === void 0) { fileNamePrefix = ""; }
        if (fileNamePostfix === void 0) { fileNamePostfix = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var outputPath, currentScreen;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outputPath = generate_output_path_function_1.generateOutputPath(fileName, {
                            path: filePath,
                            postfix: fileNamePostfix,
                            prefix: fileNamePrefix,
                            type: fileFormat,
                        });
                        return [4 /*yield*/, this.vision.grabScreen()];
                    case 1:
                        currentScreen = _a.sent();
                        return [4 /*yield*/, this.vision.saveImage(currentScreen, outputPath)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, outputPath];
                }
            });
        });
    };
    return Screen;
}());
exports.Screen = Screen;
