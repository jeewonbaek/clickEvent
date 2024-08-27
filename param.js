
function add (a,b) {
  return a+b;
}

var result = add(1,2);
console.log(result);
// 왜 콘솔로그 코드 없으나 있으나 터미널에 찍히는거지??



function letter (a,b) {
  return a+b;
}

// var final = letter("히","히");

var a = "아";
var b = "놔";
// var a,b 를 함수 전에 배치해도 소용이 없음. -> 그렇다면 함수는 배치 순서에 구애받지 않는다는 뜻인가?

// console.log(letter); 
// [Function: letter]

letter(); // 아무것도 안나옴옴
// a,b 값을 지정 해주면 알아서 값이 대입되어 나오는 줄 알았음

var test = letter(a,b);
// letter 하고 ()안에 param 을 안넣어줘성  안되었던 거구나!...
// console.log(test);
console.log(letter(a,b));
// var test 로 재 선언 하든, 그냥 함수 자체에 param 넣어서 호출하던 똑같이 코솔에 찍힘


// console.log(final);

// 만약 param 값을 지정 안해준다면?

function whatIf (q,w) {
  return q+w;
}

// console.log(whatIf()); //NaN
// console.log(whatIf); //[Function: whatIf]
// var so = whatIf(q,w); // ReferenceError: q is not defined
// console.log(so);
var hehe = whatIf("q","w"); // ReferenceError: q is not defined
console.log(hehe);
// var num = whatIf(1,2); // ReferenceError: q is not defined
// console.log(num); 

// 왜 숫자나 qw 가 안찍히지?>>> 맨 위애 처럼 되야 하지 안ㄹ나???
// 이유 : whatif() 하고 계속 찍어내니까 값이 잘 안나옴 하나하나 콘솔 찍으면 잘 나옴
// 근데 so/hehe/num 전부 다른 변수명인데 사용한 함수가 같다는 이유로 작동이 안된다고?....
// GPT야 도와줘!~





