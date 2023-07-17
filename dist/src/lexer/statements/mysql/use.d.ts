import { Query } from "../../../reader/query";
import { ILexer } from "../../interface";
declare class Use implements ILexer {
    options: string[];
    tokenise(query: Query): Query;
}
export { Use };