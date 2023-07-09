let inputText = prompt("Введіть текст");
document.getElementById("input-text").innerHTML = inputText;

let col;

function changeColor() {
  const inputText = document.getElementById("input-text");
  const computedStyle = window.getComputedStyle(inputText);
  const textColor = computedStyle.getPropertyValue("-webkit-text-fill-color");

  if (textColor === "rgb(32, 30, 30)") {
    col = "transparent";
  } else {
    col = "#201e1e";
  }

  inputText.style.setProperty("-webkit-text-fill-color", col);
}

// rename button

// З днем родини! (який був вчора)
