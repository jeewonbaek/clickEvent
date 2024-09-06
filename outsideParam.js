
// test 1 : 임시 param과 함수 내부의 param 이름이 같은 경우.

let test1 = 10; // 여기서 test1 은 number형
let test2 = "테스트2임"

function testing (test1) { // 여기서 test1 은 parameter / any

  var test1 = "테스트1임"; 

  // let test1 = "테스트1임"; // 왜 중복 선언이라 나오지? 다른 scope 아닌가?
  // "let test1"의 test1 은 string형 -> 이건 또 왜?

  return test1; // 여기서 test1 은 parameter / any
}

let testing1 = testing(test1); // 여기서 test1 은 number형

console.log(testing1);
// 예상 : "테스트1임" -> 함수 안에 리턴값이 "테스트1임" 이라고 선언 되었기 때문
// 결과 : 테스트1임
console.log(testing(700));
// 예상 : "테스트1임" -> 함수 안에 리턴값이 "테스트1임" 이라고 선언 되었기 때문
// 결과 : 테스트1임
console.log(testing(test2));
// 예상 : "테스트1임" -> 함수 안에 리턴값이 "테스트1임" 이라고 선언 되었기 때문
// 결과 : 테스트1임

// 결론 : param 값에 데이터타입에 실제값 아무거나 들어가면 전부 return "테스트1임" 됨.








// // 갑 분 재선언 테스트  var / let 
// let a = 10;
// console.log(a);

// var a = 50;
// console.log(a);

// // let,var,const 무엇을 쓰던, 골고루 써서 재선언 하면 오류.
// // 단, var는 무한 재선언 가능! ( var a = 10; , var a = 50; )