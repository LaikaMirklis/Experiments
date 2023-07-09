// let inputText = prompt("Введіть текст");
// document.getElementById("input-text").innerHTML = inputText;

let col;

function changeColor() {
  const inputText = document.getElementById("input-text");
  const computedStyle = window.getComputedStyle(inputText);
  const textColor = computedStyle.getPropertyValue("-webkit-text-fill-color");

  if (textColor === "rgb(255, 255, 255)") {
    col = "transparent";
    document.getElementById("button").innerHTML = "Не переливайся";
  } else {
    col = "#FFFF";
    document.getElementById("button").innerHTML = "Переливайся";
  }

  inputText.style.setProperty("-webkit-text-fill-color", col);
}


// З днем родини! (який був вчора)