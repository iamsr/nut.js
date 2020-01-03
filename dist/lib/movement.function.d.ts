import { NativeAdapter } from "./adapter/native.adapter.class";
import { Point } from "./point.class";
import { LineHelper } from "./util/linehelper.class";
export declare const createMovementApi: (native: NativeAdapter, lineHelper: LineHelper) => {
    down: (px: number) => Promise<Point[]>;
    left: (px: number) => Promise<Point[]>;
    right: (px: number) => Promise<Point[]>;
    straightTo: (target: Point | Promise<Point>) => Promise<Point[]>;
    up: (px: number) => Promise<Point[]>;
};
