const request = new Request('./data.json');
fetch(request).then((res) => res.json()).then((rs) =>{
    console.log(rs);
});