// GLOBAL SCOPE
var variableVar = 'Var in global';
let variableLet = 'Let in global';
const variableConst = 'Const global';

// FUNCTION SCOPE: function(){}
function test() {
  var variableVar = 'Var in function';
  let variableLet = 'Let in function';
  const variableConst = 'Const in function';
  console.log(
    `Function Scope: ${variableVar}, ${variableLet}, ${variableConst}` // --> Function Scope: Var in function, Let in function, Const in function
  );

  var variableVarInFun = 'Another var in function';
}

// test();

// console.log(variableVarInFun); // --> ERROR!!! Uncaught ReferenceError: variableVarInFun is not defined

// console.log(`Global Scope: ${variableVar}, ${variableLet}, ${variableConst}`); // --> Global Scope: Var in global, Let in global, Const global

// BLOCK SCOPE: {}
if (true) {
  var variableVar = 'Var in block';
  let variableLet = 'Let in block';
  const variableConst = 'Const in block';

  // console.log(`Block Scope: ${variableVar}, ${variableLet}, ${variableConst}`); // --> Block Scope: Var in block, Let in block, Const in block

  var variableVarInBlock = 'Another var in block';
}

// console.log(variableVarInBlock); // --> Another var in block

// console.log(`Global Scope: ${variableVar}, ${variableLet}, ${variableConst}`); // --> Global Scope: Var in block, Let in global, Const global
