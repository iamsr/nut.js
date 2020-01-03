export declare class Image {
    readonly width: number;
    readonly height: number;
    readonly data: any;
    readonly channels: number;
    readonly pixelDensity: {
        scaleX: number;
        scaleY: number;
    };
    constructor(width: number, height: number, data: any, channels: number, pixelDensity?: {
        scaleX: number;
        scaleY: number;
    });
    get hasAlphaChannel(): boolean;
}
