// let div = document.querySelector('div');
// let ul = document.querySelector('ul'); 
// let li = document.querySelectorAll('li');

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// li.addEventListener("click",function(){
//     console.log(" li was clicked");
// });

// for(lis of li){
//      lis.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// } 

/////////////////////////////////////////////////////////////////////////////

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click",function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;
    
//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add('delete');
//     item.appendChild(delBtn);

//     ul.appendChild(item);
//     console.log(inp.value);
//     inp.value = '';
// });

// ul.addEventListener('click', function(event){
//     console.dir(event.target.nodeName);
    
//     if(event.target.nodeName == "Button"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("deleted");
//     }
    
// });

// // let delBtns = document.querySelectorAll(".delete");
// // for(delBtn of delBtns){
// //     delBtn.addEventListener("click",function(){
        
// //         let par = this.parentElement;
// //         par.remove();
// //     });
// // }

//////////////////////////////////////////////////////////////////////////////


let gameSeq = [];
let userSeq = [];

let btns = [ "yellow", "red" , "purple" , "green"];
let h2 = document.querySelector('h2');
let started = false;
let level   = 0 ;

document.addEventListener("keypress" ,function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 500);
    
};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 500);
    
};

function levelUp(){
    userSeq = [];
    
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
};

function checkAns(idx){
    // console.log("current level :",level);
    

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
      h2.innerText = `Game Over! press any key to start the game again.`  ; 
      reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    userFlash(btn);
    userColor = btn.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
};



let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}




