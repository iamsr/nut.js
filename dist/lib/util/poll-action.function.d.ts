export declare function timeout<R>(updateIntervalMs: number, maxDurationMs: number, action: (...params: any) => Promise<R>): Promise<R>;
