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
var robot = require("../../../../libnut");
var key_enum_1 = require("../../key.enum");
var KeyboardAction = /** @class */ (function () {
    function KeyboardAction() {
    }
    KeyboardAction.keyLookup = function (key) {
        return this.KeyLookupMap.get(key);
    };
    KeyboardAction.mapModifierKeys = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return keys
            .map(function (modifier) { return KeyboardAction.keyLookup(modifier); })
            .filter(function (modifierKey) { return modifierKey != null && modifierKey.length > 1; });
    };
    KeyboardAction.key = function (key, event) {
        var _this = this;
        var modifiers = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            modifiers[_i - 2] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            try {
                var nativeKey = KeyboardAction.keyLookup(key);
                var modifierKeys = _this.mapModifierKeys.apply(_this, modifiers);
                if (nativeKey) {
                    robot.keyToggle(nativeKey, event, modifierKeys);
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KeyboardAction.prototype.type = function (input) {
        return new Promise(function (resolve, reject) {
            try {
                robot.typeString(input);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KeyboardAction.prototype.click = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            try {
                keys.reverse();
                var key = keys[0], modifiers = keys.slice(1);
                var nativeKey = KeyboardAction.keyLookup(key);
                var modifierKeys = KeyboardAction.mapModifierKeys.apply(KeyboardAction, modifiers);
                if (nativeKey) {
                    robot.keyTap(nativeKey, modifierKeys);
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KeyboardAction.prototype.pressKey = function () {
        var _this = this;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var key, modifiers, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        keys.reverse();
                        key = keys[0], modifiers = keys.slice(1);
                        return [4 /*yield*/, KeyboardAction.key.apply(KeyboardAction, __spreadArrays([key, "down"], modifiers))];
                    case 1:
                        _a.sent();
                        resolve();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        reject(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    KeyboardAction.prototype.releaseKey = function () {
        var _this = this;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var key, modifiers, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        keys.reverse();
                        key = keys[0], modifiers = keys.slice(1);
                        return [4 /*yield*/, KeyboardAction.key.apply(KeyboardAction, __spreadArrays([key, "up"], modifiers))];
                    case 1:
                        _a.sent();
                        resolve();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        reject(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    KeyboardAction.prototype.setKeyboardDelay = function (delay) {
        robot.setKeyboardDelay(delay);
    };
    KeyboardAction.KeyLookupMap = new Map([
        [key_enum_1.Key.A, "a"],
        [key_enum_1.Key.B, "b"],
        [key_enum_1.Key.C, "c"],
        [key_enum_1.Key.D, "d"],
        [key_enum_1.Key.E, "e"],
        [key_enum_1.Key.F, "f"],
        [key_enum_1.Key.G, "g"],
        [key_enum_1.Key.H, "h"],
        [key_enum_1.Key.I, "i"],
        [key_enum_1.Key.J, "j"],
        [key_enum_1.Key.K, "k"],
        [key_enum_1.Key.L, "l"],
        [key_enum_1.Key.M, "m"],
        [key_enum_1.Key.N, "n"],
        [key_enum_1.Key.O, "o"],
        [key_enum_1.Key.P, "p"],
        [key_enum_1.Key.Q, "q"],
        [key_enum_1.Key.R, "r"],
        [key_enum_1.Key.S, "s"],
        [key_enum_1.Key.T, "t"],
        [key_enum_1.Key.U, "u"],
        [key_enum_1.Key.V, "v"],
        [key_enum_1.Key.W, "w"],
        [key_enum_1.Key.X, "x"],
        [key_enum_1.Key.Y, "y"],
        [key_enum_1.Key.Z, "z"],
        [key_enum_1.Key.F1, "f1"],
        [key_enum_1.Key.F2, "f2"],
        [key_enum_1.Key.F3, "f3"],
        [key_enum_1.Key.F4, "f4"],
        [key_enum_1.Key.F5, "f5"],
        [key_enum_1.Key.F6, "f6"],
        [key_enum_1.Key.F7, "f7"],
        [key_enum_1.Key.F8, "f8"],
        [key_enum_1.Key.F9, "f9"],
        [key_enum_1.Key.F10, "f10"],
        [key_enum_1.Key.F11, "f11"],
        [key_enum_1.Key.F12, "f12"],
        [key_enum_1.Key.Num0, "0"],
        [key_enum_1.Key.Num1, "1"],
        [key_enum_1.Key.Num2, "2"],
        [key_enum_1.Key.Num3, "3"],
        [key_enum_1.Key.Num4, "4"],
        [key_enum_1.Key.Num5, "5"],
        [key_enum_1.Key.Num6, "6"],
        [key_enum_1.Key.Num7, "7"],
        [key_enum_1.Key.Num8, "8"],
        [key_enum_1.Key.Num9, "9"],
        [key_enum_1.Key.NumPad0, "numpad_0"],
        [key_enum_1.Key.NumPad1, "numpad_1"],
        [key_enum_1.Key.NumPad2, "numpad_2"],
        [key_enum_1.Key.NumPad3, "numpad_3"],
        [key_enum_1.Key.NumPad4, "numpad_4"],
        [key_enum_1.Key.NumPad5, "numpad_5"],
        [key_enum_1.Key.NumPad6, "numpad_6"],
        [key_enum_1.Key.NumPad7, "numpad_7"],
        [key_enum_1.Key.NumPad8, "numpad_8"],
        [key_enum_1.Key.NumPad9, "numpad_9"],
        [key_enum_1.Key.Space, "space"],
        [key_enum_1.Key.Escape, "escape"],
        [key_enum_1.Key.Tab, "tab"],
        [key_enum_1.Key.LeftAlt, "alt"],
        [key_enum_1.Key.LeftControl, "control"],
        [key_enum_1.Key.RightAlt, "alt"],
        [key_enum_1.Key.RightControl, "control"],
        [key_enum_1.Key.LeftShift, "shift"],
        [key_enum_1.Key.LeftSuper, "command"],
        [key_enum_1.Key.RightShift, "space"],
        [key_enum_1.Key.RightSuper, "command"],
        [key_enum_1.Key.Grave, "~"],
        [key_enum_1.Key.Minus, "-"],
        [key_enum_1.Key.Equal, "="],
        [key_enum_1.Key.Backspace, "backspace"],
        [key_enum_1.Key.LeftBracket, "["],
        [key_enum_1.Key.RightBracket, "]"],
        [key_enum_1.Key.Backslash, "\\"],
        [key_enum_1.Key.Semicolon, ";"],
        [key_enum_1.Key.Quote, "'"],
        [key_enum_1.Key.Return, "enter"],
        [key_enum_1.Key.Comma, ","],
        [key_enum_1.Key.Period, "."],
        [key_enum_1.Key.Slash, "/"],
        [key_enum_1.Key.Left, "left"],
        [key_enum_1.Key.Up, "up"],
        [key_enum_1.Key.Right, "right"],
        [key_enum_1.Key.Down, "down"],
        [key_enum_1.Key.Print, "printscreen"],
        [key_enum_1.Key.Pause, null],
        [key_enum_1.Key.Insert, "insert"],
        [key_enum_1.Key.Delete, null],
        [key_enum_1.Key.Home, "home"],
        [key_enum_1.Key.End, "end"],
        [key_enum_1.Key.PageUp, "pageup"],
        [key_enum_1.Key.PageDown, "pagedown"],
        [key_enum_1.Key.Add, null],
        [key_enum_1.Key.Subtract, null],
        [key_enum_1.Key.Multiply, null],
        [key_enum_1.Key.Divide, null],
        [key_enum_1.Key.Decimal, null],
        [key_enum_1.Key.Enter, "enter"],
        [key_enum_1.Key.CapsLock, null],
        [key_enum_1.Key.ScrollLock, null],
        [key_enum_1.Key.NumLock, null],
    ]);
    return KeyboardAction;
}());
exports.KeyboardAction = KeyboardAction;
