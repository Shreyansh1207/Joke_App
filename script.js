const url="https://v2.jokeapi.dev/joke/Any";
const btn1=document.getElementById("button");
const btn2=document.getElementById("button2");
let cur;
const getSetup=async()=>{
    let response=await fetch(url);
    
    let data = await response.json();
    cur=data.delivery;
    return data.setup || "";
}
const getDelivery=async()=>{
    
    return cur || "";
}

let z=document.addEventListener("DOMContentLoaded",async () => {
    let screen = document.querySelector("h1");
    screen.innerHTML = await getSetup();

});
const answer=async()=>{
    let screen2 = document.querySelector("h2");
    screen2.innerHTML = await getDelivery();
}
btn1.addEventListener("click",answer);
btn2.addEventListener("click", async () => {
    let screen = document.querySelector("h1");
    let screen2 = document.querySelector("h2");
    screen2.innerHTML = "";
    screen.innerHTML = await getSetup();
});
