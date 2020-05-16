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




function init() {
  
  const test = document.body.addEventListener("keydown", onKeyDownHandler)
  function onKeyDownHandler(e){
  const key = e.key;
  let index = 0;
  if (key === alphabet[index]){
    index++;
    if(index ===alphabet.length){
      alert("KONAMI!!! ");
      index = 0;
    }
  } else {
    index = 0;
  }
}
}

