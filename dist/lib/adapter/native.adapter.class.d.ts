import { Button } from "../button.enum";
import { Key } from "../key.enum";
import { Point } from "../point.class";
import { ClipboardActionProvider } from "../provider/native/clipboard-action-provider.interface";
import { KeyboardActionProvider } from "../provider/native/keyboard-action-provider.interface";
import { MouseActionInterface } from "../provider/native/mouse-action-provider.interface";
/**
 * NativeAdapter serves as an abstraction layer for all OS level interactions.
 *
 * This allows to provide a high level interface for native actions,
 * whithout having to spread (possibly) multiple dependencies all over the code.
 * All actions which involve the OS are bundled in this adapter.
 */
export declare class NativeAdapter {
    private clipboard;
    private keyboard;
    private mouse;
    constructor(clipboard?: ClipboardActionProvider, keyboard?: KeyboardActionProvider, mouse?: MouseActionInterface);
    /**
     * setMouseDelay configures mouse speed for movement
     *
     * @param {number} delay The delay
     * @memberof NativeAdapter
     */
    setMouseDelay(delay: number): void;
    /**
     * setKeyboardDelay configures keyboard delay between key presses
     *
     * @param {number} delay The delay
     * @memberof NativeAdapter
     */
    setKeyboardDelay(delay: number): void;
    /**
     * setMousePosition changes the current mouse cursor position to a given point
     *
     * @param {Point} p The new cursor position
     * @memberof NativeAdapter
     */
    setMousePosition(p: Point): Promise<void>;
    /**
     * getMousePosition returns the current mouse position
     *
     * @returns {Promise<Point>} Current cursor position
     * @memberof NativeAdapter
     */
    currentMousePosition(): Promise<Point>;
    /**
     * leftClick triggers a native left-click event via OS API
     *
     * @memberof NativeAdapter
     */
    leftClick(): Promise<void>;
    /**
     * rightClick triggers a native right-click event via OS API
     *
     * @memberof NativeAdapter
     */
    rightClick(): Promise<void>;
    /**
     * middleClick triggers a native middle-click event via OS API
     */
    middleClick(): Promise<void>;
    /**
     * pressButton presses and holds a mouse button
     *
     * @param {Button} btn The mouse button to press
     * @memberof NativeAdapter
     */
    pressButton(btn: Button): Promise<void>;
    /**
     * releaseButton releases a mouse button previously clicked via pressButton
     *
     * @param {Button} btn The mouse button to release
     * @memberof NativeAdapter
     */
    releaseButton(btn: Button): Promise<void>;
    /**
     * type types a given string via native keyboard events
     *
     * @param {string} input The text to type
     * @memberof NativeAdapter
     */
    type(input: string): Promise<void>;
    /**
     * click clicks a single Key via native keyboard event
     *
     * @param {Key[]} keys The keys to click
     * @memberof NativeAdapter
     */
    click(...keys: Key[]): Promise<void>;
    /**
     * pressKey presses and holds a given Key
     *
     * @param {Key[]} keys The Keys to press and hold
     * @memberof NativeAdapter
     */
    pressKey(...keys: Key[]): Promise<void>;
    /**
     * releaseKey releases a Key previously presses via pressKey
     *
     * @param {Key[]} keys The Keys to release
     * @memberof NativeAdapter
     */
    releaseKey(...keys: Key[]): Promise<void>;
    /**
     * scrollUp triggers an upwards mouse wheel scroll
     *
     * @param {number} amount The amount of 'ticks' to scroll
     * @memberof NativeAdapter
     */
    scrollUp(amount: number): Promise<void>;
    /**
     * scrollDown triggers a downward mouse wheel scroll
     *
     * @param {number} amount The amount of 'ticks' to scroll
     * @memberof NativeAdapter
     */
    scrollDown(amount: number): Promise<void>;
    /**
     * scrollLeft triggers a left mouse scroll
     *
     * @param {number} amount The amount of 'ticks' to scroll
     * @memberof NativeAdapter
     */
    scrollLeft(amount: number): Promise<void>;
    /**
     * scrollRight triggers a right mouse scroll
     *
     * @param {number} amount The amount of 'ticks' to scroll
     * @memberof NativeAdapter
     */
    scrollRight(amount: number): Promise<void>;
    /**
     * copy copies a given text to the system clipboard
     *
     * @param {string} text The text to copy
     * @memberof NativeAdapter
     */
    copy(text: string): Promise<void>;
    /**
     * paste pastes the current text on the system clipboard
     *
     * @returns {Promise<string>} The clipboard text
     * @memberof NativeAdapter
     */
    paste(): Promise<string>;
}
