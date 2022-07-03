import { NodeCode } from "../../constants";
import { Expression } from "./Expression";

export class BracketEnwrapedExpressioin extends Expression {
    type = 'BracketEnwrapedExpressioin';
    code = NodeCode.BracketEnwrapedExpressioin;
    expression: Expression;
    constructor(currentToken: any) {
        super()
        this.loc.start= currentToken.loc.start;
    }
}