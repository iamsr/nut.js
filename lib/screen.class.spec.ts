import { VisionAdapter } from "./adapter/vision.adapter.class";
import { Image } from "./image.class";
import { LocationParameters } from "./locationparameters.class";
import { MatchRequest } from "./match-request.class";
import { MatchResult } from "./match-result.class";
import { Point } from "./point.class";
import { Region } from "./region.class";
import { Screen } from "./screen.class";

jest.mock("./adapter/native.adapter.class");
jest.mock("./adapter/vision.adapter.class");

const searchRegion = new Region(0, 0, 100, 100);

beforeEach(() => {
  jest.resetAllMocks();

  VisionAdapter.prototype.grabScreen = jest.fn(() => {
    return new Image(searchRegion.width, searchRegion.height, new ArrayBuffer(0), 3);
  });

  VisionAdapter.prototype.screenSize = jest.fn(() => {
    return searchRegion;
  });

  VisionAdapter.highlight = jest.fn();
});

describe("Screen.", () => {
  it("should resolve with sufficient confidence.", async () => {
    const matchResult = new MatchResult(0.99, searchRegion);

    VisionAdapter.prototype.findOnScreenRegion = jest.fn(() => {
      return matchResult;
    });

    const visionAdapterMock = new VisionAdapter();

    const SUT = new Screen(visionAdapterMock);
    const imagePath = "test/path/to/image.png";
    await expect(SUT.find(imagePath)).resolves.toEqual(matchResult.location);
    const matchRequest = new MatchRequest(
      expect.any(Image),
      imagePath,
      searchRegion,
      SUT.config.confidence,
      true);
    expect(visionAdapterMock.findOnScreenRegion).toHaveBeenCalledWith(matchRequest);
  });

  it("should reject with insufficient confidence.", async () => {
    const matchResult = new MatchResult(0.8, searchRegion);

    VisionAdapter.prototype.findOnScreenRegion = jest.fn(() => {
      return matchResult;
    });

    const visionAdapterMock = new VisionAdapter();

    const SUT = new Screen(visionAdapterMock);
    const imagePath = "test/path/to/image.png";
    await expect(SUT.find(imagePath))
      .rejects
      .toEqual(`No match for ${imagePath}. Required: ${SUT.config.confidence}, given: ${matchResult.confidence}`);
  });

  it("should override default confidence value with parameter.", async () => {
    const minMatch = 0.8;
    const matchResult = new MatchResult(minMatch, searchRegion);

    VisionAdapter.prototype.findOnScreenRegion = jest.fn(() => {
      return matchResult;
    });

    const visionAdapterMock = new VisionAdapter();

    const SUT = new Screen(visionAdapterMock);

    const imagePath = "test/path/to/image.png";
    const parameters = new LocationParameters(undefined, minMatch);
    await expect(SUT.find(imagePath, parameters)).resolves.toEqual(matchResult.location);
    const matchRequest = new MatchRequest(
      expect.any(Image),
      imagePath,
      searchRegion,
      minMatch,
      true);
    expect(visionAdapterMock.findOnScreenRegion).toHaveBeenCalledWith(matchRequest);
  });

  it("should override default search region with parameter.", async () => {
    const customSearchRegion = new Region(10, 10, 90, 90);
    const matchResult = new MatchResult(0.99, searchRegion);

    VisionAdapter.prototype.findOnScreenRegion = jest.fn(() => {
      return matchResult;
    });

    const visionAdapterMock = new VisionAdapter();

    const SUT = new Screen(visionAdapterMock);

    const imagePath = "test/path/to/image.png";
    const parameters = new LocationParameters(customSearchRegion);
    await expect(SUT.find(imagePath, parameters)).resolves.toEqual(matchResult.location);
    const matchRequest = new MatchRequest(
      expect.any(Image),
      imagePath,
      customSearchRegion,
      SUT.config.confidence,
      true);
    expect(visionAdapterMock.findOnScreenRegion).toHaveBeenCalledWith(matchRequest);
  });

  it("should override both confidence and search region with parameter.", async () => {
    const minMatch = 0.8;
    const customSearchRegion = new Region(10, 10, 90, 90);
    const matchResult = new MatchResult(minMatch, searchRegion);

    VisionAdapter.prototype.findOnScreenRegion = jest.fn(() => {
      return matchResult;
    });

    const visionAdapterMock = new VisionAdapter();

    const SUT = new Screen(visionAdapterMock);

    const imagePath = "test/path/to/image.png";
    const parameters = new LocationParameters(customSearchRegion, minMatch);
    await expect(SUT.find(imagePath, parameters)).resolves.toEqual(matchResult.location);
    const matchRequest = new MatchRequest(
      expect.any(Image),
      imagePath,
      customSearchRegion,
      minMatch,
      true);
    expect(visionAdapterMock.findOnScreenRegion).toHaveBeenCalledWith(matchRequest);
  });

  it("should delegate highlight calls for Regions to VisionAdapter", () => {
    // GIVEN
    const targetRegion = new Region(0, 0, 100, 100);

    // WHEN
    Screen.highlight(targetRegion);

    // THEN
    expect(VisionAdapter.highlight).toBeCalledTimes(1);
    expect(VisionAdapter.highlight).toBeCalledWith(targetRegion);
  });

  it("should delegate highlight calls for Points to VisionAdapter", () => {
    // GIVEN
    const targetPoint = new Point(10, 10);

    // WHEN
    Screen.highlight(targetPoint);

    // THEN
    expect(VisionAdapter.highlight).toBeCalledTimes(1);
    expect(VisionAdapter.highlight).toBeCalledWith(targetPoint);
  });
});
