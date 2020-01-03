import { Key } from "../../key.enum";
/**
 * A KeyboardActionProvider should provide access to a system's keyboard
 *
 * @interface KeyboardActionProvider
 */
export interface KeyboardActionProvider {
    /**
     * setKeyboardDelay should allow to configure a delay between key presses
     *
     * @param {number} delay The delay
     * @memberof KeybaordActionProvider
     */
    setKeyboardDelay(delay: number): void;
    /**
     * type should allow to type a given text via OS level keyboard events
     *
     * @param {string} input The text to type
     * @memberof KeyboardActionProvider
     */
    type(input: string): Promise<void>;
    /**
     * Click should allow to press a single key via OS level keyboard event
     *
     * @param {Key[]} keys The keys to click
     * @memberof KeyboardActionProvider
     */
    click(...keys: Key[]): Promise<void>;
    /**
     * pressKey should allow to press and hold a key via OS level keyboard event
     *
     * @param {Key[]} keys to press and hold
     * @memberof KeyboardActionProvider
     */
    pressKey(...keys: Key[]): Promise<void>;
    /**
     * releaseKey should release a pressed key via OS level keyboard event
     *
     * @param {Key[]} keys to release
     * @memberof KeyboardActionProvider
     */
    releaseKey(...keys: Key[]): Promise<void>;
}
