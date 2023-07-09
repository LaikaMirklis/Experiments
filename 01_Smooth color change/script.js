// let inputText = prompt("Введіть текст");
// document.getElementById("input-text").innerHTML = inputText;

let count = 0;
let col;
let intervalID;
function changeColor() {
  if (document.getElementById("input-text").style.color == "black") {
    col = "#f48226";
  } else {
    col = "black";
  }
  document.getElementById("input-text").style.color = col;
}

function buttonClick() {
  count++;
  if (count % 2 == 0) {
    clearInterval(intervalID);
  } else {
    intervalID = setInterval(changeColor, 1000);
  }
}

// add gradient
// rename button
// use data in button instead of function
