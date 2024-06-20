//
// function hello(){
//     console.log("Hello");
// }
 
// hello();
// hello();

// function printName(){
//     console.log("Ahmad");
// }

// printName();

// function print1to5(){
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }

// print1to5();

// function isAdult(){
//     let age =18;
//     if(age >= 18){
//         console.log("adult");
//     }else{
//         console.log("not adult")
//     }
// }

// function printPoem(){
//     console.log("Twinkle Twinkle, little star");
//     console.log("How I wander what you are");
// }

// printPoem();

// function diceRoll(){
//     let x = Math.ceil(Math.random()*10)+1;
//     while(x <= 6){
//         console.log(x);
//         break;
//     }
// }

// diceRoll();

//

// let name ;
// let age ;
// function printInfo(name , age){
//     console.log(`${name}'s age is ${age}.`);
// }

// printInfo( prompt("Enter your name."),prompt("Enter your age."));
// let a,b;
// function sum(a,b){
//     console.log(a+b);
// }

// sum(parseInt(prompt("Enter First number")),parseInt(prompt("Enter second number .")))

// 

// let n , k , table;

// function Table(n){
//     for(k =1 ; k <= 10; k++){
//         table = n * k ;
//         console.log(table);
//     }
// }

// Table( parseInt(prompt("Enter the number of which you want to print table. ")));

// let n,i,k = 0;

// function getSum(n){
//     for(i =1 ; i <= n ; i++){
//         k += i;
        
//     }
//     return k;
// }

// console.log((getSum(parseInt(prompt("Enter the nmber.")))));

//

// let  i , k = "";

// let arr = ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"];

// function concatination(arr){
//     for(i=0;i<arr.length;i++){
        
//         k += arr[i];
        
//     }
//     return k; 
// }

// console.log(concatination(arr));

// 

// let sum = function(a,b){
//     return a+b;
// }

// console.log(sum(1,2));



// function multipleGreet(func,count ){
//     for(let i=1; i <= count ; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }
// multipleGreet(greet,100);

//

// let odd = function(n){
//     console.log(n%2 !== 0);
// }

// let even = function(n){
//     console.log(n%2 === 0);
// }

// function oddOrEvenFactory(request){
//     if(request == 'odd'){
//         let odd = function(n){
//             console.log(n%2 !== 0);
//         }

//         return odd;
//     }else if(request == 'even'){
//         let even = function(n){
//             console.log(n%2 === 0);
//         }

//         return even;
//     }else{
//         console.log("Wrong request");
//     }
// }

// let request = prompt("Enter 'even' or 'odd' keyword");
// let func = oddOrEvenFactory(request);
// let k = parseInt(prompt(`Enter ${request} number.`));
// console.log(func(k));

//

const calculator = {
    add: function(a,b){
        return a + b;
    },
    sub: function(a,b){
        return a - b;
    },
    mul: function(a,b){
        return a * b;
    },
    div: function(a,b){
        return a / b;
    }
}
let a = parseInt(prompt("Enter first number."));
let b = parseInt(prompt("Enter second number."));
let operator = prompt("Enter the operator.")

if(operator === '+'){
    console.log(calculator.add(a,b));
}else if(operator === '-'){
    console.log(calculator.sub(a,b));
}else if(operator === '*'){
    console.log(calculator.mul(a,b));
}else if(operator === '/'){
    console.log(calculator.div(a,b));
}else{
    console.log("Wrong operator opps!")
}


