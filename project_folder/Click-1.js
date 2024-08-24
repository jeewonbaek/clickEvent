// 문제 - 짝수번째 버튼은 body 엘리먼트의 배경을 red로, 홀수번째 버튼은 body 엘리먼트의 배경을 blue로 변경시켜야 합니다

// div -> 짝수(evenNumber) red
// section -> 홀수(oddNumber) blue

let evenNumber = document.getElementById('even').getElementsByTagName('button');
let oddNumber = document.getElementsById('odd').getElementsByTagName('button');

// param 값에 even이나 odd 가 들어오면 if문 ===even 이런 식으로 일치하면 red ===odd 면 blue 두가지 기능을 하는 펑션도 만들어보기. red 용, blue 용 따로 만드는거보다 이게 더 효율적이지 않나?,,,

// 아래는 잘못된 코드.... 하지만 시도는 좋았다 낄낄.
// function evenNumberToRed () {
//   evenNumber.addEventListener("click",onclick,false);
//   background-color : red;

// }
// // 완전 엉터리..GPT 사용해서 배우기

function changeToRed () {
  document.body.style.backgroundColor = 'red';
  // document.html.style.backgroundColor = 'red'; // 실험 . 궁금해
  // 의사 코드 : 나는 버튼을 누르면 

}

changeToRed();

function evenToRed () {

for (let i = 0; i < evenNumber.length; i++) {
  evenNumber[i].addEventListener('click', changeToRed);
}

}

// function 만들었으니, 이제 호출하면 작용하지 않을까?

evenToRed();
// 왜 안되지? 위에 changeToRed 펑션 호출 안해서???
// 그럼 다시 올라가서 호출 해야지~
// 스트레스 받지 말자 허허허허 이거슨 재밌ㄴ느 작업이다!~~~

// 아니 왜 branch 새로 팠다고 파일이 다 이동해???????????????????????


