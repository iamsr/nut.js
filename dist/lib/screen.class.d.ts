import { VisionAdapter } from "./adapter/vision.adapter.class";
import { FileType } from "./file-type.enum";
import { LocationParameters } from "./locationparameters.class";
import { MatchResult } from "./match-result.class";
import { Region } from "./region.class";
export declare type FindHookCallback = (target: MatchResult) => Promise<void>;
export declare class Screen {
    private vision;
    private findHooks;
    config: {
        confidence: number;
        resourceDirectory: string;
    };
    constructor(vision: VisionAdapter, findHooks?: Map<string, FindHookCallback[]>);
    width(): Promise<number>;
    height(): Promise<number>;
    find(pathToNeedle: string, params?: LocationParameters): Promise<Region>;
    waitFor(pathToNeedle: string, timeoutMs?: number, params?: LocationParameters): Promise<Region>;
    on(pathToNeedle: string, callback: FindHookCallback): void;
    capture(fileName: string, fileFormat?: FileType, filePath?: string, fileNamePrefix?: string, fileNamePostfix?: string): Promise<string>;
}
