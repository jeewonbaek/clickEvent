// param 에 특정 변수가 대입이 됐는데 그 변수 값이 넘버형이었으면 넘버가 변수로 인정이 되나?

//기본적으로 변수명으로 넘버가 앞에 나오게 쓸 수가 있나?
// var 94Alice = 100;
// var 94 = 90;
// let 44 = "사사";
// 결론 : 다 안돼.

// 변수 선언과 함수를 통해 값이 어떻게 변경이 되는지.
var a = "a";
var b = "b";

function aTest () {
  var a = 100; // a가 재선언 된건가?
  console.log("aTest 함수 안에서의 a의 값은 :",a); // aTest 함수 안에서의 a의 값은 : 100
}

console.log("aTest를 param 없이 호출한 결과 값은 :",aTest()); // aTest를 param 없이 호출한 결과 값은 : undefined
console.log("aTest 함수 밖에서의 a의 값은 :",a); // aTest 함수 밖에서의 a의 값은 : a

////////////////////////////////////

var aa = 77777;

function bTest (param) {
  var aa = 500; 
  console.log("bTest 함수 내부의 aa 값은 :" , aa); // bTest 함수 내부의 aa 값은 : 500
}

console.log("bTest 함수에 b라는 param 값을 넣은 값은 :" , bTest(b)); // bTest 함수에 b라는 param 값을 넣은 값은 : undefined
console.log("bTest 함수 밖에서의 aa의 값은 :",aa); // bTest 함수 밖에서의 aa의 값은 : 77777

//////////////////////////////////

var c = 44;

function cTest (parameter) {
  parameter = 50;
  console.log("cTest 함수 안에서의 parameter 값은 :", parameter, "cTest 함수 안에서의 parameter 유형은 :", typeof(parameter)); // cTest 함수 안에서의 parameter 값은 : 50 cTest 함수 안에서의 parameter 유형은 : number
  console.log("cTest 함수 안에서의 c 값은 :", c); // cTest 함수 안에서의 c 값은 : 44
  return parameter;
}

console.log("cTest 함수 외부의 c 값은:",c); // cTest 함수 외부의 c 값은: 44  // 왜 위에 aTest 에서는 순서대로 값이 터미널에 찍혔는데 왜 얘는 순서가 첫번째로 찍혔지?
console.log("cTest 함수에 c라는 param 값을 넣은 값은 :",cTest(c)); // cTest 함수에 c라는 param 값을 넣은 값은 : 50

//////////////////////////////

var wood = 1;
console.log(wood); // 1

var wood = 1;
console.log(wood); // 1

let tree = 2;
console.log(tree); // 2
// let tree = 2; // 바로 에러~