import { Image } from "../image.class";
import { MatchRequest } from "../match-request.class";
import { MatchResult } from "../match-result.class";
import { ScreenActionProvider } from "../provider/native/screen-action-provider.interface";
import { DataSink } from "../provider/opencv/data-sink.interface";
import { FinderInterface } from "../provider/opencv/finder.interface";
import { Region } from "../region.class";
/**
 * OpenCVAdapter serves as an abstraction layer for all image based interactions.
 *
 * This allows to provide a high level interface for image based actions,
 * whithout having to spread (possibly) multiple dependencies all over the code.
 * All actions which involve screenshots / images are bundled in this adapter.
 */
export declare class VisionAdapter {
    private finder;
    private screen;
    private dataSink;
    constructor(finder?: FinderInterface, screen?: ScreenActionProvider, dataSink?: DataSink);
    /**
     * grabScreen will return an Image containing the current screen image
     *
     * @returns {Promise<Image>} Image will contain screenshot data as well as dimensions
     * @memberof VisionAdapter
     */
    grabScreen(): Promise<Image>;
    /**
     * grabScreenRegion essentially does the same as grabScreen, but only returns a specified Region
     *
     * @param {Region} region The screen region we want to grab
     * @returns {Promise<Image>} Image will contain screenshot data of the specified region as well as dimensions
     * @memberof VisionAdapter
     */
    grabScreenRegion(region: Region): Promise<Image>;
    /**
     * findOnScreenRegion will search for a given pattern inside a region of an image.
     * If multiple possible occurences are found, the one with the highes probability is returned.
     * For matchProbability < 0.99 the search will be performed on grayscale images.
     *
     * @param {MatchRequest} matchRequest A match request which holds all required matching data
     * @returns {Promise<MatchResult>} MatchResult will contain location and probability of a possible match
     * @memberof VisionAdapter
     */
    findOnScreenRegion(matchRequest: MatchRequest): Promise<MatchResult>;
    /**
     * screenWidth returns the main screen's width as reported by the OS.
     * Please notice that on e.g. Apples Retina display the reported width
     * and the actual pixel size may differ
     *
     * @returns {Promise<number>} The main screen's width as reported by the OS
     * @memberof VisionAdapter
     */
    screenWidth(): Promise<number>;
    /**
     * screenHeight returns the main screen's height as reported by the OS.
     * Please notice that on e.g. Apples Retina display the reported width
     * and the actual pixel size may differ
     *
     * @returns {Promise<number>} The main screen's height as reported by the OS
     * @memberof VisionAdapter
     */
    screenHeight(): Promise<number>;
    /**
     * screenSize returns a Region object with the main screen's size.
     * Please notice that on e.g. Apples Retina display the reported width
     * and the actual pixel size may differ
     *
     * @returns {Promise<Region>} The Region object the size of your main screen
     * @memberof VisionAdapter
     */
    screenSize(): Promise<Region>;
    /**
     * saveImage saves an Image to a given path on disk.
     *
     * @param image The Image to store
     * @param path The storage path
     * @memberof VisionAdapter
     */
    saveImage(image: Image, path: string): Promise<void>;
}
