"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var robot = require("libnut");
var button_enum_1 = require("../../button.enum");
var point_class_1 = require("../../point.class");
var MouseAction = /** @class */ (function () {
    function MouseAction() {
    }
    MouseAction.buttonLookup = function (btn) {
        return this.ButtonLookupMap.get(btn);
    };
    MouseAction.prototype.setMouseDelay = function (delay) {
        robot.setMouseDelay(delay);
    };
    MouseAction.prototype.setMousePosition = function (p) {
        return new Promise((function (resolve, reject) {
            try {
                robot.moveMouse(p.x, p.y);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        }));
    };
    MouseAction.prototype.currentMousePosition = function () {
        return new Promise((function (resolve, reject) {
            try {
                var position = robot.getMousePos();
                resolve(new point_class_1.Point(position.x, position.y));
            }
            catch (e) {
                reject(e);
            }
        }));
    };
    MouseAction.prototype.leftClick = function () {
        return new Promise((function (resolve, reject) {
            try {
                robot.mouseClick(MouseAction.buttonLookup(button_enum_1.Button.LEFT));
                resolve();
            }
            catch (e) {
                reject(e);
            }
        }));
    };
    MouseAction.prototype.rightClick = function () {
        return new Promise((function (resolve, reject) {
            try {
                robot.mouseClick(MouseAction.buttonLookup(button_enum_1.Button.RIGHT));
                resolve();
            }
            catch (e) {
                reject(e);
            }
        }));
    };
    MouseAction.prototype.middleClick = function () {
        return new Promise((function (resolve, reject) {
            try {
                robot.mouseClick(MouseAction.buttonLookup(button_enum_1.Button.MIDDLE));
                resolve();
            }
            catch (e) {
                reject(e);
            }
        }));
    };
    MouseAction.prototype.pressButton = function (btn) {
        return new Promise((function (resolve, reject) {
            try {
                robot.mouseToggle("down", MouseAction.buttonLookup(btn));
                resolve();
            }
            catch (e) {
                reject(e);
            }
        }));
    };
    MouseAction.prototype.releaseButton = function (btn) {
        return new Promise((function (resolve, reject) {
            try {
                robot.mouseToggle("up", MouseAction.buttonLookup(btn));
                resolve();
            }
            catch (e) {
                reject(e);
            }
        }));
    };
    MouseAction.prototype.scrollUp = function (amount) {
        return new Promise((function (resolve, reject) {
            try {
                robot.scrollMouse(0, amount);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        }));
    };
    MouseAction.prototype.scrollDown = function (amount) {
        return new Promise((function (resolve, reject) {
            try {
                robot.scrollMouse(0, -amount);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        }));
    };
    MouseAction.prototype.scrollLeft = function (amount) {
        return new Promise((function (resolve, reject) {
            try {
                robot.scrollMouse(-amount, 0);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        }));
    };
    MouseAction.prototype.scrollRight = function (amount) {
        return new Promise((function (resolve, reject) {
            try {
                robot.scrollMouse(amount, 0);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        }));
    };
    MouseAction.ButtonLookupMap = new Map([[button_enum_1.Button.LEFT, "left"], [button_enum_1.Button.MIDDLE, "middle"], [button_enum_1.Button.RIGHT, "right"]]);
    return MouseAction;
}());
exports.MouseAction = MouseAction;
