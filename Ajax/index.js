const imagesInput = document.getElementById("imagesInput");
const getImagesButton = document.getElementById("getImagesButton");
const deleteImagesButton = document.getElementById("deleteButton");

const tasksInput = document.getElementById("tasksInput");
const createTaskButton = document.getElementById("createTaskButton");
const getTasksButton = document.getElementById("getTasksButton");

getImagesButton.addEventListener("click", () => {
  const promise = getImages(imagesInput.value);
  promise.then(onImagesReceived);
});
deleteImagesButton.addEventListener("click", deleteImages);

getTasksButton.addEventListener("click", () => {
  const promise = getTask();
  promise.then(onTasksReceived);
});

createTask("learn JS").then((data) => {
  debugger;
  console.log(data);
});

// getTasksButton.createTaskButton("click", () => {
//   const promise = createTask(title);
//   promise.then(onTasksReceived);
// });

function onImagesReceived(array) {
  array.forEach((user) => {
    const img = document.createElement("img");
    img.src = user.thumbnailUrl;
    document.getElementById("images").appendChild(img);
  });
}

function deleteImages() {
  document.getElementById("images").innerHTML = "";
}

function onTasksReceived(tasks) {
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = task.title;
    document.getElementById("tasks").appendChild(li);
  });
}
