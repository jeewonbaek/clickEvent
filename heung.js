// 왜 let 은 안되는가에 대하여..

let heung = 46;
let jee;


function Age (jee) {
  var jee = 20;
  return jee;
}

console.log(Age(jee)); // undefined 뜨는 이유 = 선언도 안했지... 값도 없지... 선언만 하고 값 없어도 일단 세상에 존재하게 되니까 20이 나오는데, 선언 조차 안되어서 세상에 존재하지 않아서 UNDEFINED  -> let jee; 쓰면 20 나옴.
console.log(Age(heung)); // 20

