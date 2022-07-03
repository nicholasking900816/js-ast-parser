import { NodeCode } from "../../constants";
import { IdentifierLiteralExpression } from "../Expression/IdentifierLiteralExpression";
import { StringLiteralExpression } from "../Expression/StringLiteralExpression";
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