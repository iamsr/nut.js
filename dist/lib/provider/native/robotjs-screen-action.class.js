"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var robot = require("../../../libnut");
var image_class_1 = require("../../image.class");
var region_class_1 = require("../../region.class");
var ScreenAction = /** @class */ (function () {
    function ScreenAction() {
    }
    ScreenAction.determinePixelDensity = function (screen, screenShot) {
        return {
            scaleX: screenShot.width / screen.width,
            scaleY: screenShot.height / screen.height,
        };
    };
    ScreenAction.prototype.grabScreen = function () {
        return new Promise(function (resolve, reject) {
            var screenShot = robot.screen.capture();
            if (screenShot) {
                var screenSize = robot.getScreenSize();
                var pixelScaling = ScreenAction.determinePixelDensity(new region_class_1.Region(0, 0, screenSize.width, screenSize.height), screenShot);
                resolve(new image_class_1.Image(screenShot.width, screenShot.height, screenShot.image, 4, pixelScaling));
            }
            else {
                reject("Unable to fetch screen content.");
            }
        });
    };
    ScreenAction.prototype.grabScreenRegion = function (region) {
        return new Promise(function (resolve, reject) {
            var screenShot = robot.screen.capture(region.left, region.top, region.width, region.height);
            if (screenShot) {
                var pixelScaling = ScreenAction.determinePixelDensity(region, screenShot);
                resolve(new image_class_1.Image(screenShot.width, screenShot.height, screenShot.image, 4, pixelScaling));
            }
            else {
                reject("Unable to fetch screen content.");
            }
        });
    };
    ScreenAction.prototype.screenWidth = function () {
        return new Promise(function (resolve, reject) {
            try {
                var size = robot.getScreenSize();
                resolve(size.width);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    ScreenAction.prototype.screenHeight = function () {
        return new Promise(function (resolve, reject) {
            try {
                var size = robot.getScreenSize();
                resolve(size.height);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    ScreenAction.prototype.screenSize = function () {
        return new Promise(function (resolve, reject) {
            try {
                var screenSize = robot.getScreenSize();
                resolve(new region_class_1.Region(0, 0, screenSize.width, screenSize.height));
            }
            catch (e) {
                reject(e);
            }
        });
    };
    return ScreenAction;
}());
exports.ScreenAction = ScreenAction;
