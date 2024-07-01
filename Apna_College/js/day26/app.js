// async function greet(){
//     throw `some random error`;
//     return "hello";
// }

// greet()
// .then(()=>{
//     console.log("Promise was successfull.");
// })
// .catch((err)=>{
//     console.log("Promise was rejected with err : ", err)
// })



// let demo = async () =>{
//     return 5;
// }

/////////////////////////////////////////////////////////////

// function getNum(){
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)+1;
//         console.log(num) ;
//         resolve();
//        },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//      getNum();
// }

/////////////////////////////////////////////////////////////

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((reponse)=>{
//     console.log(reponse);
//     reponse.json().then((data)=>{
//         console.log("data1 = ",data.fact);
//         return fetch(url);

//     })
//     .then((data2)=>{
//         console.log("data2 = ",data2);
//     })
    
// })
// .catch((err)=>{
//     console.log("ERROR - ",err)
// });

/////////////////////////////////////////////////////////////

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{let res = await  fetch(url);
    let data = await res.json()
    console.log(res);
    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(res2);
}catch(e){
    console.log("error - ", e);
}
}