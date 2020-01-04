import { Mouse } from "../../mouse.class";
import { Point } from "../../point.class";
export declare const toBeAt: (received: Mouse, position: Point) => Promise<{
    message: () => string;
    pass: boolean;
}>;
