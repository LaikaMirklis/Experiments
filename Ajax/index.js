const getImagesButton = document.getElementById("getButton");
const deleteImagesButton = document.getElementById("deleteButton");
const input = document.getElementById("input");

getImagesButton.addEventListener("click", () => {
  const promise = getImages(input.value);
  promise.then(onDataReceived);
});
deleteImagesButton.addEventListener("click", deleteImages);

function onDataReceived(array) {
  array.forEach((user) => {
    const img = document.createElement("img");
    img.src = user.thumbnailUrl;
    document.getElementById("images").appendChild(img);
  });
}

function deleteImages() {
  document.getElementById("images").innerHTML = "";
}

// ------------------ lessons code --------------------
// const resultBlock = document.querySelector("#result");
// const pageNumberEl = document.querySelector("#page-number");
// const clickMeButton = document.querySelector("#click-me");
// clickMeButton.addEventListener("click", () => {
//   const promise = getImages(pageNumberEl.value, onDataReceived);
//   promise.then(onDataReceived);
// });

// function onDataReceived(array) {
//   array.forEach((el) => {
//     const img = document.createElement("img");
//     img.src = el.thumbnail;
//     document.querySelector("#result").appendChild(img);
//   });
// }
