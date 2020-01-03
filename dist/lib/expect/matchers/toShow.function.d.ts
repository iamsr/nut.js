import { Screen } from "../../screen.class";
export declare const toShow: (received: Screen, needle: string, confidence?: number | undefined) => Promise<{
    message: () => string;
    pass: boolean;
}>;
