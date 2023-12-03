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

createTaskButton.addEventListener("click", () => {
  const promise = createTask(tasksInput.value);
  promise.then(() => {
    const promise = getTask();
    promise.then(onTasksReceived);
  });
});

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
  const tasksResult = document.getElementById("tasks");
  const imgSrc =
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCukQjsfePNIDInzgdtjas02EQal6vqVvbwMSwfzI8XzhqKVH1";

  tasksResult.innerHTML = "";

  tasks.forEach((task) => {
    let taskDoneCheck = (done) => {
      return done
        ? ` 
        <input type="checkbox" id="${task.id}"  onclick="taskCheck(event)" checked/>
        <s> <label onclick="taskTitleClick(event)" id="label-${task.id}" data-id="${task.id}">${task.title}</label> </s>
    `
        : ` 
        <input type="checkbox" id="${task.id}"  onclick="taskCheck(event)"/>
        <label onclick="taskTitleClick(event)" id="label-${task.id}" data-id="${task.id}">${task.title}</label>
    `;
    };

    tasksResult.innerHTML += `
    <li >
      <div>
        ${taskDoneCheck(task.done)}
      </div>
      <img src="${imgSrc}" id="${task.id}" onclick="taskDelete(event)" />
    </li>
    `;
  });
}

function taskDelete(e) {
  var targetId = e.target.id;
  const promise = deleteTask(targetId);
  promise.then(() => {
    const promise = getTask();
    promise.then(onTasksReceived);
  });
}

function taskTitleClick(e) {
  var targetId = e.target.id;
  let label = document.getElementById(targetId);
  let dataId = label.dataset.id;
  let title = label.textContent;
  label.innerHTML = `
    <input type="text" id="input-${dataId}" value="${title}"> 
    <img src="https://png.pngtree.com/png-clipart/20230817/original/pngtree-update-icon-on-white-background-picture-image_8005789.png" id="${dataId}" onclick="taskUpdate(event)" />
  `;
}

function taskUpdate(e) {
  let targetId = e.target.id;
  let updateInput = document.getElementById(`input-${targetId}`);
  const promise = updateTask(targetId, updateInput.value);
  promise.then(() => {
    const promise = getTask();
    promise.then(onTasksReceived);
  });
}

// тикати на таску - в інпут з'являється текст, чи лейбл стає інпут і з'являється
// кнопка  оновити / чи  зображення чи креате таск змінює текст

function taskCheck(e) {
  let targetId = e.target.id;
  let targetCheck = e.target.checked;
  const promise = updateTask(targetId, undefined, targetCheck);
  promise.then(() => {
    const promise = getTask();
    promise.then(onTasksReceived);
  });
}
