// function savetoDb(data , success , failure){
// let ispeed = Math.floor(Math.random()*10) + 1;
// if(ispeed > 4){
//     success();
// }else{
//     failure();
// }

//     console.log("your data was saved");
// };
// let x = prompt("Enter data to save.");
// savetoDb(x, ()=>{
//     console.log("Success : Your data was saved :");
//     let y = prompt("Enter data again");
//     savetoDb(y,()=>{
//         console.log("Success2: data2 saved");
//         savetoDb(y,()=>{
//             console.log("Success3: data3 saved");
//         },
//         ()=>{
//             console.log("Failure3: data3 saved");
//         }
//     )
//     },
//     ()=>{
//         console.log("failure: weak connection");
//     }
// );
// },
// ()=>{
//     console.log("Failure : Weak connection your data was not saved");
// }
// );

// function savetoDb(data){
//     let ispeed =  Math.floor(Math.random()*10) + 1;
//     return new Promise((success, failure ) => {
//         if(ispeed > 4){
//             success("Success : Your data was saved");
//         }else{
//             failure("failure: weak connection");
//         }
//     });
// }
// let x = prompt("Enter data to save.");
// // let y = prompt("Enter data again");
// savetoDb(x);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// function savetoDb(data){
//     let ispeed =  Math.floor(Math.random()*10) + 1;
//     return new Promise((success, failure ) => {
//         if(ispeed > 4){
//             success("Success : Your data was saved");
//         }else{
//             failure("failure: weak connection");
//         }
//     });
// }
// // let x = prompt("Enter data to save.");
// // let y = prompt("Enter data again");
// let request = savetoDb("a");
//  request   
//     .then(()=> {
//     console.log("promise was resloved.");
//     console.log(request);
//     })
//     .catch(()=>{
//         console.log("Promise was rejected");
//         console.log(request);
//     });

///////////////////////////////////////////////////////////////////////////////////////////////////////

function savetoDb(data){
    let ispeed =  Math.floor(Math.random()*10) + 1;
    return new Promise((success, failure ) => {
        if(ispeed > 4){
            success("Success : Your data was saved");
        }else{
            failure("failure: weak connection");
        }
    });
}
// let x = prompt("Enter data to save.");
// let y = prompt("Enter data again");
let request = savetoDb("a");
 request   
    .then((result)=> {
    console.log("promise was resloved.");
    console.log("d1 saved");
    console.log(result);
    return savetoDb("b")
    .then((result)=>{
        console.log("d2 saved");
        console.log(result);
    })
    })
    .catch((error)=>{
        console.log("Promise was rejected");
        console.log(request);
        console.log(error);
    });