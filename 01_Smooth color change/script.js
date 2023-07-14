let inputText = prompt("Введіть текст", "З днем родини! (який був позавчора)");
document.getElementById("input-text").innerHTML = inputText;

let col;

function changeColor() {
  const inputText = document.getElementById("input-text");
  const computedStyle = window.getComputedStyle(inputText);
  const textColor = computedStyle.getPropertyValue("color");

  if (textColor === "rgb(255, 255, 255)") {
    col = "transparent";
    document.getElementById("button").innerHTML = "Не переливайся";
  } else {
    col = "white";
    document.getElementById("button").innerHTML = "Переливайся";
  }

  inputText.style.color = col;
}
