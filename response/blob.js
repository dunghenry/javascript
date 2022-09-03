let img = document.querySelector('#img');
const url = "https://upload.wikimedia.org/wikipedia/commons/a/af/Golden_retriever_eating_pigs_foot.jpg"
fetch(url).then((response) =>response.blob())
.then(rs => {
    const objectURL = URL.createObjectURL(rs);
    img.src = objectURL;
    // console.log(objectURL);
})