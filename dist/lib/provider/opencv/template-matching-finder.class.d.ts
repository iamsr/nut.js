import { MatchRequest } from "../../match-request.class";
import { MatchResult } from "../../match-result.class";
import { ScaledMatchResult } from "../../scaled-match-result.class";
import { DataSource } from "./data-source.interface";
import { FinderInterface } from "./finder.interface";
export declare class TemplateMatchingFinder implements FinderInterface {
    private source;
    private initialScale;
    private scaleSteps;
    constructor(source?: DataSource);
    findMatches(matchRequest: MatchRequest, debug?: boolean): Promise<ScaledMatchResult[]>;
    findMatch(matchRequest: MatchRequest, debug?: boolean): Promise<MatchResult>;
}
