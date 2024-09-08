// 왜 let 은 안되는가에 대하여..

let heung = 46;

function Age (jee) {
  jee = 20;
  return jee;
}

console.log(Age(heung)); // 20

