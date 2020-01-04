"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clipboardy_clipboard_action_class_1 = require("../provider/native/clipboardy-clipboard-action.class");
var robotjs_keyboard_action_class_1 = require("../provider/native/robotjs-keyboard-action.class");
var robotjs_mouse_action_class_1 = require("../provider/native/robotjs-mouse-action.class");
/**
 * NativeAdapter serves as an abstraction layer for all OS level interactions.
 *
 * This allows to provide a high level interface for native actions,
 * whithout having to spread (possibly) multiple dependencies all over the code.
 * All actions which involve the OS are bundled in this adapter.
 */
var NativeAdapter = /** @class */ (function () {
    function NativeAdapter(clipboard, keyboard, mouse) {
        if (clipboard === void 0) { clipboard = new clipboardy_clipboard_action_class_1.ClipboardAction(); }
        if (keyboard === void 0) { keyboard = new robotjs_keyboard_action_class_1.KeyboardAction(); }
        if (mouse === void 0) { mouse = new robotjs_mouse_action_class_1.MouseAction(); }
        this.clipboard = clipboard;
        this.keyboard = keyboard;
        this.mouse = mouse;
    }
    /**
     * setMouseDelay configures mouse speed for movement
     *
     * @param {number} delay The delay
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.setMouseDelay = function (delay) {
        this.mouse.setMouseDelay(delay);
    };
    /**
     * setKeyboardDelay configures keyboard delay between key presses
     *
     * @param {number} delay The delay
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.setKeyboardDelay = function (delay) {
        this.keyboard.setKeyboardDelay(delay);
    };
    /**
     * setMousePosition changes the current mouse cursor position to a given point
     *
     * @param {Point} p The new cursor position
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.setMousePosition = function (p) {
        return this.mouse.setMousePosition(p);
    };
    /**
     * getMousePosition returns the current mouse position
     *
     * @returns {Promise<Point>} Current cursor position
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.currentMousePosition = function () {
        return this.mouse.currentMousePosition();
    };
    /**
     * leftClick triggers a native left-click event via OS API
     *
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.leftClick = function () {
        return this.mouse.leftClick();
    };
    /**
     * rightClick triggers a native right-click event via OS API
     *
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.rightClick = function () {
        return this.mouse.rightClick();
    };
    /**
     * middleClick triggers a native middle-click event via OS API
     */
    NativeAdapter.prototype.middleClick = function () {
        return this.mouse.middleClick();
    };
    /**
     * pressButton presses and holds a mouse button
     *
     * @param {Button} btn The mouse button to press
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.pressButton = function (btn) {
        return this.mouse.pressButton(btn);
    };
    /**
     * releaseButton releases a mouse button previously clicked via pressButton
     *
     * @param {Button} btn The mouse button to release
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.releaseButton = function (btn) {
        return this.mouse.releaseButton(btn);
    };
    /**
     * type types a given string via native keyboard events
     *
     * @param {string} input The text to type
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.type = function (input) {
        return this.keyboard.type(input);
    };
    /**
     * click clicks a single Key via native keyboard event
     *
     * @param {Key[]} keys The keys to click
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.click = function () {
        var _a;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return (_a = this.keyboard).click.apply(_a, keys);
    };
    /**
     * pressKey presses and holds a given Key
     *
     * @param {Key[]} keys The Keys to press and hold
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.pressKey = function () {
        var _a;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return (_a = this.keyboard).pressKey.apply(_a, keys);
    };
    /**
     * releaseKey releases a Key previously presses via pressKey
     *
     * @param {Key[]} keys The Keys to release
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.releaseKey = function () {
        var _a;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        return (_a = this.keyboard).releaseKey.apply(_a, keys);
    };
    /**
     * scrollUp triggers an upwards mouse wheel scroll
     *
     * @param {number} amount The amount of 'ticks' to scroll
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.scrollUp = function (amount) {
        return this.mouse.scrollUp(amount);
    };
    /**
     * scrollDown triggers a downward mouse wheel scroll
     *
     * @param {number} amount The amount of 'ticks' to scroll
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.scrollDown = function (amount) {
        return this.mouse.scrollDown(amount);
    };
    /**
     * scrollLeft triggers a left mouse scroll
     *
     * @param {number} amount The amount of 'ticks' to scroll
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.scrollLeft = function (amount) {
        return this.mouse.scrollLeft(amount);
    };
    /**
     * scrollRight triggers a right mouse scroll
     *
     * @param {number} amount The amount of 'ticks' to scroll
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.scrollRight = function (amount) {
        return this.mouse.scrollRight(amount);
    };
    /**
     * copy copies a given text to the system clipboard
     *
     * @param {string} text The text to copy
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.copy = function (text) {
        return this.clipboard.copy(text);
    };
    /**
     * paste pastes the current text on the system clipboard
     *
     * @returns {Promise<string>} The clipboard text
     * @memberof NativeAdapter
     */
    NativeAdapter.prototype.paste = function () {
        return this.clipboard.paste();
    };
    return NativeAdapter;
}());
exports.NativeAdapter = NativeAdapter;
