import { show } from "./dialog.js";
let btn = document.getElementById("show");
btn.addEventListener("click", () =>{
    show("Hi");
})