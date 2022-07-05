import { NodeCode } from "../../constants";
import { IdentifierLiteralExpression } from "../expression/IdentifierLiteralExpression";
import { StringLiteralExpression } from "../expression/StringLiteralExpression";
import { Statement } from "./Statement";

export type ImportSpecifier = {
    imported: IdentifierLiteralExpression,
    local: IdentifierLiteralExpression
}

export class ImportStatement extends Statement {
    type = 'ImportStatement';
    code = NodeCode.ImportStatement;
    imported: IdentifierLiteralExpression;
    local: IdentifierLiteralExpression;
    specifiers: Array<ImportSpecifier> = [];
    from: StringLiteralExpression = null as any;
    constructor(currentToken: any) {
        super();
        this.loc.start = currentToken.loc.start;
    }
}