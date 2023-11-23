function getImages() {
  let input = document.getElementById("input");
  let inputValue = input.value;

  let URl = `https://jsonplaceholder.typicode.com/photos?albumId=${inputValue}`;

  $.ajax(URl, {
    success: function (data) {
      data.forEach((user) => {
        const img = document.createElement("img");
        img.src = user.thumbnailUrl;
        document.getElementById("images").appendChild(img);
      });
    },
  });
}

function deleteImages() {
  document.getElementById("images").innerHTML = "";
}
