// 왜 let 은 안되는가에 대하여..

let jee = 31;

function jeeAge (jee) {
  // let jee = 20; // c# 에서는 이름이 같더라도, 전역과 지역 변수 구분 할 줄 알아서 let 사용 ㄱㅏ능. 그러나 js 에서는 왜 안도ㅐ? 
  var jee = 20;

  return jee;
}

console.log(jeeAge(jee)); 


var q =100;
let q = 1; // 1. let 2.var 는 안되고 왜 1.var 2.let은 됨?





// gpt 질문 용 코드
let jee = 31;

function jeeAge (jee) {
  let jee = 20;  
  return jee;
}

console.log(jeeAge(jee)); 



var baek =100;
let baek = 1; 
// 1. let 2.var 는 안되고 왜 1.var 2.let은 됨?

let hehe = 9;
var hehe = 5;
