
export class AstNode {
    unexpectedNodes: any;
    type: string;
    code: number;
    isUnexpectEnd = false;
    loc: {start: number | null, end: number | null};
    scope: any;
    constructor() {
        this.unexpectedNodes = [];
        this.loc = {start: null, end: null};
    }
}