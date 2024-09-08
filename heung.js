// var는 함수 스코프나 전역 스코프에서 선언되며, 해당 스코프 내 어디에서든 접근이 가능해.

// 실험 : var로 전역변수와 함수 안에서나 다 연결이 되는지(재선언이나 재할당이 되는지) 테스트

// 실험 1. 펑션 작동 확인.
var a = 1;

function test (b) {
  var a = 10;
  return a;
}

console.log(test("임의의 문자")); // 예상 : 10; // 결과 : 10

// 실험 1-2. 전역 변수 a의 값이 1에서 10으로 변화 했는지 test
console.log(a); // 예상 : 1 -> 전역변수와 지역 변수는 구분 되기 때문. 정답 : 1

// 실험 1-2-1. let도 지역 변수와 전역 변수로 구분되어 지는지 test
let j = 5;

function test1 (p) {
  let j = 90;
  return j;
}

console.log(test1("뭐가 나올까?")); // 예상 : 90 -> var와 같은 이유 // 결과 : 90

// 실험 1-2-2. 전역 변수 j의 값이 5에서 90으로 변화 했는지 test
console.log(j); // 예상 : 5 -> var와 같은 이유 // 결과 : 5

// 결론 : 고로, 전역 변수와 지역 변수의 명이 같아도 서로 다른 scope 이기 때문에 아무런 영향이 없다!

// 실험 2. 전역과 지역이 다르게 인식 된다면, 펑션 안에서 VAR(선언/재선언)를 쓰지 않고 재할당 방식의 코드를 쓴다면 에러가 나겠지? 펑션 안에서는 e라는 변수가 선언 된 적이 없기 때문에?..
var e = "전역 변수 e임";

function eTest (f) {
  e = 100;
  return e; //? 여기서 e의 데이터타입은 number 로 변경됐어야 하는거 아냐?
}

console.log(eTest("어떻게 나올까?")); 
// 예상 : syntax 오류 -> 펑션 안에서 e가 선언 된 적이 없기 때문에 문법 오류로 간주
//! 결과 : 100
// ?????????????????????????????? 왜??????????????????
//? 의문점 : 펑션 안에서는 var/let/const 사용하지 않고 선언과 할당을 할 수 있다는 건가? 그럼 제한 범위(재선언 가능VS불가능)가 애매해지는데?
console.log(e); 
// 예상 : "전역 변수 e임" -> 전역/지역 scope 가 다르기에.
//! 결과 : 100
// ???????????????????????????????왜 scope 가 다른데 왜 e 값이 바꼈지??
//? 의문점 : e 값이 문자에서 숫자로 바꼈다면, 재할당 밖에 가능성이 없는데, 우선 스코프가 다르기에 재할당 되는것도 이상하고 또한 마우스 오버 하면 위의 네가지 e 모두 string 이라고 뜸... 결과는 100 인데,..

//? 뭐 펑션 안에서는 그냥 "변수명=값;" 만 적어도 와일드카드(*) 처럼 무적으로 싹다 값 변화시키는 거임???

// gpt 정담 : 헐...var만 전역/함수 이어지게 재할당 가능한거네... 근데 왜 속성이 계속 string 이야?




// let , const(재선,재할 불가능하니 에러 뜨지 않나?) 으로 같은 함수 테스트. const는 재할당 안되는데 함수 내에서 그냥 e=100; 하면 예외로 재할당 해주나?,, 그럼 무슨 의미가 있남...
// 함수 작성만 하고 호출 말고 걍 e 찍어보기
// let과 var의 차이: let과 const는 블록 스코프를 따르기 때문에 함수나 블록 내에서만 유효합니다. 그러나 var는 함수 스코프를 따르고, 함수 내부가 아닌 곳에서 선언된 경우 전역 스코프에 영향을 미칩니다. -> let,const는 전역이랑 함수 내부랑 분리돼서 값이 변하고 하지 않고 , var는 영행을\\\영행영향을 다받는다? 블록 스코프 머시기 뭔말이야


hahahaahaha = 1;
console.log(hahahaahaha); // 1 
// 뭐지.,,, 전역에서도 var let con 없이 선언이 가능해....
hahahaahaha = 60; 
console.log(hahahaahaha); // 60
// 재할당 까지...

var lol;
console.log(lol); // undefined

hehehehehehe;
console.log(hehehehehehe); // 이거는 hehehehehehe is not defined

//! 그러니까, var let const 없이 선언만 하는건 안되고, 선언+할당 은 된다?..뭔 그지같은...왜 굳이? 이유가 머야., 

kkk;
console.log(kkk); // kkk is not defined

const kkk = 1;
console.log(kkk); // 1

kkk =199;
console.log(kkk); // Assignment to constant variable.

