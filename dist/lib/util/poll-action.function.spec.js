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
var poll_action_function_1 = require("./poll-action.function");
describe("poll-action", function () {
    it("should timeout after maxDuration if action rejects", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updateInterval, maxDuration, action, start, e_1, end;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateInterval = 200;
                    maxDuration = 1000;
                    action = jest.fn(function () {
                        return Promise.reject(false);
                    });
                    start = Date.now();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, poll_action_function_1.timeout(updateInterval, maxDuration, action)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    expect(e_1).toBe("Action timed out after " + maxDuration + " ms");
                    return [3 /*break*/, 4];
                case 4:
                    end = Date.now();
                    // THEN
                    expect((end - start)).toBeGreaterThanOrEqual(maxDuration);
                    expect(action).toBeCalledTimes((maxDuration / updateInterval));
                    return [2 /*return*/];
            }
        });
    }); });
    it("should timeout after maxDuration if action resolve != true", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updateInterval, maxDuration, action, start, e_2, end;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateInterval = 200;
                    maxDuration = 1000;
                    action = jest.fn(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, false];
                        });
                    }); });
                    start = Date.now();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, poll_action_function_1.timeout(updateInterval, maxDuration, action)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    expect(e_2).toEqual("Action timed out after " + maxDuration + " ms");
                    return [3 /*break*/, 4];
                case 4:
                    end = Date.now();
                    // THEN
                    expect((end - start)).toBeGreaterThanOrEqual(maxDuration);
                    expect(action).toBeCalledTimes((maxDuration / updateInterval));
                    return [2 /*return*/];
            }
        });
    }); });
    it("should resolve after updateInterval if action resolves", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updateInterval, maxDuration, action, start, end;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateInterval = 200;
                    maxDuration = 1000;
                    action = jest.fn(function () {
                        return Promise.resolve(true);
                    });
                    start = Date.now();
                    return [4 /*yield*/, poll_action_function_1.timeout(updateInterval, maxDuration, action)];
                case 1:
                    _a.sent();
                    end = Date.now();
                    // THEN
                    expect((end - start)).toBeLessThan(updateInterval);
                    expect(action).toBeCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should resolve after updateInterval if action resolves != true", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updateInterval, maxDuration, action, start, end;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateInterval = 200;
                    maxDuration = 1000;
                    action = jest.fn(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, true];
                        });
                    }); });
                    start = Date.now();
                    return [4 /*yield*/, poll_action_function_1.timeout(updateInterval, maxDuration, action)];
                case 1:
                    _a.sent();
                    end = Date.now();
                    // THEN
                    expect((end - start)).toBeLessThan(updateInterval);
                    expect(action).toBeCalledTimes(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should retry until action succeeds", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updateInterval, maxDuration, delay, start, action, end;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateInterval = 200;
                    maxDuration = 1000;
                    delay = 2.5 * updateInterval;
                    start = Date.now();
                    action = jest.fn(function () {
                        var interval = (Date.now() - start);
                        return new Promise(function (resolve, reject) { return (interval > delay) ? resolve(true) : reject(); });
                    });
                    // WHEN
                    return [4 /*yield*/, poll_action_function_1.timeout(updateInterval, maxDuration, action)];
                case 1:
                    // WHEN
                    _a.sent();
                    end = Date.now();
                    // THEN
                    expect((end - start)).toBeGreaterThanOrEqual(delay);
                    expect(action).toBeCalledTimes(4);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should fail after timeout if timeout < retry interval", function () { return __awaiter(void 0, void 0, void 0, function () {
        var updateInterval, maxDuration, action, start, e_3, end;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateInterval = 1000;
                    maxDuration = 200;
                    action = jest.fn(function () { return Promise.resolve(false); });
                    start = Date.now();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, poll_action_function_1.timeout(updateInterval, maxDuration, action)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    expect(e_3).toEqual("Action timed out after " + maxDuration + " ms");
                    return [3 /*break*/, 4];
                case 4:
                    end = Date.now();
                    // THEN
                    expect(action).toBeCalledTimes(1);
                    expect((end - start)).toBeLessThan(updateInterval);
                    return [2 /*return*/];
            }
        });
    }); });
});
