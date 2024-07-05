// const stu1 = {
//     name : "adam",
//     age : 25,
//     marks:95
// };
// const stu2 = {
//     name : "adam",
//     age : 21,
//     marks:21
// };
// const stu3 = {
//     name : "adam",
//     age : 25,
//     marks:21
// };
// const stu1 = {
//     name : "adam",
//     age : 25,
//     makrs:15,
//     getmarks: function(){
//         return this.marks;
//     }
// }

let arr = [1,2,3];
arr.sayHello = ()=>{
  console.log("Hello I am arr");  
};
arr.__proto__.push = (n) => {console.log("pushing number:",n)};
////factory function
function PersonMaker(name,age){
    const person = {
        name: name,
        age : age,
        talk(){
            console.log(`Hi my name is ${this.name}`);
        }
    };
};

//New operator
function Person(name, age) {
    this.name = name;
    this.age  = age;
};
Person.prototype.talk = function (){
    console.log(`Hi, my Name is ${this.name}`);
};
 
let p1 = new Person("adam",22);
let p2 = new Person("ahmad",23);
//Constructor Function
class Person {
    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }
    talk(){
        console.log(`Hi, my Name is ${this.name}`);
    }
};

p1 = new Person("adam",25);
p2 = new Person("eve",35);

//Inheritance

class Person {
    constructor(name, age,marks) {
        // this.name = name;
        // this.age  = age;
        this.marks = marks;
    }
//     talk(){
//         console.log(`Hi, my Name is ${this.name}`);
//     }
 }
class Teacher {
    constructor(name, age , subject) {
        // this.name = name;
        // this.age  = age;
        this.subject = subject;
    }
    // talk(){
    //     console.log(`Hi, my Name is ${this.name}`);
    // }
};

class Student extends Person {
    constructor(name,age,marks) {
        super(name,age);
       
        this.marks = marks;
    }
    greet(){
        return "hello";
    }
};

class Teacher extends Person {
    constructor(namge,age,subject){
        super(name,age);
        this.subject =subject;
    }
}

 



