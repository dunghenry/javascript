// import (moduleSpecifier) => return a promise
let btn = document.getElementById("show");
btn.addEventListener("click", () => {
  (async () => {
    try {
      const dialog = await import("./dialog.js");
      dialog.show("Hi");
    } catch (error) {
      console.log(error);
    }
  })();
});

// or
// btn.addEventListener('click', () =>{
//     import('./dialog.js').then((dialog)=>{
//         dialog.show("Hi");
//     }).catch((error) => console.error(error));
// });
