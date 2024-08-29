
// function add (a,b) {
//   return a+b;
// }

// var result = add(1,2);
// console.log(result);

// function letter (a,b) {
//   return a+b;
// }

// var final = letter("히","히");

// var a = "아";
// var b = "놔";

// console.log(letter); 
// [Function: letter]

// letter(); // 아무것도 안나옴옴

// console.log(final);


// 라면 판매 함수
function ramen (guest1,guest2) {
  return "토핑 1 :" + guest1 + "토핑 2 :" + guest2;
}

// ramen (555,"문자"); // 토핑 넣고 조리 시작

// var table1 = ramen (555,"문자"); // 1번 table 손님들을 위해 토핑 555와 "문자" 를 넣고 조리 시작
// console.log(ramen); // [Function: ramen]
// console.log(table1); // 토핑 1 :555토핑 2 :문자 // 1 번 테이블에 서빙까지 완료.

// var table2 = ramen(@,~); // 갑분 외계 물질
// console.log(table2);

// var guest1 = 1;
// var guest2 = 2;

// var num = ramen (guest1,guest2);
// console.log(num);

// function ramen (guest1,guest2) {
//   return guest1 + guest2;
// }

var guest1; // 토핑 부재
var guest2 = 2;
var empty = ramen(guest1,guest2);
console.log(empty); // 토핑 1 :undefined 토핑 2 :2   // NaN


console.log("여기서 부터 찐임");


var onlyOne = ramen (1);
console.log(onlyOne); // 토핑 1 :1 토핑 2 :undefined

var tooMany = ramen (1,2,3,4,5);
console.log(tooMany); // 토핑 1 :1 토핑 2 :2

function aYo (a,a,a) {
  return a+a+a;
}

var a1 = aYo (1,1,1);
console.log(a1); // 3

var a1_1 = aYo (2,4,8);
console.log(a1_1); // 24

var a2 = aYo ("에","이","다");
console.log(a2); // 다다다


var gpt = 1;
console.log(gpt);

var gpt;
console.log(gpt);




// function gptTest (a,b) {
//   return a,b;
// }

// var gpttt = gptTest(10,10);
// console.log(gpttt); // 질ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ룬


function gptTest (a,b) {
  return a+b;
}


var gpttt = gptTest(10,10);
console.log(gpttt); // 20

var gpttt = gptTest(9);
console.log(gpttt); // NaN




function hehe (param) {
  return 1+param;
}

var lalala = hehe(9);
console.log(lalala); // 10

var lalala;
console.log(lalala); // 10

var lalala = hehe();
console.log(lalala); // NaN



function haha (param) {
  return 1;
}

console.log(haha(99999999));