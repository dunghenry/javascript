async function* getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    yield await res.json();
};
(async() =>{
    let res = getData();
    const data = await res.next();
    console.log(data.value);
})();