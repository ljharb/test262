// This file was procedurally generated from the following sources:
// - src/dstr-assignment-async-iteration/array-elem-nested-array.case
// - src/dstr-assignment-async-iteration/async-function/for-await-of-async-func.template
/*---
description: When DestructuringAssignmentTarget is an array literal, it should be parsed parsed as a DestructuringAssignmentPattern and evaluated as a destructuring assignment. (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding, async-iteration]
flags: [generated, async]
info: |
    IterationStatement :
      for await ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    5. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
var x;

var iterCount = 0;
async function fn() {
  for await ([[x]] of [[[1]]]) {
    assert.sameValue(x, 1);
    iterCount += 1;
  }
}