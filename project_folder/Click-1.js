// GPT 코드 ver.1

// // 'even' div 안의 버튼들 선택
// let evenNumber = document.getElementById('even').getElementsByTagName('button');

// // 'odd' section 안의 버튼들 선택
// let oddNumber = document.getElementById('odd').getElementsByTagName('button');

// // 배경색을 빨간색으로 변경하는 함수
// function changeToRed() {
//   document.body.style.backgroundColor = 'red';
// }

// // 배경색을 파란색으로 변경하는 함수
// function changeToBlue() {
//   document.body.style.backgroundColor = 'blue';
// }

// // 'even' div의 버튼들에 클릭 이벤트 리스너 추가
// function evenToRed() {
//   for (let i = 0; i < evenNumber.length; i++) {
//     evenNumber[i].addEventListener('click', changeToRed);
//   }
// }

// // 'odd' section의 버튼들에 클릭 이벤트 리스너 추가
// function oddToBlue() {
//   for (let i = 0; i < oddNumber.length; i++) {
//     oddNumber[i].addEventListener('click', changeToBlue);
//   }
// }

// // 함수 호출
// evenToRed();
// oddToBlue();


// GPT 코드 ver.2


// 'even' div 안의 버튼들 선택
let evenButtons = document.getElementById('even').getElementsByTagName('button');

// 'odd' section 안의 버튼들 선택
let oddButtons = document.getElementById('odd').getElementsByTagName('button');

// 배경색을 빨간색으로 변경하는 함수
function changeToRed() {
  document.body.style.backgroundColor = 'red';
}

// 배경색을 파란색으로 변경하는 함수
function changeToBlue() {
  document.body.style.backgroundColor = 'blue';
}

// 'even' div의 버튼들에 클릭 이벤트 리스너 추가
function addEvenButtonEvents() {
  for (let i = 0; i < evenButtons.length; i++) {
    evenButtons[i].addEventListener('click', changeToRed);
  }
}

// 'odd' section의 버튼들에 클릭 이벤트 리스너 추가
function addOddButtonEvents() {
  for (let i = 0; i < oddButtons.length; i++) {
    oddButtons[i].addEventListener('click', changeToBlue);
  }
}

// 페이지가 로드된 후에 이벤트 리스너를 추가합니다
window.onload = function() {
  addEvenButtonEvents();
  addOddButtonEvents();
};