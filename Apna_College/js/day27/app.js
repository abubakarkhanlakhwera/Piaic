// // let url = "https://catfact.ninja/fact";
// // let btn = document.querySelector('button');



// // btn.addEventListener("click", async()=>{
// //     console.log("button was clicked ");
// //     let fact = await getFacts();
// //     console.log(fact);

// //     let p = document.querySelector('#fact');
// //     p.innerText = fact;
    
// // })

// // async function getFacts(){
// //     try{
// //         let res1 = await  axios.get(url);
// //         return res1.data.fact;
// //     }catch(e){
// //         console.log("error - ",e);
// //         return "No Fact Found";
// //     }
// // }

// /////////////////////////////////////////////////////////////////////

// // let url2 = "https://dog.ceo/api/breeds/image/random";

// // let btn = document.querySelector('button');



// // btn.addEventListener("click", async()=>{
// //     let link = await getImage();
// //     // console.log(link);
// //     let img = document.querySelector('#result');
// //     img.setAttribute("src",link);
// //     });

// // async function getImage(){
// //     try{
// //         let res1 = await  axios.get(url2);
// //         return res1.data.message;
// //     }catch(e){
// //         console.log("error - ",e);
// //         return "No Image Found";
// //     }
// // }

// /////////////////////////////////////////////////////////////////////////

// // const url = "https://icanhazdadjoke.com/";

// // async function getJokes(){
// //     try{
// //         const config = {header: {Accept : "application/json"}}
// //         let res = await axios.get(url,config);
// //         console.log(res);
// //     }catch(err){
// //         console.log(err);
// //     }
// // }

// /////////////////////////////////////////////////////////////////////////

// //  url = 'http://universities.hipolabs.com/search?name='
// //  let btn = document.querySelector("button");


// //  btn.addEventListener("click",async ()=>{
// //     let country = document.querySelector("input").value;
// //     getColleges(country);

// //     let colleges = await getColleges(country);
// //     let colArr = await getColleges(country);
// //     show(colArr);
// //  });

// //  function show(colArr){
// //     let list = document.querySelector('#list');
// //     innerText = '';
// //     for(col of colArr){
// //         console.log(col.name);
// //         let li = document.createElement('li');
// //         li.innerText = col.name;
// //         list.appendChild(li);
// //     }
// //  }

// //  async function getColleges(country){
// //     try{
// //         let res = await axios.get(url + country);
// //         return res.data;
// //     }catch(err){
// //         console.log(err);
// //         return [];
        
// //     }
// //  }
// const url = 'http://universities.hipolabs.com/search?name=';
// const btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     let colleges = await getColleges(country);
//     show(colleges);
// });

// async function getColleges(country) {
//     try {
//         let res = await axios.get(url + country);
//         return res.data;
//     } catch (err) {
//         console.log(err);
//         return [];
//     }
// }

// function show(colArr) {
//     let list = document.querySelector('#list');
//     list.innerText = ''; // Clear the previous list content
//     for (let col of colArr) {
//         console.log(col.name);
//         let li = document.createElement('li');
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

