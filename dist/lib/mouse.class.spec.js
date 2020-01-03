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
var native_adapter_class_1 = require("./adapter/native.adapter.class");
var button_enum_1 = require("./button.enum");
var mouse_class_1 = require("./mouse.class");
var point_class_1 = require("./point.class");
var linehelper_class_1 = require("./util/linehelper.class");
jest.mock("./adapter/native.adapter.class");
beforeEach(function () {
    jest.resetAllMocks();
});
var linehelper = new linehelper_class_1.LineHelper();
describe("Mouse class", function () {
    it("should have a default delay of 500 ms", function () {
        // GIVEN
        var adapterMock = new native_adapter_class_1.NativeAdapter();
        var SUT = new mouse_class_1.Mouse(adapterMock);
        // WHEN
        // THEN
        expect(SUT.config.autoDelayMs).toEqual(100);
    });
    it("should forward scrollLeft to the native adapter class", function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeAdapterMock, SUT, scrollAmount, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nativeAdapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new mouse_class_1.Mouse(nativeAdapterMock);
                    scrollAmount = 5;
                    return [4 /*yield*/, SUT.scrollLeft(scrollAmount)];
                case 1:
                    result = _a.sent();
                    // THEN
                    expect(nativeAdapterMock.scrollLeft).toBeCalledWith(scrollAmount);
                    expect(result).toBe(SUT);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should forward scrollRight to the native adapter class", function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeAdapterMock, SUT, scrollAmount, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nativeAdapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new mouse_class_1.Mouse(nativeAdapterMock);
                    scrollAmount = 5;
                    return [4 /*yield*/, SUT.scrollRight(scrollAmount)];
                case 1:
                    result = _a.sent();
                    // THEN
                    expect(nativeAdapterMock.scrollRight).toBeCalledWith(scrollAmount);
                    expect(result).toBe(SUT);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should forward scrollDown to the native adapter class", function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeAdapterMock, SUT, scrollAmount, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nativeAdapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new mouse_class_1.Mouse(nativeAdapterMock);
                    scrollAmount = 5;
                    return [4 /*yield*/, SUT.scrollDown(scrollAmount)];
                case 1:
                    result = _a.sent();
                    // THEN
                    expect(nativeAdapterMock.scrollDown).toBeCalledWith(scrollAmount);
                    expect(result).toBe(SUT);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should forward scrollUp to the native adapter class", function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeAdapterMock, SUT, scrollAmount, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nativeAdapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new mouse_class_1.Mouse(nativeAdapterMock);
                    scrollAmount = 5;
                    return [4 /*yield*/, SUT.scrollUp(scrollAmount)];
                case 1:
                    result = _a.sent();
                    // THEN
                    expect(nativeAdapterMock.scrollUp).toBeCalledWith(scrollAmount);
                    expect(result).toBe(SUT);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should forward leftClick to the native adapter class", function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeAdapterMock, SUT, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nativeAdapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new mouse_class_1.Mouse(nativeAdapterMock);
                    return [4 /*yield*/, SUT.leftClick()];
                case 1:
                    result = _a.sent();
                    // THEN
                    expect(nativeAdapterMock.leftClick).toBeCalled();
                    expect(result).toBe(SUT);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should forward rightClick to the native adapter class", function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeAdapterMock, SUT, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nativeAdapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new mouse_class_1.Mouse(nativeAdapterMock);
                    return [4 /*yield*/, SUT.rightClick()];
                case 1:
                    result = _a.sent();
                    // THEN
                    expect(nativeAdapterMock.rightClick).toBeCalled();
                    expect(result).toBe(SUT);
                    return [2 /*return*/];
            }
        });
    }); });
    it("update mouse position along path on move", function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeAdapterMock, SUT, path, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nativeAdapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new mouse_class_1.Mouse(nativeAdapterMock);
                    path = linehelper.straightLine(new point_class_1.Point(0, 0), new point_class_1.Point(10, 10));
                    return [4 /*yield*/, SUT.move(path)];
                case 1:
                    result = _a.sent();
                    // THEN
                    expect(nativeAdapterMock.setMousePosition).toBeCalledTimes(path.length);
                    expect(result).toBe(SUT);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should press and hold left mouse button, move and release left mouse button on drag", function () { return __awaiter(void 0, void 0, void 0, function () {
        var nativeAdapterMock, SUT, path, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nativeAdapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new mouse_class_1.Mouse(nativeAdapterMock);
                    path = linehelper.straightLine(new point_class_1.Point(0, 0), new point_class_1.Point(10, 10));
                    return [4 /*yield*/, SUT.drag(path)];
                case 1:
                    result = _a.sent();
                    // THEN
                    expect(nativeAdapterMock.pressButton).toBeCalledWith(button_enum_1.Button.LEFT);
                    expect(nativeAdapterMock.setMousePosition).toBeCalledTimes(path.length);
                    expect(nativeAdapterMock.releaseButton).toBeCalledWith(button_enum_1.Button.LEFT);
                    expect(result).toBe(SUT);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Mousebuttons", function () {
    it.each([
        [button_enum_1.Button.LEFT, button_enum_1.Button.LEFT],
        [button_enum_1.Button.MIDDLE, button_enum_1.Button.MIDDLE],
        [button_enum_1.Button.RIGHT, button_enum_1.Button.RIGHT],
    ])("should be pressed and released", function (input, expected) { return __awaiter(void 0, void 0, void 0, function () {
        var nativeAdapterMock, SUT, pressed, released;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nativeAdapterMock = new native_adapter_class_1.NativeAdapter();
                    SUT = new mouse_class_1.Mouse(nativeAdapterMock);
                    return [4 /*yield*/, SUT.pressButton(input)];
                case 1:
                    pressed = _a.sent();
                    return [4 /*yield*/, SUT.releaseButton(input)];
                case 2:
                    released = _a.sent();
                    expect(nativeAdapterMock.pressButton).toBeCalledWith(expected);
                    expect(nativeAdapterMock.releaseButton).toBeCalledWith(expected);
                    expect(pressed).toBe(SUT);
                    expect(released).toBe(SUT);
                    return [2 /*return*/];
            }
        });
    }); });
});
