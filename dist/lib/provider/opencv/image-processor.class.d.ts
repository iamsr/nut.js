import * as cv from "opencv4nodejs";
import { Image } from "../../image.class";
import { Region } from "../../region.class";
export declare class ImageProcessor {
    /**
     * fromImageWithAlphaChannel should provide a way to create a library specific
     * image with alpha channel from an abstract Image object holding raw data and image dimension
     *
     * @param {Image} img The input Image
     * @param {Region} [roi] An optional Region to specify a ROI
     * @returns {Promise<any>} An image
     * @memberof VisionProviderInterface
     */
    static fromImageWithAlphaChannel(img: Image, roi?: Region): Promise<cv.Mat>;
    /**
     * fromImageWithoutAlphaChannel should provide a way to create a library specific
     * image without alpha channel from an abstract Image object holding raw data and image dimension
     *
     * @param {Image} img The input Image
     * @param {Region} [roi] An optional Region to specify a ROI
     * @returns {Promise<any>} An image
     * @memberof VisionProviderInterface
     */
    static fromImageWithoutAlphaChannel(img: Image, roi?: Region): Promise<cv.Mat>;
}
