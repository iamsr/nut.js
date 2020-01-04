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
var robotjs_screen_action_class_1 = require("../provider/native/robotjs-screen-action.class");
var image_writer_class_1 = require("../provider/opencv/image-writer.class");
var template_matching_finder_class_1 = require("../provider/opencv/template-matching-finder.class");
/**
 * OpenCVAdapter serves as an abstraction layer for all image based interactions.
 *
 * This allows to provide a high level interface for image based actions,
 * whithout having to spread (possibly) multiple dependencies all over the code.
 * All actions which involve screenshots / images are bundled in this adapter.
 */
var VisionAdapter = /** @class */ (function () {
    function VisionAdapter(finder, screen, dataSink) {
        if (finder === void 0) { finder = new template_matching_finder_class_1.TemplateMatchingFinder(); }
        if (screen === void 0) { screen = new robotjs_screen_action_class_1.ScreenAction(); }
        if (dataSink === void 0) { dataSink = new image_writer_class_1.ImageWriter(); }
        this.finder = finder;
        this.screen = screen;
        this.dataSink = dataSink;
    }
    /**
     * grabScreen will return an Image containing the current screen image
     *
     * @returns {Promise<Image>} Image will contain screenshot data as well as dimensions
     * @memberof VisionAdapter
     */
    VisionAdapter.prototype.grabScreen = function () {
        return this.screen.grabScreen();
    };
    /**
     * grabScreenRegion essentially does the same as grabScreen, but only returns a specified Region
     *
     * @param {Region} region The screen region we want to grab
     * @returns {Promise<Image>} Image will contain screenshot data of the specified region as well as dimensions
     * @memberof VisionAdapter
     */
    VisionAdapter.prototype.grabScreenRegion = function (region) {
        return this.screen.grabScreenRegion(region);
    };
    /**
     * findOnScreenRegion will search for a given pattern inside a region of an image.
     * If multiple possible occurences are found, the one with the highes probability is returned.
     * For matchProbability < 0.99 the search will be performed on grayscale images.
     *
     * @param {MatchRequest} matchRequest A match request which holds all required matching data
     * @returns {Promise<MatchResult>} MatchResult will contain location and probability of a possible match
     * @memberof VisionAdapter
     */
    VisionAdapter.prototype.findOnScreenRegion = function (matchRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var matchResult, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.finder.findMatch(matchRequest)];
                                case 1:
                                    matchResult = _a.sent();
                                    resolve(matchResult);
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_1 = _a.sent();
                                    reject(e_1);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * screenWidth returns the main screen's width as reported by the OS.
     * Please notice that on e.g. Apples Retina display the reported width
     * and the actual pixel size may differ
     *
     * @returns {Promise<number>} The main screen's width as reported by the OS
     * @memberof VisionAdapter
     */
    VisionAdapter.prototype.screenWidth = function () {
        return this.screen.screenWidth();
    };
    /**
     * screenHeight returns the main screen's height as reported by the OS.
     * Please notice that on e.g. Apples Retina display the reported width
     * and the actual pixel size may differ
     *
     * @returns {Promise<number>} The main screen's height as reported by the OS
     * @memberof VisionAdapter
     */
    VisionAdapter.prototype.screenHeight = function () {
        return this.screen.screenHeight();
    };
    /**
     * screenSize returns a Region object with the main screen's size.
     * Please notice that on e.g. Apples Retina display the reported width
     * and the actual pixel size may differ
     *
     * @returns {Promise<Region>} The Region object the size of your main screen
     * @memberof VisionAdapter
     */
    VisionAdapter.prototype.screenSize = function () {
        return this.screen.screenSize();
    };
    /**
     * saveImage saves an Image to a given path on disk.
     *
     * @param image The Image to store
     * @param path The storage path
     * @memberof VisionAdapter
     */
    VisionAdapter.prototype.saveImage = function (image, path) {
        return this.dataSink.store(image, path);
    };
    return VisionAdapter;
}());
exports.VisionAdapter = VisionAdapter;
