import { Button } from "../../button.enum";
import { Point } from "../../point.class";
/**
 * A MouseActionProvider should provide access to a system's mouse input
 *
 * @interface MouseActionInterface
 */
export interface MouseActionInterface {
    /**
     * setMouseDelay should allow to configure mouse movement speed
     *
     * @param {number} delay The delay
     * @memberof MouseActionInterface
     */
    setMouseDelay(delay: number): void;
    /**
     * setMousePosition should allow to set the mouse cursor position
     *
     * @param {Point} p The point to which the mouse pointer should be set
     * @memberof MouseActionInterface
     */
    setMousePosition(p: Point): Promise<void>;
    /**
     * currentMousePosition should return the current mouse pointer position
     *
     * @returns {Promise<Point>} The current mouse pointer position
     * @memberof MouseActionInterface
     */
    currentMousePosition(): Promise<Point>;
    /**
     * leftClick should allow to perform a left click via OS event
     *
     * @memberof MouseActionInterface
     */
    leftClick(): Promise<void>;
    /**
     * rightClick should allow to perform a right click via OS event
     *
     * @memberof MouseActionInterface
     */
    rightClick(): Promise<void>;
    /**
     * middleClick should allow to perform a middle click via OS event
     *
     * @memberof MouseActionInterface
     */
    middleClick(): Promise<void>;
    /**
     * scrollUp should allow to perform an upward mouse scroll
     *
     * @param {number} amount The scroll amount
     * @memberof MouseActionInterface
     */
    scrollUp(amount: number): Promise<void>;
    /**
     * scrollDown should allow to perform an downward mouse scroll
     *
     * @param {number} amount The scroll amount
     * @memberof MouseActionInterface
     */
    scrollDown(amount: number): Promise<void>;
    /**
     * scrollLeft should allow to perform a left mouse scroll
     *
     * @param {number} amount The scroll amount
     * @memberof MouseActionInterface
     */
    scrollLeft(amount: number): Promise<void>;
    /**
     * scrollRight should perform a right mouse scroll
     *
     * @param {number} amount The scroll amount
     * @memberof MouseActionInterface
     */
    scrollRight(amount: number): Promise<void>;
    /**
     * pressButton should allow to press and hold a mouse button
     *
     * @param {Button} btn The button to press and hold
     * @memberof MouseActionInterface
     */
    pressButton(btn: Button): Promise<void>;
    /**
     * releaseButton should allow to release a pressed button
     *
     * @param {Button} btn The button to release
     * @memberof MouseActionInterface
     */
    releaseButton(btn: Button): Promise<void>;
}
