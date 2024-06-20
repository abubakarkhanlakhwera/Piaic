// //
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// //
// for (let i = 0; i <= 5; i++) {
//     console.log(i);  
// }
//dry run(Use paper and pen to understand the code)

// for(i=1 ; 1 <= 15 ; i++){
//     if( i%2 !== 0){
//         console.log(`${i} is odd.`)
//     }else{
//         console.log(`${i} is even.`)
//     }
// }

//

// for(i=2;i<=10;i++){
//     if(i%2 == 0){
//         console.log(i);
//     }

// }
//

// for(i=5;i<=50;i++){
//     if(i%5 == 0){
//         console.log(i);
//     }

// }

//

// const favMovie = "avatar";

// let guess = prompt("guess my favourite movie");

// while((guess != favMovie) && (guess != "quit" )){
//     guess = prompt("Wrong guess  try again.");
// }

// if(guess == favMovie){
//     alert("congrats!");
// }

//
// let i=1;
// while(i <= 5){
//     if(i == 3){
//         break;
//     }
//     i++;
// }

//

// let fruits = ["mango","apple","banan","banana","litchi","flour","flower","orange","biscuit"];

// for(let i=0 ; i <fruits.length ; i++){
//     console.log(i,fruits[i]); 
// }
// let fruits = [["mango","apple","banan","banana"],["litchi","flour","flower","orange","biscuit"]];

// for(let i=0; i<fruits.length; i++){
//     console.log(`List #{i}`);
//     for(let j=0; j<fruits[i].length; j++){
//         console.log(fruits[i][j]);
//     }
// }

// let student = [["aman",2],["shradha",5]];

// for(let i = 0 ; i<student.length ; i++){
//     for( j=0; j<student[i].length; j++){
//         console.log(student[i][j])
//     }
// }

//

// let fruits = ["mango","apple","banan","banana","litchi","flour","flower","orange","biscuit"];

// for(fruit of fruits){
//     console.log(fruit)
// }
// for(char of "mango"){
//     console.log(char)
// }

//

// let fruits = [["mango","apple","banan","banana"],["litchi","flour","flower","orange","biscuit"]];

// for (list of fruits) {

//     for(fruit of list){
//         console.log(fruit);
//     }
    
// }

let todo = [];

let req = prompt("Please enter your request");

while(true){
    if(req == "quit"){
        console.log("qitting app");
        break;
    }
    if(req == "list"){
        console.log("--------");
        for(let i=0; i<todo.length ; i++){
            console.log(i , todo[i]);
        }
        console.log("--------");
    }else if(req == "add"){
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx = prompt("Please enter the task index");
        todo.splice(idx , 1)
        console.log("Task deleted");
    }else{
        console.log("Wrong request");
    }
    
    req = prompt("Please enter your request.")
}

console.log(req);

