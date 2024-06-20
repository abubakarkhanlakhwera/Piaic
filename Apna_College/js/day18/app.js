//
const student = {
    name: "Abubakar",
    age: 18,
    marks: 96
};
let student2 = ["Abubakar" , 18 , 96];

//
const item = {
    price: 100.99,
    discount : 50,
    colors : ["red","pink"]
};

const post = {
    username : "@abubakar",
    content : "This is my #firstpost",
    likes: 150,
    reposts :5,
    tags : ["@apnacollege","@thread"]
};

//


//

const obj = {
    1 : "a",
    2 : "b",
    true : "c",
    null : "d",
    undefined: "e"
};

//
 const student1 = {
    name: "Abubakar",
    age: 18,
    marks: 96,
    city:"chishtian"
};

//

const classInfo = {
    aman : {
        grade : "A+",
        city : "Delhi",
    },
    shradha : {
        grade : "A",
        city : "Mumbai"
    },
    ahmad : {
        grade : "A",
        city : "Mumbai"
    },
};

//


const classInfo_ = [
    {
        name: "Abubakar",
        age: 18,
        marks: 96,
        city:"chishtian"
    },
    {
        name: "Ahmad",
        age: 44,
        marks: 98,
        city:"chishtian"  
    },
    {
        name: "Ali",
        age: 18,
        marks: 86,
        city:"chishtian"
    }
]

//


// let x  ;

// while( x !== 100){
//      x = Math.floor(Math.random() *100) +1 ;
//     x == 100;
//     console.log(x);
// }

let x = prompt("**Enter a number to get a random number b/w 1 and 10**");
let y = Math.floor(Math.random() * 10) + 1;
if(y != x && x <= 10){
    console.log(`${y} was the number . Hope you guess in the next try.`)
}else if(x == y && x <= 10){
    console.log("You are right. ")
}else{
    console.log("Please enter a integer between 1 and 10 .")
}
 