import { IChecker } from "./checker/interface";
import { Query } from "./reader/query";
import { IFormat, IMessage } from "./formatter/interface";
declare class Printer {
    verbosity: number;
    format: IFormat;
    readonly messages: IMessage[];
    constructor(verbosity: number, format: IFormat);
    printCheck(checker: IChecker | undefined, tokenised: Query, prefix: string): void;
    printFix(query: Query[]): void;
    warnAboutUncategoriseableQuery(content: string, tokenised: Query, prefix: string): void;
    warnAboutNoStdinStream(): void;
    warnAboutFileNotFound(file: string): void;
    warnAboutNoConfiguration(file: string): void;
}
export { Printer };
