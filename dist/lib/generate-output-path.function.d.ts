import { FileType } from "./file-type.enum";
export declare const generateOutputPath: (filename: string, params?: {
    type?: FileType | undefined;
    path?: string | undefined;
    prefix?: string | undefined;
    postfix?: string | undefined;
} | undefined) => string;
