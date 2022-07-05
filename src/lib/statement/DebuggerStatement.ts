import { NodeCode } from "../../constants";
import { Statement } from "./Statement";

export class DebuggerStatement extends Statement {
    type = 'DebuggerStatement';
    code = NodeCode.DebuggerStatement;
    constructor(currentToken) {
        super();
        this.loc.start = currentToken.loc.start;
        this.loc.end = currentToken.loc.start += currentToken.value.length
    }
}