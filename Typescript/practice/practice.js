//function sum(n1 : number , n2: number){
//  console.log(n1 + n2);
//    return;
//}
//sum(3,4);
///////
///const sum = (n1:number , n2:number)=>{
//console.log(n1 + n2)
//};
//sum(5,7)
//let country = prompt("Where do you liver?")
//Number() function is used to convert the string  to number
//let age = Number(prompt("what is your age?"))
//if(country == "pakistan" || country == "Pakistan"){
// if(age >= 18){
//   console.log("here is your ticket")
//}else{
//  console.log("Age restriction")
//}
//}else{
//  console.log("Invalid country")
//}
////////////////////arays
//let fruites = ['apple','banana','pineapple'];
//let numarray = [1,2,3,4,5,6];
//console.log(fruites[0] , numarray);
//pop()
//const removefruit = fruites.pop();
//console.log(removefruit);
//push()
//const popedup = fruites.push("grapes");
//console.log(popedup);
//fruites.splice(1,0,"lemon","kella");
//console.log(fruites);
for (var i_1 = 0; i_1 <= 5; i_1++) {
    console.log("its lovely");
}
var cleanestcities = ['karachi', 'lahore', 'peshawar', 'Islamabad'];
var i = 0;
var matchfound = false;
for (i = 0; i <= 4; i++) {
    if ("Islamabad" === cleanestcities[i]) {
        console.log("it is one of the cleanest cities");
        matchfound = true;
        break;
    }
}
if (matchfound === false) {
    console.log("No cleanest cities found");
}
