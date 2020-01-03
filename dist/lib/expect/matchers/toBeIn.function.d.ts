import { Mouse } from "../../mouse.class";
import { Region } from "../../region.class";
export declare const toBeIn: (received: Mouse, region: Region) => Promise<{
    message: () => string;
    pass: boolean;
}>;
