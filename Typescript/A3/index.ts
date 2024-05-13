//Easy
//q1
console.log("Hello worls");
//q2
let temperature = 13;
if(temperature  < 20 ){
    console.log("It is cold");
}
//q3
let apple = 10;
var n = 3 ;
var remaining_apples = apple - n ;
console.log(remaining_apples)
//q4
var First_name = 'Muhammad';
var Last_name = 'Ali';
var Full_name = `${First_name} ${Last_name}`;
console.log(Full_name);
//q5
let num1 = 5;
let num2 =3 ;
if(num1 > num2){
    console.log("Yes");
}else{console.log("NO");

}
/////Medium
//q6
function calculate_Area(radius:number):number{
    return Math.PI *radius*radius;
}
const radius = 5;
const area = calculate_Area(radius);
console.log(`The area of the circle is ${area}`);
//q7
for(let i = 1 ; i <= 20 ; i++){
    let output : string = '';
    if(i % 3 == 0){
        output += 'Fizz';
    }
    if(i % 5 == 5 ){
        output += 'Buzz';

    }
    console.log(output || i);    
}
//q8
let temp : number[] = [23,31,27,35,29];
let highest_temp : number = temp[0];
for(let i = 1 ; i<= temp.length;i++){
    if(temp[i]>highest_temp){
        highest_temp= temp[i];
    }

}
console.log(`The highest temp is ${highest_temp}`);
//q9
let userAge : number  =  parseInt(prompt("please enter your age:"));
if(!isNaN(userAge)){
    if(userAge<18){
        console.log("You are minor .");

    }else{
        console.log("You are an adult.");

    
    }
}else{
    console.log("Invalid input. Please enter a numerical value fro age.");

}
//q10
function count_positive_numbers(numbers : number[]):number{
    let count: number = 0 ;
    for(let num of numbers){
        if(num > 0){
            count++;
        }
    }
    return count;
}
const array : number[]=[-2,3,4,5,-7,0,4];
const positive_numbers : number = count_positive_numbers(array);
console.log(`The count of positive number is : ${positive_numbers}`);
//q11
function filterWordStartingwithA(words:string[]): string[]{
    return words.filter(word => word.startsWith('a'));
}

const words_array: string[] = ['apple','banana','apricot','cherry','avacado'];
const WordStartingwithA : string[] = filterWordStartingwithA(words_array);
console.log(WordStartingwithA);
//q12
let fruits : string[] = ['apple','banana','apricot','cherry','avacado'];
if(fruits.length >= 2){
    console.log(`The second to last fruit is ${fruits[fruits.length - 2]}`);
}else{
    console.log(`The  array doesnot have enough elements.`)
}
//q13
function squareNumbers(numbers : number[]) : number[]{
     return numbers.map(number => number * number);
}
const numbersAray: number[] = [1,2,3,4,5];
squareNumbers(numbersAray);
console.log(squareNumbers)
//q14
function reverseAray(arr){
    var reversedAray = [];
    for(var i = arr.length  - 1; i >=0 ; i--){
        reversedAray.push(arr[i]);
    }
    return reversedAray;
}
var arr = [ 1,2,3,4,5];
var reversedAray = reverseAray(arr
)

//