function getImageBlob(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`);
    }
    console.log(response.url);
    return response.blob();
  });
}

let cat = getImageBlob(
  "https://upload.wikimedia.org/wikipedia/commons/4/43/Siberian_black_tabby_blotched_cat_03.jpg"
);
let dog = getImageBlob(
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Golden_retriever_eating_pigs_foot.jpg"
);


Promise.any([cat, dog]).then((response) =>{
    let objectURL = URL.createObjectURL(response);
    console.log(objectURL);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}).catch((error) => console.log(error));
