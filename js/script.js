console.log("Hello world");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".button__themeName");
button.addEventListener("click", () => {
body.classList.toggle("body--brightDark");
themeName.innerText = body.classList.contains("body--brightDark") ? "jasny" : "ciemny";
});