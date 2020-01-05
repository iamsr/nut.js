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
var cv = __importStar(require("opencv4nodejs"));
function determineROI(img, roi) {
    return new cv.Rect(Math.min(Math.max(roi.left, 0), img.width), Math.min(Math.max(roi.top, 0), img.height), Math.min(roi.width, img.width - roi.left), Math.min(roi.height, img.height - roi.top));
}
var ImageProcessor = /** @class */ (function () {
    function ImageProcessor() {
    }
    /**
     * fromImageWithAlphaChannel should provide a way to create a library specific
     * image with alpha channel from an abstract Image object holding raw data and image dimension
     *
     * @param {Image} img The input Image
     * @param {Region} [roi] An optional Region to specify a ROI
     * @returns {Promise<any>} An image
     * @memberof VisionProviderInterface
     */
    ImageProcessor.fromImageWithAlphaChannel = function (img, roi) {
        return __awaiter(this, void 0, void 0, function () {
            var mat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new cv.Mat(img.data, img.height, img.width, cv.CV_8UC4).cvtColorAsync(cv.COLOR_BGRA2BGR)];
                    case 1:
                        mat = _a.sent();
                        if (roi) {
                            return [2 /*return*/, mat.getRegion(determineROI(img, roi))];
                        }
                        else {
                            return [2 /*return*/, mat];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * fromImageWithoutAlphaChannel should provide a way to create a library specific
     * image without alpha channel from an abstract Image object holding raw data and image dimension
     *
     * @param {Image} img The input Image
     * @param {Region} [roi] An optional Region to specify a ROI
     * @returns {Promise<any>} An image
     * @memberof VisionProviderInterface
     */
    ImageProcessor.fromImageWithoutAlphaChannel = function (img, roi) {
        return __awaiter(this, void 0, void 0, function () {
            var mat;
            return __generator(this, function (_a) {
                mat = new cv.Mat(img.data, img.height, img.width, cv.CV_8UC3);
                if (roi) {
                    return [2 /*return*/, mat.getRegion(determineROI(img, roi))];
                }
                else {
                    return [2 /*return*/, mat];
                }
                return [2 /*return*/];
            });
        });
    };
    return ImageProcessor;
}());
exports.ImageProcessor = ImageProcessor;
