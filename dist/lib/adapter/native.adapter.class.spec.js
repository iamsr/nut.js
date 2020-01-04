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
var button_enum_1 = require("../button.enum");
var key_enum_1 = require("../key.enum");
var point_class_1 = require("../point.class");
var clipboardy_clipboard_action_class_1 = require("../provider/native/clipboardy-clipboard-action.class");
var robotjs_keyboard_action_class_1 = require("../provider/native/robotjs-keyboard-action.class");
var robotjs_mouse_action_class_1 = require("../provider/native/robotjs-mouse-action.class");
var native_adapter_class_1 = require("./native.adapter.class");
jest.mock("../provider/native/clipboardy-clipboard-action.class");
jest.mock("../provider/native/robotjs-mouse-action.class");
jest.mock("../provider/native/robotjs-keyboard-action.class");
describe("NativeAdapter class", function () {
    it("should delegate calls to setMouseDelay", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT, delay;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    delay = 5;
                    // WHEN
                    return [4 /*yield*/, SUT.setMouseDelay(delay)];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(mouseMock.setMouseDelay).toBeCalledTimes(1);
                    expect(mouseMock.setMouseDelay).toBeCalledWith(delay);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to setMousePosition", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT, newPosition;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    newPosition = new point_class_1.Point(10, 10);
                    // WHEN
                    return [4 /*yield*/, SUT.setMousePosition(newPosition)];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(mouseMock.setMousePosition).toBeCalledTimes(1);
                    expect(mouseMock.setMousePosition).toBeCalledWith(newPosition);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to currentMousePosition", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    // WHEN
                    return [4 /*yield*/, SUT.currentMousePosition()];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(mouseMock.currentMousePosition).toBeCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to leftClick", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    // WHEN
                    return [4 /*yield*/, SUT.leftClick()];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(mouseMock.leftClick).toBeCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to rightClick", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    // WHEN
                    return [4 /*yield*/, SUT.rightClick()];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(mouseMock.rightClick).toBeCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to middleClick", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    // WHEN
                    return [4 /*yield*/, SUT.middleClick()];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(mouseMock.middleClick).toBeCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to pressButton", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT, buttonToPress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    buttonToPress = button_enum_1.Button.LEFT;
                    // WHEN
                    return [4 /*yield*/, SUT.pressButton(buttonToPress)];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(mouseMock.pressButton).toBeCalledTimes(1);
                    expect(mouseMock.pressButton).toBeCalledWith(buttonToPress);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to releaseButton", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT, buttonToRelease;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    buttonToRelease = button_enum_1.Button.LEFT;
                    // WHEN
                    return [4 /*yield*/, SUT.releaseButton(buttonToRelease)];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(mouseMock.releaseButton).toBeCalledTimes(1);
                    expect(mouseMock.releaseButton).toBeCalledWith(buttonToRelease);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to pressKey", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT, keyToPress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    keyToPress = key_enum_1.Key.A;
                    // WHEN
                    return [4 /*yield*/, SUT.pressKey(keyToPress)];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(keyboardMock.pressKey).toBeCalledTimes(1);
                    expect(keyboardMock.pressKey).toBeCalledWith(keyToPress);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to releaseButton", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT, keyToRelease;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    keyToRelease = key_enum_1.Key.A;
                    // WHEN
                    return [4 /*yield*/, SUT.releaseKey(keyToRelease)];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(keyboardMock.releaseKey).toBeCalledTimes(1);
                    expect(keyboardMock.releaseKey).toBeCalledWith(keyToRelease);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to click", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT, keyToClick;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    keyToClick = key_enum_1.Key.A;
                    // WHEN
                    return [4 /*yield*/, SUT.click(keyToClick)];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(keyboardMock.click).toBeCalledTimes(1);
                    expect(keyboardMock.click).toBeCalledWith(keyToClick);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to type", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT, stringToType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    stringToType = "testString";
                    // WHEN
                    return [4 /*yield*/, SUT.type(stringToType)];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(keyboardMock.type).toBeCalledTimes(1);
                    expect(keyboardMock.type).toBeCalledWith(stringToType);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to copy", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT, stringToCopy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    stringToCopy = "testString";
                    // WHEN
                    return [4 /*yield*/, SUT.copy(stringToCopy)];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(clipboardMock.copy).toBeCalledTimes(1);
                    expect(clipboardMock.copy).toBeCalledWith(stringToCopy);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should delegate calls to paste", function () { return __awaiter(void 0, void 0, void 0, function () {
        var clipboardMock, keyboardMock, mouseMock, SUT;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    clipboardMock = new clipboardy_clipboard_action_class_1.ClipboardAction();
                    keyboardMock = new robotjs_keyboard_action_class_1.KeyboardAction();
                    mouseMock = new robotjs_mouse_action_class_1.MouseAction();
                    SUT = new native_adapter_class_1.NativeAdapter(clipboardMock, keyboardMock, mouseMock);
                    // WHEN
                    return [4 /*yield*/, SUT.paste()];
                case 1:
                    // WHEN
                    _a.sent();
                    // THEN
                    expect(clipboardMock.paste).toBeCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
});
