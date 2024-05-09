function compareTexts(leftId, rightId) {
  let leftArray = getListOfWords(leftId);
  document.getElementById(rightId).value = leftArray;
  // let rightArray = getListOfWords(rightId);
  // let sameWords = [];
  // leftArray.forEach((word) => {
  //   if (rightArray.includes(word)) sameWords.push(word);
  // });
  // console.log(sameWords);
  // console.log(sameWords.length);
}

function getListOfWords(id) {
  const text = document.getElementById(id).value;
  let changedText = text
    .toLowerCase()
    .replace(/[“”"'\\()\/?–+;:_&%$£0-9~,.\-]/g, "") //~
    .replace(/ ‘\b|\n|’ /g, " ");
  let wordsArray = changedText.split(" ");
  let numberOfWords = {};
  let wordsList = [];
  wordsArray.forEach((word) => {
    if (numberOfWords.hasOwnProperty(word)) {
      numberOfWords[word] += 1;
    } else {
      if (word != "") {
        numberOfWords[word] = 1;
        wordsList.push(word);
      }
    }
  });
  // delete numberOfWords[""];
  // console.log(numberOfWords);
  return changedText;
}

// script to delete markers in page (https://zno.osvita.ua/master/english/270/)
let markers = document.getElementsByClassName("marker");
for (m of markers) {
  m.innerHTML = " ";
}
