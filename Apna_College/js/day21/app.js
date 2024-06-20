// let arr = [1,2,3,4];

// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);
// arr.forEach((el) => {
//     console.log(el);
// })
///////////////////////////////////////////////////////////////////////////

// let arr = [{
//     name : "aman",
//     marks: 95
// },
// {
//     name: "ahmad",
//     marks: 94.4
// },
// {
//     name: "rajat",
//     marks: 95
// }];

// arr.forEach((student) => {
//     console.log(student);
// })

///////////////////////////////////////////////////////////////////////////

// let num = [ 1,2,3,4];

// let double = num.map((elem)=>{
//     return elem * 2;
// })
// console.log(double);

///////////////////////////////////////////////////////////////////////////

// let student = [{
//     name : "aman",
//     marks: 95
// },
// {
//     name: "ahmad",
//     marks: 94.4
// },
// {
//     name: "rajat",
//     marks: 95
// }];



// let gpa = student.map((el) =>{
//     return el.marks/10;
// })

// console.log(gpa);

// let nums = [1,2,3,4,5,6,7,8,9,10];
// let ans = nums.filter((el) =>{
//     return el % 2 == 0;
// })
// console.log(ans);

//////////////////////////////////////////////////////////////////////////////////////////////

// arr1 = [2,4,6,8];
// console.log(arr1.every((el) => el%2 == 0));

//////////////////////////////////////////////////////////////////////////////////////////////


// let arr = [1,2,3]; 
// let finalVal = arr.reduce((res,el) => {
//     console.log(res);
//     return res + el;
// });
// console.log(finalVal);

// let arr = [1,2,3,,5,55,66,67,7,9];
// let max = -1;

// for(let i=0 ; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);
// let arr = [1,2,3,,5,55,66,67,7,9];
// let max = arr.reduce((max, el) => {
//     if(max < el){
//         return el;
//     }else{
//         return max; 
//     }
// });

// console.log(max);

//////////////////////////////////////////////////////////////////////////////////////////////

//  let nums = [10,20,30,40];

// let ans = nums.every((el => el % 10 == 0));
// console.log(ans);

// let min = nums.reduce((min,el) => {
//     if(min < el){
//         return min ;
//     }else {
//         return el;
//     }
// })

// console.log(min);

//////////////////////////////////////////////////////////////////////////////////////////////
// function sum(a,b=2){
//     return a + b;
// }
// x = sum(1);
// console.log(x);

//////////////////////////////////////////////////////////////////////////////////////////////

// let arr = [1,2,3,1,5,55,66,67,7,9];
// let x= Math.min(...arr);
// console.log(...arr);
// console.log(x);

// let arr = [1,2,3,1,5,55,66,67,7,9];
// let newArr = [...arr];
/////////////////////////////////////////////////////////////////////////////////////////////

let data ={
    email : "btiicjvfdop",
    phone : "553645456343436464"
}

const dataCopy = {...data}