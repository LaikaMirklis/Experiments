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
