import { Image } from "../image.class";
import { MatchRequest } from "../match-request.class";
import { MatchResult } from "../match-result.class";
import { Point } from "../point.class";
import { ScreenAction } from "../provider/native/robotjs-screen-action.class";
import { ScreenActionProvider } from "../provider/native/screen-action-provider.interface";
import { DataSink } from "../provider/opencv/data-sink.interface";
import { FinderInterface } from "../provider/opencv/finder.interface";
import { highlight } from "../provider/opencv/highlight.function";
import { ImageWriter } from "../provider/opencv/image-writer.class";
import { TemplateMatchingFinder } from "../provider/opencv/template-matching-finder.class";
import { Region } from "../region.class";

/**
 * OpenCVAdapter serves as an abstraction layer for all image based interactions.
 *
 * This allows to provide a high level interface for image based actions,
 * whithout having to spread (possibly) multiple dependencies all over the code.
 * All actions which involve screenshots / images are bundled in this adapter.
 */
export class VisionAdapter {

  /**
   * highlight highlights a region on a screen
   *
   * @param target Region or Point to highlight
   * @memberof VisionAdapter
   */
  public static highlight(target: Region | Point): Promise<void> {
    return new Promise<void>(async resolve => {
      await highlight(target);
      resolve();
    });
  }

  constructor(
    private finder: FinderInterface = new TemplateMatchingFinder(),
    private screen: ScreenActionProvider = new ScreenAction(),
    private dataSink: DataSink = new ImageWriter()
  ) {
  }

  /**
   * grabScreen will return an Image containing the current screen image
   *
   * @returns {Promise<Image>} Image will contain screenshot data as well as dimensions
   * @memberof VisionAdapter
   */
  public grabScreen(): Promise<Image> {
    return this.screen.grabScreen();
  }

  /**
   * grabScreenRegion essentially does the same as grabScreen, but only returns a specified Region
   *
   * @param {Region} region The screen region we want to grab
   * @returns {Promise<Image>} Image will contain screenshot data of the specified region as well as dimensions
   * @memberof VisionAdapter
   */
  public grabScreenRegion(region: Region): Promise<Image> {
    return this.screen.grabScreenRegion(region);
  }

  /**
   * findOnScreenRegion will search for a given pattern inside a region of an image.
   * If multiple possible occurences are found, the one with the highes probability is returned.
   * For matchProbability < 0.99 the search will be performed on grayscale images.
   *
   * @param {MatchRequest} matchRequest A match request which holds all required matching data
   * @returns {Promise<MatchResult>} MatchResult will contain location and probability of a possible match
   * @memberof VisionAdapter
   */
  public async findOnScreenRegion(
    matchRequest: MatchRequest,
  ): Promise<MatchResult> {
    const matchResult = await this.finder.findMatch(matchRequest);
    return Promise.resolve(matchResult);
  }

  /**
   * screenWidth returns the main screen's width as reported by the OS.
   * Please notice that on e.g. Apples Retina display the reported width
   * and the actual pixel size may differ
   *
   * @returns {Promise<number>} The main screen's width as reported by the OS
   * @memberof VisionAdapter
   */
  public screenWidth(): Promise<number> {
    return this.screen.screenWidth();
  }

  /**
   * screenHeight returns the main screen's height as reported by the OS.
   * Please notice that on e.g. Apples Retina display the reported width
   * and the actual pixel size may differ
   *
   * @returns {Promise<number>} The main screen's height as reported by the OS
   * @memberof VisionAdapter
   */
  public screenHeight(): Promise<number> {
    return this.screen.screenHeight();
  }

  /**
   * screenSize returns a Region object with the main screen's size.
   * Please notice that on e.g. Apples Retina display the reported width
   * and the actual pixel size may differ
   *
   * @returns {Promise<Region>} The Region object the size of your main screen
   * @memberof VisionAdapter
   */
  public screenSize(): Promise<Region> {
    return this.screen.screenSize();
  }

  /**
   * saveImage saves an Image to a given path on disk.
   *
   * @param image The Image to store
   * @param path The storage path
   * @memberof VisionAdapter
   */
  public saveImage(image: Image, path: string): Promise<void> {
    return new Promise<void>(resolve => {
      (this.dataSink as ImageWriter).store(image, path);
      resolve();
    });
  }
}
