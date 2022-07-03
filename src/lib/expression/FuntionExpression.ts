import { Block } from "../../Block";
import { NodeCode } from "../../constants";
import { Expression } from "./Expression";
import { IdentifierLiteralExpression } from "./IdentifierLiteralExpression";

export class FunctionExpression extends Expression {
    type = 'FunctionExpression';
    code = NodeCode.FunctionExpression;
    params: IdentifierLiteralExpression[] = [];
    body: Block;
    constructor(currentToken: any) {
        super()
        this.loc.start= currentToken.loc.start;
    }
}