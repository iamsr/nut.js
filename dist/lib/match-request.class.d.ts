import { Image } from "./image.class";
import { Region } from "./region.class";
export declare class MatchRequest {
    readonly haystack: Image;
    readonly pathToNeedle: string;
    readonly searchRegion: Region;
    readonly confidence: number;
    readonly searchMultipleScales: boolean;
    constructor(haystack: Image, pathToNeedle: string, searchRegion: Region, confidence: number, searchMultipleScales?: boolean);
}
