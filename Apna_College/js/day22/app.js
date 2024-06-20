console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelectorAll("div a"));

let links = document.querySelectorAll(".box a");

for(let i = 0 ; i < links.length; i++){
    links[i].style.color = "purple";
}