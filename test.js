
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


// 라면 조리 함수
function ramen (guest1,guest2) {
  return "토핑 1 :" + guest1 + "토핑 2 :" + guest2;
}

// 두가지 함수 호출 방식 설명 (특정한 명칭이 있지는 않지만 각 방식에 대해 설명할 수 있는 용어)

ramen (555,"문자"); 
// 토핑 넣고 조리 시작 
// 직접 호출 (Direct Invocation) 
// 함수를 호출하자마자 결과가 실행되며, 그 결과를 특정 변수에 저장하지 않고 바로 사용
// 보통 함수의 결과가 필요 없거나, 함수가 부수적인 작업(예: 콘솔에 로그 출력, 상태 변경 등)을 수행할 때 주로 사용

var table1 = ramen (555,"문자"); 
// 1번 table 손님들을 위해 토핑 555와 "문자" 를 넣고 조리 시작
// 변수에 저장 후 호출 (Assignment and Invocation)
// "함수 호출의 결과를 변수에 저장" 또는 "결과를 저장하고 호출"하는 방식이라고 부를 수 있음!
// 함수의 반환 값을 나중에 사용할 수 있도록 저장해 두는 경우에 주로 사용


console.log(ramen); // [Function: ramen]
console.log(ramen(1,5)); // 토핑 1 :1 토핑 2 :5
// console.log(ramen(jee,heung)); // ReferenceError: jee is not defined

console.log(table1); // 토핑 1 :555토핑 2 :문자 // 1 번 테이블에 서빙까지 완료.

// var table2 = ramen(@,~); // 갑분 외계 물질
// console.log(table2);

// var guest1 = 1;
// var guest2 = 2;

// var num = ramen (guest1,guest2);
// console.log(num);

// function ramen (guest1,guest2) {
//   return guest1 + guest2;
// // }

// var guest1; // 토핑 부재
// var guest2 = 2;
// var empty = ramen(guest1,guest2);
// console.log(empty); // 토핑 1 :undefined 토핑 2 :2   // NaN


// console.log("여기서 부터 찐임");


// var onlyOne = ramen (1);
// console.log(onlyOne); // 토핑 1 :1 토핑 2 :undefined

// var tooMany = ramen (1,2,3,4,5);
// console.log(tooMany); // 토핑 1 :1 토핑 2 :2

// function aYo (a,a,a) {
//   return a+a+a;
// }

// var a1 = aYo (1,1,1);
// console.log(a1); // 3

// var a1_1 = aYo (2,4,8);
// console.log(a1_1); // 24

// var a2 = aYo ("에","이","다");
// console.log(a2); // 다다다


// var gpt = 1;
// console.log(gpt);

// var gpt;
// console.log(gpt);




// function gptTest (a,b) {
//   return a,b;
// }

// var gpttt = gptTest(10,10);
// console.log(gpttt); // 질ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ룬


// function gptTest (a,b) {
//   return a+b;
// }


// var gpttt = gptTest(10,10);
// console.log(gpttt); // 20

// var gpttt = gptTest(9);
// console.log(gpttt); // NaN




// function hehe (param) {
//   return 1+param;
// }

// var lalala = hehe(9);
// console.log(lalala); // 10

// var lalala;
// console.log(lalala); // 10

// var lalala = hehe();
// console.log(lalala); // NaN



// function haha (param) {
//   return 1;
// }

// console.log(haha(99999999));


//////////////////////////////////////////////////////
// 데이터타입 관련-불리언
function kimchi(condition) {
  if (condition === true) {
      console.log(" 조건 맞음");  // condition이 true일 때만 실행
  } else {
      console.log("조건이 맞지 않습니다.");
  }
}

console.log("김치 ~~~~");
kimchi(true);  // 조건 맞음
kimchi(false); // "조건이 맞지 않습니다."가 출력됨
kimchi("lalala"); // 조건이 맞지 않습니다. // 데이터 타입이 달라서?
// 여기서 true faslse 는 불리언 타입이지??? 마우스 갖다 대도 안나오길래


  condition === Boolean // 문법 옹류?
  condition === true // 얘는 왜돼?
  if (typeof param === 'boolean' && param === false)
    // 불리언 굳이 써야대?
  // 불리언을 붙이냐 안붙이냐에 따라 데이터 타입들 어케 나오는지 실험!
  setBackgroundColor(false); // 배경 색이 노란색으로 변경됨
setBackgroundColor(true);  // 아무 변화도 없음
setBackgroundColor(null);  // "param이 boolean 타입의 false가 아닙니다." 출력
setBackgroundColor(0);     // "param이 boolean 타입의 false가 아닙니다." 출력
setBackgroundColor("false"); // "param이 boolean 타입의 false가 아닙니다." 출력



// 펑션도 var  처럼 재할당 가능혀????
// let 처럼 같은 이름 펑션 또쓰면 랄지하지않고?


// 거짓 값 진실 값
console.log("이게 될까?");
function kimchi(condition) {
  if (condition) {
    console.log("진짜여서 실행하지 않습니다.");
      
  } else {
    console.log("가짜여서 실행한다.");
       
  }
}

kimchi(true);  // 진짜여서 실행하지 않습니다.
kimchi(false); // 가짜여서 실행한다.
kimchi("some string"); // 진짜여서 실행하지 않습니다.
// if 첫 조건엔 무조건 true 인 진실값이 정답이다. 답정너.
// 자연스럽게 else 에는 false 가 들어가겠지~~~ 