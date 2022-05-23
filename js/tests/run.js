const { Parser } = require("../parser/Parser");
console.log('test');
const parser = new Parser();

const program = `42`;

const ast = parser.parse(program);

console.log(JSON.stringify(ast, null, 2));
console.log('test');