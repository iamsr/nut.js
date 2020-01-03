import { Region } from "./region.class";
export declare class MatchResult {
    readonly confidence: number;
    readonly location: Region;
    constructor(confidence: number, location: Region);
}
