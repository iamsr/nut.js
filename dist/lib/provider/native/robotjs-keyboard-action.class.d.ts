import { Key } from "../../key.enum";
import { KeyboardActionProvider } from "./keyboard-action-provider.interface";
export declare class KeyboardAction implements KeyboardActionProvider {
    static KeyLookupMap: Map<Key, string | null>;
    static keyLookup(key: Key): any;
    private static mapModifierKeys;
    private static key;
    constructor();
    type(input: string): Promise<void>;
    click(...keys: Key[]): Promise<void>;
    pressKey(...keys: Key[]): Promise<void>;
    releaseKey(...keys: Key[]): Promise<void>;
    setKeyboardDelay(delay: number): void;
}
