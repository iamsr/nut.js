import { ClipboardActionProvider } from "./clipboard-action-provider.interface";
export declare class ClipboardAction implements ClipboardActionProvider {
    constructor();
    hasText(): Promise<boolean>;
    clear(): Promise<boolean>;
    copy(text: string): Promise<void>;
    paste(): Promise<string>;
}
