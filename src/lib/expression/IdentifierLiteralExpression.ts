import { NodeCode } from "../../constants";
import { Expression } from "./Expression";

export class IdentifierLiteralExpression extends Expression {
    type = 'IdentifierLiteralExpression';
    code = NodeCode.IdentifierLiteralExpression;
    identifier: string;
    constructor(public currentToken: any) {
        super()
        Object.assign(this.loc, currentToken.loc);
        this.identifier = currentToken.value;
    }
}