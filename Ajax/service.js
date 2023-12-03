function getImages(inputValue) {
  let URl = `https://jsonplaceholder.typicode.com/photos?albumId=${inputValue}`;
  const promise = axios.get(URl);
  return promise.then((response) => {
    return response.data;
  });
}

function getTask() {
  let URl = `http://127.0.0.1:5000/api/tasks`;
  const promise = axios.get(URl);
  return promise.then((response) => {
    return response.data.tasks;
  });
}

function createTask(taskTitle) {
  let URl = `http://127.0.0.1:5000/api/tasks`;
  const promise = axios.post(URl, { title: taskTitle });
  return promise.then((response) => {
    return response.data.tasks;
  });
}

function deleteTask(taskId) {
  let URl = `http://127.0.0.1:5000/api/tasks/${taskId}`;
  const promise = axios.delete(URl);
  return promise.then((response) => {
    return response.data.tasks;
  });
}

function updateTask(taskId, taskTitle, taskDone) {
  let URl = `http://127.0.0.1:5000/api/tasks/${taskId}`;
  let secondParameter = taskTitle ? { title: taskTitle } : { done: taskDone };
  const promise = axios.put(URl, secondParameter);
  return promise.then((response) => {
    return response.data.tasks;
  });
}
