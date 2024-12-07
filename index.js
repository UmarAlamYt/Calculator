let inp = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let str = "";

let arr = Array.from(buttons).forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if(e.target.innerText == "=") {
      str = eval(str);
      inp.value = str;
    } else if(e.target.innerText == "AC") {
      str = "";
      inp.value = str;
    } else if(e.target.innerText == "DEL") {
      str = str.substring(0, str.length-1);
      inp.value = str;
    } else {
      str += e.target.innerText;
      inp.value = str;
    }  
    
  });
});
