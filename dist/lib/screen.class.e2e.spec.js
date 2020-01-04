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
var fs_1 = require("fs");
var vision_adapter_class_1 = require("./adapter/vision.adapter.class");
var file_type_enum_1 = require("./file-type.enum");
var screen_class_1 = require("./screen.class");
var sleep_function_1 = require("./sleep.function");
describe("Screen.", function () {
    it("should capture the screen", function () {
        // GIVEN
        var visionAdapter = new vision_adapter_class_1.VisionAdapter();
        var SUT = new screen_class_1.Screen(visionAdapter);
        // WHEN
        SUT.capture("asdf", file_type_enum_1.FileType.PNG).then(function (filename) {
            // THEN
            expect(filename).not.toBeNull();
            sleep_function_1.sleep(1000).then(function () {
                expect(fs_1.existsSync(filename)).toBeTruthy();
            });
        });
    });
    it("should capture the screen and save to JPG", function () {
        // GIVEN
        var visionAdapter = new vision_adapter_class_1.VisionAdapter();
        var SUT = new screen_class_1.Screen(visionAdapter);
        // WHEN
        SUT.capture("asdf", file_type_enum_1.FileType.JPG).then(function (filename) {
            // THEN
            expect(filename).not.toBeNull();
            sleep_function_1.sleep(1000).then(function () {
                expect(fs_1.existsSync(filename)).toBeTruthy();
            });
        });
    });
    it("should capture the screen and save file with prefix", function () {
        // GIVEN
        var visionAdapter = new vision_adapter_class_1.VisionAdapter();
        var SUT = new screen_class_1.Screen(visionAdapter);
        var prefix = "foo_";
        // WHEN
        SUT.capture("asdf", file_type_enum_1.FileType.JPG, "./", prefix).then(function (filename) {
            // THEN
            expect(filename.includes(prefix)).toBeTruthy();
            expect(filename).not.toBeNull();
            sleep_function_1.sleep(1000).then(function () {
                expect(fs_1.existsSync(filename)).toBeTruthy();
            });
        });
    });
    it("should capture the screen and save file with postfix", function () {
        // GIVEN
        var visionAdapter = new vision_adapter_class_1.VisionAdapter();
        var SUT = new screen_class_1.Screen(visionAdapter);
        var postfix = "_bar";
        // WHEN
        SUT.capture("asdf", file_type_enum_1.FileType.JPG, "./", "", postfix).then(function (filename) {
            // THEN
            expect(filename.includes(postfix)).toBeTruthy();
            expect(filename).not.toBeNull();
            sleep_function_1.sleep(1000).then(function () {
                expect(fs_1.existsSync(filename)).toBeTruthy();
            });
        });
    });
    it("should capture the screen and save file with pre- and postfix", function () {
        // GIVEN
        var visionAdapter = new vision_adapter_class_1.VisionAdapter();
        var SUT = new screen_class_1.Screen(visionAdapter);
        var filename = "asdf";
        var prefix = "foo_";
        var postfix = "_bar";
        // WHEN
        SUT.capture("asdf", file_type_enum_1.FileType.JPG, "./", prefix, postfix).then(function (output) {
            // THEN
            expect(output.includes("" + prefix + filename + postfix)).toBeTruthy();
            expect(output).not.toBeNull();
            sleep_function_1.sleep(1000).then(function () {
                expect(fs_1.existsSync(output)).toBeTruthy();
            });
        });
    });
    it("should reject after timeout", function () { return __awaiter(void 0, void 0, void 0, function () {
        var timeout, visionAdapter, SUT, start, e_1, end;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // GIVEN
                    jest.setTimeout(10000);
                    timeout = 5000;
                    visionAdapter = new vision_adapter_class_1.VisionAdapter();
                    SUT = new screen_class_1.Screen(visionAdapter);
                    SUT.config.resourceDirectory = "./e2e/assets";
                    start = Date.now();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, SUT.waitFor("calculator.png", timeout)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    // THEN
                    expect(e_1).toBe("Action timed out after " + timeout + " ms");
                    return [3 /*break*/, 4];
                case 4:
                    end = Date.now();
                    // THEN
                    expect(end - start).toBeGreaterThanOrEqual(timeout);
                    return [2 /*return*/];
            }
        });
    }); });
});
