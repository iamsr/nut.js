import { Point } from "../point.class";
import { Region } from "../region.class";
declare global {
    namespace jest {
        interface Matchers<R, T> {
            toBeAt: (position: Point) => {};
            toBeIn: (region: Region) => {};
            toShow: (needle: string, confidence?: number) => {};
        }
    }
}
export declare const jestMatchers: {
    toBeAt: (received: import("../mouse.class").Mouse, position: Point) => Promise<{
        message: () => string;
        pass: boolean;
    }>;
    toBeIn: (received: import("../mouse.class").Mouse, region: Region) => Promise<{
        message: () => string;
        pass: boolean;
    }>;
    toShow: (received: import("../screen.class").Screen, needle: string, confidence?: number | undefined) => Promise<{
        message: () => string;
        pass: boolean;
    }>;
};
