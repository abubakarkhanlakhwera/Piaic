 let students = ["Ali","Ahmad","Ajmal"];
 students.push("Ferrari");
 console.log(students);
 students.pop();
 console.log(students);
 students.unshift("Toyota");
 console.log(students);
 students.shift();
 console.log(students);
 // Practice

 let month = ["january","july","march","august"];
 month.shift();
 month.shift();
 month.unshift("june");
 month.unshift("july");
 console.log(month);

 month.includes("january");
//////////////(start,deletion,addition)
 month.splice(4,0,"may");

 month.sort();



 //practice

 let months = ["january","july","march","august"];
 console.log(months.splice(0,2,"July","June"));
 console.log(months);

 //nested array

 let arr1 = [[2,3],[3,5]];
 


