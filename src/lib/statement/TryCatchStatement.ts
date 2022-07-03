import { Block } from "../../Block";
import { FunctionDeclarationStatement } from "./FunctionDeclarationStatement";
import { NodeCode } from "../../constants";
import { Statement } from "./Statement";

export class TryCathchStatement extends Statement {
    type = 'TryCathchStatement';
    code = NodeCode.TryCathchStatement;
    body: Block;
    catchHandler: FunctionDeclarationStatement;
    finalizer: Block;
    constructor(currentToken: any) {
        super();
        this.loc.start = currentToken.loc.start;
    }
}