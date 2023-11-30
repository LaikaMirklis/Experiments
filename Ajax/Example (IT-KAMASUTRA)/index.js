const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");
const getTasksButton = document.querySelector("#get-tasks");

clickMeButton.addEventListener("click", () => {
  const promise = getImages(pageNumberEl.value);
  promise.then(onImagesReceived);
});

getTasksButton.addEventListener("click", () => {
  const promise = getTasks();
  promise.then(onTasksReceived);
});

createTask("learn JS").then((data) => {
  debugger;
  console.log(data);
});

function onImagesReceived(array) {
  array.forEach((el) => {
    const img = document.createElement("img");
    img.src = el.thumbnail;
    document.querySelector("#result").appendChild(img);
  });
}

function onTasksReceived(tasks) {
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = task.title;
    document.querySelector("#tasks-result").appendChild(li);
  });
}
