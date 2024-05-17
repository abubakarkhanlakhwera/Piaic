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
let userAge : number  =  Number(prompt("please enter your age:"));
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


//q15
function counter(scores:number[]):void{
    if(scores.length === 0){
        console.log("The input list is empty.");
        return;
    }
    let max_score = scores[0];
    let min_score = scores[0];
    let exceed_count = 0;
    let below_count = 0 ;
    for(const score of scores){
        if(score > max_score){
            max_score = score;
            exceed_count++;
        }else if(score < max_score){
            min_score = score;
            below_count++;
        }
    }
    console.log(`Exceeded maximum score ${exceed_count} times.`);
    console.log(`Fell below the minimum score ${below_count} times.`);
}
//q16
function removeFalsyItems(arr : any[] ) : any [] {
    return arr.filter(Boolean);
}
const myArray = [7,'ate','',false,9,NaN];
const cleaned_array = removeFalsyItems(myArray);
console.log(cleaned_array);
//q17
const b1 = [ 1,2,3];
const b2 = [4,5,6];
const concatinated_array = [...b1,...b2]
console.log(concatinated_array);
//q18

function sumOfElements(arr: number[], even: boolean): number {
    return arr
        .filter(num => even ? num % 2 === 0 : num % 2 !== 0)
        .reduce((sum, num) => sum + num, 0);
}


console.log(sumOfElements([1, 2, 3, 4, 5], true));  
console.log(sumOfElements([1, 2, 3, 4, 5], false)); 
function funtioncheck(arr:number[],target:any):void{
    for(let i=0 ; i <= arr.length;i++){
        
    }
}
//q20
function findSmallestNumber(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    return Math.min(...arr);
}


console.log(findSmallestNumber([5, 3, 8, 1, 2])); 
console.log(findSmallestNumber([-10, 0, 5, -2])); 
//q21
function calculateProduct(){
    let h = [ 1,2,3,4];
    let product = h[0]*h[1]*h[2]*h[3];
    return product;
}
console.log(calculateProduct());
//q22
function filterfunction(arr:string[],n:number): string[]{
    
    return  arr.filter((str) => str.length>n);
   

}
const f = ['h5iieitp','g','hi','bye'];
const minlength =4;
const filtred_words = filterfunction(f , minlength);
console.log("Filtered words are ",filtred_words);
//q23
// function findDuplicates(arr) {
//     const duplicates = [];
//     const seen = new Set();
//     const seenDuplicates = new Set();

//     for (const item of arr) {
//         if (seen.has(item) && !seenDuplicates.has(item)) {
//             duplicates.push(item);
//             seenDuplicates.add(item);
//         } else {
//             seen.add(item);
//         }
//     }

//     console.log(duplicates);
// }


// findDuplicates([1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 3]);
//q24
function incrementAll(arr: number[]): number[] {
    return arr.map((num) => num + 1);
}


const originalArray = [1, 2, 3];
const incrementedArray = incrementAll(originalArray);
console.log("Incremented array:", incrementedArray);
//q25
function countOccurrences(arr: any[], target: any): number {
    return arr.filter((item) => item === target).length;
}

// Example usage:
const numberss = [1, 2, 2, 3, 2, 4];
const targetNumber = 2;
const occurrences = countOccurrences(numberss, targetNumber);
console.log(`Occurrences of ${targetNumber}: ${occurrences}`);
//q26
function isSorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [3, 1, 4, 2, 5];
console.log("Is sorted array sorted?", isSorted(sortedArray)); // true
console.log("Is unsorted array sorted?", isSorted(unsortedArray)); // false
//q27
function formatNames(names: string[]): string {
    if (names.length <= 1) {
        return names.join(", ");
    } else {
        const lastTwoNames = names.slice(-2).join(" and ");
        const remainingNames = names.slice(0, -2).join(", ");
        return `${remainingNames}, ${lastTwoNames}`;
    }
}


const nameList = ["Alice", "Bob", "Charlie", "David"];
const formattedString = formatNames(nameList);
console.log("Formatted names:", formattedString);
//q28
function fahrenheitToCelsius(temps: number[]): number[] {
    return temps.map(temp => (temp - 32) * 5 / 9);
}


console.log(fahrenheitToCelsius([32, 68, 104])); 
//q29
function minMaxAverage(arr: number[]): { min: number, max: number, average: number } {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    return { min, max, average };
}


console.log(minMaxAverage([1, 2, 3, 4, 5])); 
//q30
function swapElements<T>(arr: T[], index1: number, index2: number): T[] {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Invalid indices");
    }
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}


console.log(swapElements([1, 2, 3, 4], 1, 3)); 
//q31
function countCharacterOccurrences(str: string, char: string): number {
    if (char.length !== 1) throw new Error("The second argument must be a single character");
    return str.split('').filter(c => c === char).length;
}


console.log(countCharacterOccurrences("hello world", "o")); 
//q32
interface Todo {
    task: string;
    completed: boolean;
}

const todoList: Todo[] = [
    { task: "Buy groceries", completed: false },
    { task: "Clean the house", completed: true },
    { task: "Pay bills", completed: false },
];

function logIncompleteTasks(todos: Todo[]): void {
    todos.filter(todo => !todo.completed).forEach(todo => console.log(todo.task));
}


logIncompleteTasks(todoList); 
//q33
function sortArray(arr: number[]): number[] {
    return arr.slice().sort((a, b) => a - b); 
}


console.log(sortArray([5, 3, 8, 1, 2])); 
//q34
function logArrayInReverse(arr: any[]): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}


logArrayInReverse([1, 2, 3, 4]); 
//q35
function basicCalculator(operand1: number, operand2: number, operator: string): number {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 === 0) throw new Error("Division by zero is not allowed");
            return operand1 / operand2;
        default:
            throw new Error("Invalid operator");
    }
}


const operand1 = 10;
const operand2 = 5;
const operator = '+';

