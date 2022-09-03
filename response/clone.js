const request = new Request('./download.jpg');
fetch(request).then((response) =>{
    const response2 = response.clone();

    response.blob().then((res)=>{
       const url = URL.createObjectURL(res);
       img = document.createElement('img');
       img.src = url;
       document.body.appendChild(img);
    })
    response2.blob().then((res)=>{
        const url = URL.createObjectURL(res);
        img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
     })
})