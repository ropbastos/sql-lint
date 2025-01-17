import { Query } from "../../../reader/query";
import { CheckerResult } from "../../checkerResult";
import { IChecker } from "../../interface";
export default class SqlError implements IChecker {
    errors: any;
    requiresConnection: boolean;
    message: string;
    appliesTo: string[];
    additionalInformation: string;
    constructor(errors: any);
    check(query: Query): CheckerResult;
    getName(): string;
    private concatErrorObject;
}
