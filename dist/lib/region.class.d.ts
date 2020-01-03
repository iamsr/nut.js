export declare class Region {
    left: number;
    top: number;
    width: number;
    height: number;
    static scaled(region: Region, scaleX?: number, scaleY?: number): Region;
    constructor(left: number, top: number, width: number, height: number);
    area(): number;
    toString(): string;
}
