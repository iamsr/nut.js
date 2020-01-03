import { NativeAdapter } from "./adapter/native.adapter.class";
import { Button } from "./button.enum";
import { Point } from "./point.class";
export declare class Mouse {
    private native;
    config: {
        autoDelayMs: number;
        mouseSpeed: number;
    };
    constructor(native: NativeAdapter);
    setPosition(target: Point): Promise<Mouse>;
    getPosition(): Promise<Point>;
    move(path: Point[] | Promise<Point[]>, movementType?: (amountOfSteps: number, speedInPixelsPerSecond: number) => number[]): Promise<Mouse>;
    leftClick(): Promise<Mouse>;
    rightClick(): Promise<Mouse>;
    scrollDown(amount: number): Promise<Mouse>;
    scrollUp(amount: number): Promise<Mouse>;
    scrollLeft(amount: number): Promise<Mouse>;
    scrollRight(amount: number): Promise<Mouse>;
    drag(path: Point[] | Promise<Point[]>): Promise<Mouse>;
    pressButton(btn: Button): Promise<Mouse>;
    releaseButton(btn: Button): Promise<Mouse>;
}
