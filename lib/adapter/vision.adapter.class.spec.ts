import { Image } from "../image.class";
import { MatchRequest } from "../match-request.class";
import { Point } from "../point.class";
import { ScreenAction } from "../provider/native/robotjs-screen-action.class";
import { highlight } from "../provider/opencv/highlight.function";
import { TemplateMatchingFinder } from "../provider/opencv/template-matching-finder.class";
import { Region } from "../region.class";
import { VisionAdapter } from "./vision.adapter.class";

jest.mock("../provider/opencv/template-matching-finder.class");
jest.mock("../provider/opencv/highlight.function");
jest.mock("../provider/native/robotjs-screen-action.class");

beforeEach(() => {
  jest.resetAllMocks();
});

describe("VisionAdapter class", () => {
  it("should delegate calls to grabScreen", () => {
    // GIVEN
    const finderMock = new TemplateMatchingFinder();
    const screenMock = new ScreenAction();
    const SUT = new VisionAdapter(finderMock, screenMock);

    // WHEN
    SUT.grabScreen();

    // THEN
    expect(screenMock.grabScreen).toBeCalledTimes(1);
  });

  it("should delegate calls to grabScreenRegion", () => {
    // GIVEN
    const finderMock = new TemplateMatchingFinder();
    const screenMock = new ScreenAction();
    const SUT = new VisionAdapter(finderMock, screenMock);
    const screenRegion = new Region(0, 0, 100, 100);

    // WHEN
    SUT.grabScreenRegion(screenRegion);

    // THEN
    expect(screenMock.grabScreenRegion).toBeCalledTimes(1);
    expect(screenMock.grabScreenRegion).toBeCalledWith(screenRegion);
  });

  it("should delegate calls to screenWidth", () => {
    // GIVEN
    const finderMock = new TemplateMatchingFinder();
    const screenMock = new ScreenAction();
    const SUT = new VisionAdapter(finderMock, screenMock);

    // WHEN
    SUT.screenWidth();

    // THEN
    expect(screenMock.screenWidth).toBeCalledTimes(1);
  });

  it("should delegate calls to screenHeight", () => {
    // GIVEN
    const finderMock = new TemplateMatchingFinder();
    const screenMock = new ScreenAction();
    const SUT = new VisionAdapter(finderMock, screenMock);

    // WHEN
    SUT.screenHeight();

    // THEN
    expect(screenMock.screenHeight).toBeCalledTimes(1);
  });

  it("should delegate calls to screenSize", () => {
    // GIVEN
    const finderMock = new TemplateMatchingFinder();
    const screenMock = new ScreenAction();
    const SUT = new VisionAdapter(finderMock, screenMock);

    // WHEN
    SUT.screenSize();

    // THEN
    expect(screenMock.screenSize).toBeCalledTimes(1);
  });

  it("should delegate calls to findImage", () => {
    // GIVEN
    const finderMock = new TemplateMatchingFinder();
    const SUT = new VisionAdapter(finderMock);
    const request = new MatchRequest(
      new Image(100, 100, new ArrayBuffer(0), 3),
      "foo",
      new Region(0, 0, 100, 100),
      0.99,
      true);

    // WHEN
    SUT.findOnScreenRegion(request);

    expect(finderMock.findMatch).toBeCalledTimes(1);
    expect(finderMock.findMatch).toBeCalledWith(request);
  });

  it("should delegate calls to highlight for Regions", () => {
    // GIVEN
    const targetRegion = new Region(0, 0, 100, 100);

    // WHEN
    VisionAdapter.highlight(targetRegion);

    expect(highlight).toBeCalledTimes(1);
    expect(highlight).toBeCalledWith(targetRegion);
  });

  it("should delegate calls to highlight for Points", () => {
    // GIVEN
    const targetPoint = new Point(100, 100);

    // WHEN
    VisionAdapter.highlight(targetPoint);

    expect(highlight).toBeCalledTimes(1);
    expect(highlight).toBeCalledWith(targetPoint);
  });
});
