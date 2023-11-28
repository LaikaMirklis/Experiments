function getImages(inputValue) {
  let URl = `https://jsonplaceholder.typicode.com/photos?albumId=${inputValue}`;
  const promise = axios.get(URl);
  return promise.then((response) => {
    return response.data;
  });
}

// ------------------ lessons code --------------------
// function getImages(pageNumber) {
//   const promise = axios.get(
//     `https://repetitora.net/api/JS/Images?page=${pageNumber}`
//   );
//   return promise.then((response) => {
//     return response.data;
//   });
// }
