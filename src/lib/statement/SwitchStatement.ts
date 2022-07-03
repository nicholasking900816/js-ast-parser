import { SwitchCaseStatement } from "./SwitchCaseStatement";
import { NodeCode } from "../../constants";
import { Statement } from "./Statement";
import { Expression } from "../Expression/Expression";

export class SwitchStatement extends Statement {
    type = 'SwitchStatement';
    code = NodeCode.SwitchStatement
    cases: SwitchCaseStatement[] = [];
    discriminant: Expression;
    constructor(currentToken: any) {
        super();
        this.loc.start = currentToken.loc.start;
    }
}