import { Image } from "../../image.class";
import { DataSink } from "./data-sink.interface";
export declare class ImageWriter implements DataSink {
    store(data: Image, path: string): Promise<void>;
}
