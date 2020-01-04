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
var robot = require("libnut");
var button_enum_1 = require("../../button.enum");
var point_class_1 = require("../../point.class");
var robotjs_mouse_action_class_1 = require("./robotjs-mouse-action.class");
jest.mock("libnut");
beforeEach(function () {
    jest.resetAllMocks();
});
describe("robotjs mouse action", function () {
    describe("leftClick", function () {
        it("should forward leftClick call to robotjs", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            // WHEN
            SUT.leftClick();
            // THEN
            expect(robot.mouseClick).toBeCalledTimes(1);
            expect(robot.mouseClick).toBeCalledWith("left");
        });
        it("should reject on robotjs errors", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var error = "Test error";
            robot.mouseClick = jest.fn(function () {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.leftClick()).rejects.toThrowError(error);
        });
    });
    describe("middleClick", function () {
        it("should forward middleClick call to robotjs", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            // WHEN
            SUT.middleClick();
            // THEN
            expect(robot.mouseClick).toBeCalledTimes(1);
            expect(robot.mouseClick).toBeCalledWith("middle");
        });
        it("should reject on robotjs errors", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var error = "Test error";
            robot.mouseClick = jest.fn(function () {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.middleClick()).rejects.toThrowError(error);
        });
    });
    describe("rightClick", function () {
        it("should forward rightClick call to robotjs", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            // WHEN
            SUT.rightClick();
            // THEN
            expect(robot.mouseClick).toBeCalledTimes(1);
            expect(robot.mouseClick).toBeCalledWith("right");
        });
        it("should reject on robotjs errors", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var error = "Test error";
            robot.mouseClick = jest.fn(function () {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.rightClick()).rejects.toThrowError(error);
        });
    });
    describe("pressButton", function () {
        it("should forward pressButton call to robotjs with state 'down'", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            // WHEN
            SUT.pressButton(button_enum_1.Button.LEFT);
            // THEN
            expect(robot.mouseToggle).toBeCalledTimes(1);
            expect(robot.mouseToggle).toBeCalledWith("down", expect.any(String));
        });
        it("should reject on robotjs errors", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var error = "Test error";
            robot.mouseToggle = jest.fn(function () {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.pressButton(button_enum_1.Button.LEFT)).rejects.toThrowError(error);
        });
    });
    describe("releaseButton", function () {
        it("should forward pressButton call to robotjs with state 'up'", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            // WHEN
            SUT.releaseButton(button_enum_1.Button.LEFT);
            // THEN
            expect(robot.mouseToggle).toBeCalledTimes(1);
            expect(robot.mouseToggle).toBeCalledWith("up", expect.any(String));
        });
        it("should reject on robotjs errors", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var error = "Test error";
            robot.mouseToggle = jest.fn(function () {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.releaseButton(button_enum_1.Button.LEFT)).rejects.toThrowError(error);
        });
    });
    describe("scrollUp", function () {
        it("should forward scrollUp call to robotjs with positive y value", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var scrollAmount = 5;
            // WHEN
            SUT.scrollUp(scrollAmount);
            // THEN
            expect(robot.scrollMouse).toBeCalledTimes(1);
            expect(robot.scrollMouse).toBeCalledWith(0, scrollAmount);
        });
        it("should reject on robotjs errors", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var error = "Test error";
            robot.scrollMouse = jest.fn(function () {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.scrollUp(100)).rejects.toThrowError(error);
        });
    });
    describe("scrollDown", function () {
        it("should forward scrollDown call to robotjs with negative y value", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var scrollAmount = 5;
            // WHEN
            SUT.scrollDown(scrollAmount);
            // THEN
            expect(robot.scrollMouse).toBeCalledTimes(1);
            expect(robot.scrollMouse).toBeCalledWith(0, -scrollAmount);
        });
        it("should reject on robotjs errors", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var error = "Test error";
            robot.scrollMouse = jest.fn(function () {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.scrollDown(100)).rejects.toThrowError(error);
        });
    });
    describe("scrollLeft", function () {
        it("should forward scrollLeft call to robotjs with negative x value", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var scrollAmount = 5;
            // WHEN
            SUT.scrollLeft(scrollAmount);
            // THEN
            expect(robot.scrollMouse).toBeCalledTimes(1);
            expect(robot.scrollMouse).toBeCalledWith(-scrollAmount, 0);
        });
        it("should reject on robotjs errors", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var error = "Test error";
            robot.scrollMouse = jest.fn(function () {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.scrollLeft(100)).rejects.toThrowError(error);
        });
    });
    describe("scrollRight", function () {
        it("should forward scrollRight call to robotjs with negative x value", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var scrollAmount = 5;
            // WHEN
            SUT.scrollRight(scrollAmount);
            // THEN
            expect(robot.scrollMouse).toBeCalledTimes(1);
            expect(robot.scrollMouse).toBeCalledWith(scrollAmount, 0);
        });
        it("should reject on robotjs errors", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var error = "Test error";
            robot.scrollMouse = jest.fn(function () {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.scrollRight(100)).rejects.toThrowError(error);
        });
    });
    describe("currentMousePosition", function () {
        it("should return the current mouse position via robotjs", function () { return __awaiter(void 0, void 0, void 0, function () {
            var SUT, currentPosition;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // GIVEN
                        robot.getMousePos = jest.fn(function () { return ({ x: 10, y: 100 }); });
                        SUT = new robotjs_mouse_action_class_1.MouseAction();
                        return [4 /*yield*/, SUT.currentMousePosition()];
                    case 1:
                        currentPosition = _a.sent();
                        // THEN
                        expect(currentPosition.x).toEqual(10);
                        expect(currentPosition.y).toEqual(100);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should reject on robotjs errors", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var error = "Test error";
            robot.getMousePos = jest.fn(function () {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.currentMousePosition()).rejects.toThrowError(error);
        });
    });
    describe("setMousePosition", function () {
        it("should set the current mouse position via robotjs", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            // WHEN
            SUT.setMousePosition(new point_class_1.Point(10, 100));
            // THEN
            expect(robot.moveMouse).toBeCalledTimes(1);
            expect(robot.moveMouse).toBeCalledWith(10, 100);
        });
        it("should reject on robotjs errors", function () {
            // GIVEN
            var SUT = new robotjs_mouse_action_class_1.MouseAction();
            var error = "Test error";
            robot.moveMouse = jest.fn(function () {
                throw new Error(error);
            });
            // WHEN
            // THEN
            expect(SUT.setMousePosition(new point_class_1.Point(100, 100))).rejects.toThrowError(error);
        });
    });
});
