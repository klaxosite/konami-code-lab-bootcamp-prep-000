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
  
  document.body.addEventListener("keydown", (event) =>{
  
  //variable for keypresses  
  const key = event.key;
  
  //index increments at 0 initially
  let index = 0;
  if (key === codes[index]){
    index++;
    //increments index after each key that's press that is correct
    if(index === codes.length){
      alert("KONAMI!!! ");
      index = 0;
    }
  } else {
    index = 0;
  }
  console.log('key', key);
}, false)
}

