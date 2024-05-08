function getListOfWords() {
  const text = document.getElementById("text").value;
  let text1 = text
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\./g, "")
    .replace(/\n/g, " "); //removes , and .
  let splitedText = text1.split(" ");
  let numberOfWords = {};
  splitedText.forEach((world) => {
    if (numberOfWords.hasOwnProperty(world)) {
      numberOfWords[world] += 1;
    } else {
      numberOfWords[world] = 1;
    }
  });
  console.log(numberOfWords);

  let table = document.getElementById("table");

  for (const [world, number] of Object.entries(numberOfWords)) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = world;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = number;
    tr.appendChild(td2);

    table.appendChild(tr);
  }
}

// trim

// script to delete markers in page (https://zno.osvita.ua/master/english/270/)
let markers = document.getElementsByClassName("marker");
for (m of markers) {
  m.innerHTML = " ";
}
