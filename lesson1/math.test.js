var result = add (3, 7)
var expected = 10;

if (result !== 10) {
  throw Error(`3+7 应该等于  ${expected}, 但是结果是 ${result}`);
}

var result = minus (3, 3);
var expected = 0;

if (result !== 0) {
  throw Error(`3 - 3应该等于 ${expected}, 但是结果是 ${result}`)
}