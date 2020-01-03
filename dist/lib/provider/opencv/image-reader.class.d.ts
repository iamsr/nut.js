import { Image } from "../../image.class";
import { DataSource } from "./data-source.interface";
export declare class ImageReader implements DataSource {
    load(path: string): Promise<Image>;
}
