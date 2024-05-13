function formatText(leftId, rightId) {
  const text = document.getElementById(leftId).value;
  let changedText = text
    .toLowerCase()
    .replace(/[“”"'\\()\/?–+;:_&%$£0-9~,\-!—]/g, "")
    .replace(/ ‘\b|\n|’ |\./g, " ");
  document.getElementById(rightId).value = changedText;
}

// async function getWordList(examText) {
function getExamWords(examText) {
  let wordArray = examText.split(" ");
  let numberOfWords = {};
  let result = [];
  wordArray.forEach((word) => {
    if (numberOfWords.hasOwnProperty(word)) {
      numberOfWords[word] += 1;
    } else {
      if (word != "") {
        numberOfWords[word] = 1;
        result.push(word);
      }
    }
  });
  return result;
}

function getExamWordsList() {
  console.time("comparing");

  let result = [];
  exams.forEach((obj) => {
    let wordLists = getExamWords(obj.examText);
    result.push({ examName: obj.examName, words: wordLists });
  });

  console.log(result);
  console.timeEnd("comparing");
  return result;
}

function asyncGetWordListsArray() {
  async function asyncGetWordList(examText) {
    let wordsArray = examText.split(" ");
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
    return wordsList;
  }

  console.time("comparing");

  let wordListsArray = [];
  exams.forEach((obj) => {
    asyncGetWordList(obj.examText).then((wordLists) => {
      wordListsArray.push({ examName: obj.examName, words: wordLists });
      if (wordListsArray.length == exams.length) {
        console.timeEnd("comparing");
      }
    });
  });

  console.log(wordListsArray);
}

function compareWords() {
  let examWordsList = getExamWordsList();
  let sameWords = new Map();

  for (i = 0; i < examWordsList.length - 1; i++) {
    for (j = i + 1; j <= examWordsList.length - 1; j++) {
      examWordsList[i].words.forEach((word) => {
        if (examWordsList[j].words.includes(word)) {
          let sameWord = sameWords.get(word);
          if (sameWord) {
            if (!sameWord.includes(examWordsList[j].examName)) {
              sameWord.push(examWordsList[j].examName);
            }
          } else {
            sameWords.set(word, [
              examWordsList[i].examName,
              examWordsList[j].examName,
            ]);
          }
        }
      });
    }
  }

  let sortedSameWords = Array.from(sameWords)
    .sort((a, b) => a[1].length - b[1].length)
    .reverse();

  console.log(sortedSameWords);
  console.log(sameWords.length);

  let table = document.getElementById("table");

  sortedSameWords.forEach((word) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = word[0];
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = word[1].length; // or toString();
    tr.appendChild(td2);

    table.appendChild(tr);
  });
}

// script to delete markers in page (https://zno.osvita.ua/master/english/270/)
let markers = document.getElementsByClassName("marker");
for (m of markers) {
  m.innerHTML = " ";
}
