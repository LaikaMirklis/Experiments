function getImages(inputValue, successCallback) {
  let URl = `https://jsonplaceholder.typicode.com/photos?albumId=${inputValue}`;

  $.ajax(URl, {
    success: function (data) {
      successCallback(data);
    },
  });
}

// ------------------ lessons code --------------------
// function getImages(pageNumber, successCallback) {
//   $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}`, {
//     success: function (data) {
//       successCallback(data);
//     },
//   });
// }
