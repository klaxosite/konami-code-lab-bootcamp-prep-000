const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0
function init() {
  // your code here
  function onKeyDownHandler(e){
  const key = e.key
  
  if (key === alphabet[index]){
    index++;
    if(index ===alphabet.length){
      alert("KONAMI!!! ")
      index = 0
    }
  } else {
    index = 0
  }
}
}

