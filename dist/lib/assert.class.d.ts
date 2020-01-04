import { Region } from "./region.class";
import { Screen } from "./screen.class";
export declare class Assert {
    private screen;
    constructor(screen: Screen);
    isVisible(pathToNeedle: string, searchRegion?: Region, confidence?: number): Promise<void>;
    notVisible(pathToNeedle: string, searchRegion?: Region, confidence?: number): Promise<void>;
}
