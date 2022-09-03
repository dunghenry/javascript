const oldRequest = new Request("https://github.com/mdn/content/issues/12959", {
  headers: { From: "webmaster@example.org" },
});
console.log(oldRequest.headers.get("From")); // "webmaster@example.org"
const newRequest = new Request(oldRequest, {
  headers: { From: "developer@example.org" },
});
console.log(newRequest.headers.get("From")); // "developer@example.org"

const myOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'image/jpeg',
    },
    mode: 'cors',
    cache: 'default',
  };
const myRequest = new Request('./download.jpg', myOptions);
fetch(myRequest, myOptions).then((response) => {
    console.log(response);
})


const copy = new Request(myRequest);