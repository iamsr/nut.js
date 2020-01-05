import * as cv from "opencv4nodejs";
import { Image } from "../../image.class";
import { DataSource } from "./data-source.interface";

export class ImageReader implements DataSource {
  public async load(path: string): Promise<Image> {
    return new Promise<Image>(async (resolve, reject) => {
      try {
        const image = await cv.imreadAsync(path, cv.IMREAD_UNCHANGED);
        resolve(new Image(image.cols, image.rows, image.getData(), image.channels));
      } catch (e) {
        reject(`Failed to load image from '${path}'`);
      }
    });
  }
}
