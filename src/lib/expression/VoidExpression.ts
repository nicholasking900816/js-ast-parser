import { NodeCode } from "../../constants";
import { Expression } from "./Expression";

export class VoidExpression extends Expression {
    type = 'VoidExpression';
    code = NodeCode.VoidExpression;
    argument: Expression
    constructor(currentToken) {
        super();
        this.loc.start = currentToken.loc.start
    }
}