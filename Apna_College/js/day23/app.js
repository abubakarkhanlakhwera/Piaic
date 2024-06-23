//Events????//

// let btn = document.querySelector("button");
// console.log(btn);

// btn.onclick = function (){
//     console.log('button is clicked');
// };

////////////////////////////////////////////////////////////////////////////

// let btn = document.querySelectorAll("button");


// for(btns of btn){
//     btns.onclick = sayhello;
//     btns.onmouseenter = function(){
//         console.log("bla bla")
//     }
// }

// function sayhello(){
//     console.log('button is clicked');
// };

/////////////////////////////////////////////////////////////////////////////////////

// let btn = document.querySelectorAll("button");
// for(btns of btn){
//     btns.addEventListener('click',sayhello);
//     btns.addEventListener('click',sayName);
//     btns.addEventListener('dblclick',function(){
//         console.log("hi");
//     });
// }
// function sayhello(){
//          console.log('button is clicked');
// };

// function sayName(){

//     console.log("Apna college")
// }

/////////////////////////////////////////////////////////////////////////////////////

// let btn = document.querySelector('button');

// btn.addEventListener("click",function(){
//     let h3 = document.querySelector('h3');
//     let RandomColor = getRandomColor();
//     h3.innerText = RandomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = RandomColor; 
// });
// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);

//     let color = `rgb(${red}, ${green} , ${blue})`;
//     return color;
// }

/////////////////////////////////////////////////////////////////////////////////////

// let p = document.querySelector('p');

// p.addEventListener('click',function(){
//     console.log("hi");
// });

/////////////////////////////////////////////////////////////////////////////////////

//  let btn = document.querySelector('button');

//  btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Buttun is clicked ");
//  });

/////////////////////////////////////////////////////////////////////////////////////

// let input = document.querySelector('input');
// input.addEventListener("keydown",function(event){
//     console.log("code =",event.code);
//     if(event.code == "ArrowUp"){
//         console.log("Character moves forward");
//     }else if(event.code == "ArrowDown"){
//         console.log("Character moves backwards");
//     }else if(event.code == "ArrowLeft"){
//         console.log("Character moves left");
//     }else if(event.code == "ArrowRight"){
//         console.log("Character move right");
//     }
// });

/////////////////////////////////////////////////////////////////////////////////////

// let form = document.querySelector('form');

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("HI!");
// });

/////////////////////////////////////////////////////////////////////////////////////

let form = document.querySelector('form');

form.addEventListener("submit",function(event){
    event.preventDefault();
    let user = document.querySelector('#user');
    let pass = document.querySelector('#pass');

    console.log(user.value);
    console.log(pass.value);
    alert(`Hi there your password is "${pass.value}" "with username "${user.value}"`);
    // let inp = document.querySelector("input");
    // console.dir(inp);
});


