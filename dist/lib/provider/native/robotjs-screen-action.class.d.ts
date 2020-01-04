import { Image } from "../../image.class";
import { Region } from "../../region.class";
import { ScreenActionProvider } from "./screen-action-provider.interface";
export declare class ScreenAction implements ScreenActionProvider {
    private static determinePixelDensity;
    constructor();
    grabScreen(): Promise<Image>;
    grabScreenRegion(region: Region): Promise<Image>;
    screenWidth(): Promise<number>;
    screenHeight(): Promise<number>;
    screenSize(): Promise<Region>;
}
