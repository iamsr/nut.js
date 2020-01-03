import robot = require("../../../native/libnut");
import { Image } from "../../image.class";
import { Region } from "../../region.class";
import { ScreenActionProvider } from "./screen-action-provider.interface";

export class ScreenAction implements ScreenActionProvider {

  private static determinePixelDensity(
    screen: Region,
    screenShot: robot.Bitmap,
  ): { scaleX: number; scaleY: number } {
    return {
      scaleX: screenShot.width / screen.width,
      scaleY: screenShot.height / screen.height,
    };
  }

  constructor() {
  }

  public grabScreen(): Promise<Image> {
    return new Promise((resolve, reject) => {
      const screenShot = robot.screen.capture();
      if (screenShot) {
        const screenSize = robot.getScreenSize();
        const pixelScaling = ScreenAction.determinePixelDensity(
          new Region(0, 0, screenSize.width, screenSize.height),
          screenShot,
        );
        resolve(
          new Image(
            screenShot.width,
            screenShot.height,
            screenShot.image,
            4,
            pixelScaling,
          ),
        );
      } else {
        reject("Unable to fetch screen content.");
      }
    });
  }

  public grabScreenRegion(region: Region): Promise<Image> {
    return new Promise((resolve, reject) => {
      const screenShot = robot.screen.capture(
        region.left,
        region.top,
        region.width,
        region.height,
      );
      if (screenShot) {
        const pixelScaling = ScreenAction.determinePixelDensity(region, screenShot);
        resolve(
          new Image(
            screenShot.width,
            screenShot.height,
            screenShot.image,
            4,
            pixelScaling,
          ),
        );
      } else {
        reject("Unable to fetch screen content.");
      }
    });
  }

  public screenWidth(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      try {
        const size = robot.getScreenSize();
        resolve(size.width);
      } catch (e) {
        reject(e);
      }
    });
  }

  public screenHeight(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      try {
        const size = robot.getScreenSize();
        resolve(size.height);
      } catch (e) {
        reject(e);
      }
    });
  }

  public screenSize(): Promise<Region> {
    return new Promise<Region>((resolve, reject) => {
      try {
        const screenSize = robot.getScreenSize();
        resolve(new Region(0, 0, screenSize.width, screenSize.height));
      } catch (e) {
        reject(e);
      }
    });
  }
}
