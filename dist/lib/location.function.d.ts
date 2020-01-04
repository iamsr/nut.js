import { Point } from "./point.class";
import { Region } from "./region.class";
export declare const centerOf: (target: Region | Promise<Region>) => Promise<Point>;
export declare const randomPointIn: (target: Region | Promise<Region>) => Promise<Point>;
