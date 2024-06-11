 a = 10;
 b = 5;
 //Arithmatic operator
console.log(a +b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
let y = a++;
console.log(y);
console.log(a);
let x = ++b;
console.log(x);
console.log(b);
//Comparison Operator
let age = 23;
console.log(age >= 18);
console.log(age <= 18);
age = 14;
if(age >= 18)
{
    console.log("hi");
}
else if(age <= 2){
    console.log("bu");
}
//Thruthy and falsy
if(true){
    console.log("True")
}else{
    console.log("False")
}
//switch statement
// let color = prompt("Enter the color input");

// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("slow down");
//         break;
//     case "green":
//         console.log("GO");
//         break;
//     default:
//         console.log("Broken Lights.");
// }
let day_of_week = parseInt(prompt("Enter the numer of the day?"))

switch(day_of_week){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        alert("Enter Correct number!");

}





