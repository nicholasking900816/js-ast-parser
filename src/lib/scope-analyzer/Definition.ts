import { NodeCode } from "../../constants";
import { AstNode } from "../AstNode";
import { IdentifierLiteralExpression } from "../expression/IdentifierLiteralExpression";
import { ClassDeclarationStatement } from "../statement/ClassDeclarationStatement";
import { FunctionDeclarationStatement } from "../statement/FunctionDeclarationStatement";
import { Scope } from "./Scope";

export class Definition {
    identifier: string;
    definitions: Array<Definition>;
    type = 'Definition';
    arguments: Array<string>; 
    
    constructor(public astNode: AstNode, public definitionType: string, public definitionCode: number, public scope: Scope) {
        if (astNode === undefined) debugger;
        switch(astNode.code) {
            case NodeCode.AssignmentExpression:
                this.identifier = (<any>astNode).left.identifier;
                break;
            case NodeCode.IdentifierLiteralExpression:
                this.identifier = (<IdentifierLiteralExpression>astNode).identifier;
                break;
            case NodeCode.FunctionDeclarationStatement:
                this.identifier = (<FunctionDeclarationStatement>astNode).identifier.identifier;
                break;        
            case NodeCode.ClassDeclarationStatement:
                this.identifier = (<ClassDeclarationStatement>astNode).className.identifier
                break;   
        }
    }
}