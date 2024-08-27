// 문제 - 짝수번째 버튼은 body 엘리먼트의 배경을 red로, 홀수번째 버튼은 body 엘리먼트의 배경을 blue로 변경시켜야 합니다

// div -> 짝수(evenNumber) red
// section -> 홀수(oddNumber) blue

let evenNumber = document.getElementById('even').getElementsByTagName('button');
let oddNumber = document.getElementById('odd').getElementsByTagName('button');
// 오타... 아오 오타. getElementsById 여기에 s는 뭐니!!!


// param 값에 even이나 odd 가 들어오면 if문 ===even 이런 식으로 일치하면 red ===odd 면 blue 두가지 기능을 하는 펑션도 만들어보기. red 용, blue 용 따로 만드는거보다 이게 더 효율적이지 않나?,,,
// 나의 추리로는, 만약 even과 odd 가 클릭될 시 나오는 칼라를 뒤바꾸고 싶을 때 유동적으로 쓸 수 있는 것은 red 와 blue 기능의 함수를 따로 만들고, param 값에 무엇이 들어가느냐에 따라 해당 기능이 발동되는 것이 좀 더 편리하다. 그리고 param 값에 even 이나 odd 라고 특정 param 값을 박아버리면 나중에 일일이 수정을 해야하며, 만약 even 에서 evenddddd 로 이름을 변경하게 되면, 해당 펑션으로 다시 가 param 에 쓰여진 기존 even이란 이름도 evenddd로 변경 해줘야 한다. 비효율적. 그래도 비효율 적인 펑션도 함 만들어 보자!

// 질문 : 비효율적인 코드를 꼭 쓰는 상황? -> 회원 id 유출이 절대 안되야 할때. 실수로 함수햇갈려서 개인장보 유출 될 수도 잇으니 유출 될 수 있는 펑션에는 절대 개인정보가 들어갈 수 없게끔.....



function onlyEvenToRed (evenNumber) {
  document.body.style.backgroundColor = 'red';
}

// onlyEvenToRed();
// 왜 클릭하지도 않았는데 키자마자 red로 되지?...
// 클릭이벤트는 안널고, 백그라운드 칼라만 바꾸는 주문이라서!
// 근데 왜 () 안에 evennumber 쓰지도 않았는데, 왜 적용되지?.,
// onlyEvenToRed(evenNumber);
// onlyEvenToRed(); 이거를 하나 onlyEvenToRed(evenNumber); 이거를 하나 결과는 똑같네?
// param 에 대해 자세히 알아봐여 갰다. param 값이 들어가야먄! 이 아니라, 그냥 호출해도 되지만, param 값이 들어가도 된다 이런느낌인다?
// 어 그러면 param 값에 oddnumber 가 들어가면 어케 되지?
// onlyEvenToRed(oddNumber);
// 는 여전함. param 값은 쥐뿔도 연관 없다는 건가...






// function changeToRed () {
//   document.body.style.backgroundColor = 'red';


// }



// function evenToRed () {

// for (let i = 0; i < evenNumber.length; i++) {
//   evenNumber[i].addEventListener('click', changeToRed);
// }

// }

// evenToRed();

