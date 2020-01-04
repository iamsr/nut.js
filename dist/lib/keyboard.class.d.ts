import { NativeAdapter } from "./adapter/native.adapter.class";
import { Key } from "./key.enum";
declare type StringOrKey = string[] | Key[];
export declare class Keyboard {
    private nativeAdapter;
    config: {
        autoDelayMs: number;
    };
    constructor(nativeAdapter: NativeAdapter);
    type(...input: StringOrKey): Promise<Keyboard>;
    pressKey(...keys: Key[]): Promise<Keyboard>;
    releaseKey(...keys: Key[]): Promise<Keyboard>;
}
export {};
