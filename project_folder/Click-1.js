// 문제 - 짝수번째 버튼은 body 엘리먼트의 배경을 red로, 홀수번째 버튼은 body 엘리먼트의 배경을 blue로 변경시켜야 합니다

// div -> 짝수(evenNumber)
// section -> 홀수(oddNumber)

let oddNumber = document.getElementsByTagName('section');

function evenNumberToRed () {
let evenNumber = document.getElementsByTagName('div');
  evenNumber.addEventListener("click",onclick,false);
  background-color : red;
}
// 완전 엉터리..GPT 사용해서 배우기

// mdn 예시
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);