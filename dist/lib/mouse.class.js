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
var button_enum_1 = require("./button.enum");
var movementtype_function_1 = require("./movementtype.function");
var sleep_function_1 = require("./sleep.function");
var Mouse = /** @class */ (function () {
    function Mouse(native) {
        this.native = native;
        this.config = {
            autoDelayMs: 100,
            mouseSpeed: 1000,
        };
        this.native.setMouseDelay(0);
    }
    Mouse.prototype.setPosition = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.native.setMousePosition(target)];
                                case 1:
                                    _a.sent();
                                    resolve(this);
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
    Mouse.prototype.getPosition = function () {
        return this.native.currentMousePosition();
    };
    Mouse.prototype.move = function (path, movementType) {
        if (movementType === void 0) { movementType = movementtype_function_1.linear; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var pathSteps, timeSteps, idx, node, minTime, e_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 7, , 8]);
                                    return [4 /*yield*/, path];
                                case 1:
                                    pathSteps = _a.sent();
                                    timeSteps = movementType(pathSteps.length, this.config.mouseSpeed);
                                    idx = 0;
                                    _a.label = 2;
                                case 2:
                                    if (!(idx < pathSteps.length)) return [3 /*break*/, 6];
                                    node = pathSteps[idx];
                                    minTime = timeSteps[idx];
                                    return [4 /*yield*/, sleep_function_1.sleep(minTime)];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, this.native.setMousePosition(node)];
                                case 4:
                                    _a.sent();
                                    _a.label = 5;
                                case 5:
                                    ++idx;
                                    return [3 /*break*/, 2];
                                case 6:
                                    resolve(this);
                                    return [3 /*break*/, 8];
                                case 7:
                                    e_2 = _a.sent();
                                    reject(e_2);
                                    return [3 /*break*/, 8];
                                case 8: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Mouse.prototype.leftClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, sleep_function_1.sleep(this.config.autoDelayMs)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.native.leftClick()];
                                case 2:
                                    _a.sent();
                                    resolve(this);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Mouse.prototype.rightClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var e_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, sleep_function_1.sleep(this.config.autoDelayMs)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.native.rightClick()];
                                case 2:
                                    _a.sent();
                                    resolve(this);
                                    return [3 /*break*/, 4];
                                case 3:
                                    e_3 = _a.sent();
                                    reject(e_3);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Mouse.prototype.scrollDown = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var e_4;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, sleep_function_1.sleep(this.config.autoDelayMs)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.native.scrollDown(amount)];
                                case 2:
                                    _a.sent();
                                    resolve(this);
                                    return [3 /*break*/, 4];
                                case 3:
                                    e_4 = _a.sent();
                                    reject(e_4);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Mouse.prototype.scrollUp = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var e_5;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, sleep_function_1.sleep(this.config.autoDelayMs)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.native.scrollUp(amount)];
                                case 2:
                                    _a.sent();
                                    resolve(this);
                                    return [3 /*break*/, 4];
                                case 3:
                                    e_5 = _a.sent();
                                    reject(e_5);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Mouse.prototype.scrollLeft = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var e_6;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, sleep_function_1.sleep(this.config.autoDelayMs)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.native.scrollLeft(amount)];
                                case 2:
                                    _a.sent();
                                    resolve(this);
                                    return [3 /*break*/, 4];
                                case 3:
                                    e_6 = _a.sent();
                                    reject(e_6);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Mouse.prototype.scrollRight = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var e_7;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 3, , 4]);
                                    return [4 /*yield*/, sleep_function_1.sleep(this.config.autoDelayMs)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.native.scrollRight(amount)];
                                case 2:
                                    _a.sent();
                                    resolve(this);
                                    return [3 /*break*/, 4];
                                case 3:
                                    e_7 = _a.sent();
                                    reject(e_7);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Mouse.prototype.drag = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var e_8;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 5, , 6]);
                                    return [4 /*yield*/, sleep_function_1.sleep(this.config.autoDelayMs)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.native.pressButton(button_enum_1.Button.LEFT)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, this.move(path)];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, this.native.releaseButton(button_enum_1.Button.LEFT)];
                                case 4:
                                    _a.sent();
                                    resolve(this);
                                    return [3 /*break*/, 6];
                                case 5:
                                    e_8 = _a.sent();
                                    reject(e_8);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Mouse.prototype.pressButton = function (btn) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var e_9;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.native.pressButton(btn)];
                                case 1:
                                    _a.sent();
                                    resolve(this);
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_9 = _a.sent();
                                    reject(e_9);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Mouse.prototype.releaseButton = function (btn) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var e_10;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.native.releaseButton(btn)];
                                case 1:
                                    _a.sent();
                                    resolve(this);
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_10 = _a.sent();
                                    reject(e_10);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return Mouse;
}());
exports.Mouse = Mouse;
