import { NodeCode } from "../../constants";
import { AstNode } from "../AstNode";

export class Expression extends AstNode {
    static code = NodeCode.Expression
}