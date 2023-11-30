function getImages(pageNumber) {
  const promise = axios.get(
    `https://repetitora.net/api/JS/Images?page=${pageNumber}`
  );
  return promise.then((response) => {
    return response.data;
  });
}

function getTasks() {
  const promise = axios.get(
    `https://repetitora.net/api/JS/Tasks?widgetId=5345235`
  );
  return promise.then((response) => {
    return response.data;
  });
}

function createTask(title) {
  const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
    widgetId: 5345235,
    title: title,
  });
  return promise.then((response) => {
    return response.data;
  });
}
