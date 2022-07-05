# js-ast-parser
把代码字符串解析为AST对象

# 快速使用

```bash
npm install js-ast-parser
```

## index.js

```javascript
import { JavascriptAstParser } from 'js-ast-parser';

let code = `

function greeting (msg) {
    console.log(msg)
}

greeting('hello world');

`

new JavascriptAstParser(code).parse();
```
