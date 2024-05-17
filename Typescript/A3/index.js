var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Easy
//q1
console.log("Hello worls");
//q2
var temperature = 13;
if (temperature < 20) {
    console.log("It is cold");
}
//q3
var apple = 10;
var n = 3;
var remaining_apples = apple - n;
console.log(remaining_apples);
//q4
var First_name = 'Muhammad';
var Last_name = 'Ali';
var Full_name = "".concat(First_name, " ").concat(Last_name);
console.log(Full_name);
//q5
var num1 = 5;
var num2 = 3;
if (num1 > num2) {
    console.log("Yes");
}
else {
    console.log("NO");
}
/////Medium
//q6
function calculate_Area(radius) {
    return Math.PI * radius * radius;
}
var radius = 5;
var area = calculate_Area(radius);
console.log("The area of the circle is ".concat(area));
//q7
for (var i = 1; i <= 20; i++) {
    var output = '';
    if (i % 3 == 0) {
        output += 'Fizz';
    }
    if (i % 5 == 5) {
        output += 'Buzz';
    }
    console.log(output || i);
}
//q8
var temp = [23, 31, 27, 35, 29];
var highest_temp = temp[0];
for (var i = 1; i <= temp.length; i++) {
    if (temp[i] > highest_temp) {
        highest_temp = temp[i];
    }
}
console.log("The highest temp is ".concat(highest_temp));
//q9
var userAge = Number(prompt("please enter your age:"));
if (!isNaN(userAge)) {
    if (userAge < 18) {
        console.log("You are minor .");
    }
    else {
        console.log("You are an adult.");
    }
}
else {
    console.log("Invalid input. Please enter a numerical value fro age.");
}
//q10
function count_positive_numbers(numbers) {
    var count = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num > 0) {
            count++;
        }
    }
    return count;
}
var array = [-2, 3, 4, 5, -7, 0, 4];
var positive_numbers = count_positive_numbers(array);
console.log("The count of positive number is : ".concat(positive_numbers));
//q11
function filterWordStartingwithA(words) {
    return words.filter(function (word) { return word.startsWith('a'); });
}
var words_array = ['apple', 'banana', 'apricot', 'cherry', 'avacado'];
var WordStartingwithA = filterWordStartingwithA(words_array);
console.log(WordStartingwithA);
//q12
var fruits = ['apple', 'banana', 'apricot', 'cherry', 'avacado'];
if (fruits.length >= 2) {
    console.log("The second to last fruit is ".concat(fruits[fruits.length - 2]));
}
else {
    console.log("The  array doesnot have enough elements.");
}
//q13
function squareNumbers(numbers) {
    return numbers.map(function (number) { return number * number; });
}
var numbersAray = [1, 2, 3, 4, 5];
squareNumbers(numbersAray);
console.log(squareNumbers);
//q14
//q15
function counter(scores) {
    if (scores.length === 0) {
        console.log("The input list is empty.");
        return;
    }
    var max_score = scores[0];
    var min_score = scores[0];
    var exceed_count = 0;
    var below_count = 0;
    for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
        var score = scores_1[_i];
        if (score > max_score) {
            max_score = score;
            exceed_count++;
        }
        else if (score < max_score) {
            min_score = score;
            below_count++;
        }
    }
    console.log("Exceeded maximum score ".concat(exceed_count, " times."));
    console.log("Fell below the minimum score ".concat(below_count, " times."));
}
//q16
function removeFalsyItems(arr) {
    return arr.filter(Boolean);
}
var myArray = [7, 'ate', '', false, 9, NaN];
var cleaned_array = removeFalsyItems(myArray);
console.log(cleaned_array);
//q17
var b1 = [1, 2, 3];
var b2 = [4, 5, 6];
var concatinated_array = __spreadArray(__spreadArray([], b1, true), b2, true);
console.log(concatinated_array);
//q18
function sumOfElements(arr, even) {
    return arr
        .filter(function (num) { return even ? num % 2 === 0 : num % 2 !== 0; })
        .reduce(function (sum, num) { return sum + num; }, 0);
}
console.log(sumOfElements([1, 2, 3, 4, 5], true));
console.log(sumOfElements([1, 2, 3, 4, 5], false));
function funtioncheck(arr, target) {
    for (var i = 0; i <= arr.length; i++) {
    }
}
//q20
function findSmallestNumber(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    return Math.min.apply(Math, arr);
}
console.log(findSmallestNumber([5, 3, 8, 1, 2]));
console.log(findSmallestNumber([-10, 0, 5, -2]));
//q21
function calculateProduct() {
    var h = [1, 2, 3, 4];
    var product = h[0] * h[1] * h[2] * h[3];
    return product;
}
console.log(calculateProduct());
//q22
function filterfunction(arr, n) {
    return arr.filter(function (str) { return str.length > n; });
}
var f = ['h5iieitp', 'g', 'hi', 'bye'];
var minlength = 4;
var filtred_words = filterfunction(f, minlength);
console.log("Filtered words are ", filtred_words);
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
function incrementAll(arr) {
    return arr.map(function (num) { return num + 1; });
}
var originalArray = [1, 2, 3];
var incrementedArray = incrementAll(originalArray);
console.log("Incremented array:", incrementedArray);
//q25
function countOccurrences(arr, target) {
    return arr.filter(function (item) { return item === target; }).length;
}
// Example usage:
var numberss = [1, 2, 2, 3, 2, 4];
var targetNumber = 2;
var occurrences = countOccurrences(numberss, targetNumber);
console.log("Occurrences of ".concat(targetNumber, ": ").concat(occurrences));
//q26
function isSorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
// Example usage:
var sortedArray = [1, 2, 3, 4, 5];
var unsortedArray = [3, 1, 4, 2, 5];
console.log("Is sorted array sorted?", isSorted(sortedArray)); // true
console.log("Is unsorted array sorted?", isSorted(unsortedArray)); // false
//q27
function formatNames(names) {
    if (names.length <= 1) {
        return names.join(", ");
    }
    else {
        var lastTwoNames = names.slice(-2).join(" and ");
        var remainingNames = names.slice(0, -2).join(", ");
        return "".concat(remainingNames, ", ").concat(lastTwoNames);
    }
}
var nameList = ["Alice", "Bob", "Charlie", "David"];
var formattedString = formatNames(nameList);
console.log("Formatted names:", formattedString);
//q28
function fahrenheitToCelsius(temps) {
    return temps.map(function (temp) { return (temp - 32) * 5 / 9; });
}
console.log(fahrenheitToCelsius([32, 68, 104]));
//q29
function minMaxAverage(arr) {
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    var average = arr.reduce(function (sum, num) { return sum + num; }, 0) / arr.length;
    return { min: min, max: max, average: average };
}
console.log(minMaxAverage([1, 2, 3, 4, 5]));
//q30
function swapElements(arr, index1, index2) {
    var _a;
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Invalid indices");
    }
    _a = [arr[index2], arr[index1]], arr[index1] = _a[0], arr[index2] = _a[1];
    return arr;
}
console.log(swapElements([1, 2, 3, 4], 1, 3));
//q31
function countCharacterOccurrences(str, char) {
    if (char.length !== 1)
        throw new Error("The second argument must be a single character");
    return str.split('').filter(function (c) { return c === char; }).length;
}
console.log(countCharacterOccurrences("hello world", "o"));
var todoList = [
    { task: "Buy groceries", completed: false },
    { task: "Clean the house", completed: true },
    { task: "Pay bills", completed: false },
];
function logIncompleteTasks(todos) {
    todos.filter(function (todo) { return !todo.completed; }).forEach(function (todo) { return console.log(todo.task); });
}
logIncompleteTasks(todoList);
//q33
function sortArray(arr) {
    return arr.slice().sort(function (a, b) { return a - b; });
}
console.log(sortArray([5, 3, 8, 1, 2]));
//q34
function logArrayInReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
logArrayInReverse([1, 2, 3, 4]);
//q35
function basicCalculator(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 === 0)
                throw new Error("Division by zero is not allowed");
            return operand1 / operand2;
        default:
            throw new Error("Invalid operator");
    }
}
var operand1 = 10;
var operand2 = 5;
var operator = '+';
