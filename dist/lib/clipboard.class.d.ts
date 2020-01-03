import { NativeAdapter } from "./adapter/native.adapter.class";
export declare class Clipboard {
    private nativeAdapter;
    constructor(nativeAdapter: NativeAdapter);
    copy(text: string): Promise<void>;
    paste(): Promise<string>;
}
