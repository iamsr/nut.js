import { Region } from "./region.class";
export declare class LocationParameters {
    searchRegion?: Region | undefined;
    confidence?: number | undefined;
    constructor(searchRegion?: Region | undefined, confidence?: number | undefined);
}
