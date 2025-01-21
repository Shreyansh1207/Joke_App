const url="https://v2.jokeapi.dev/joke/Any";
const btn1=document.querySelector("button");
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

document.addEventListener("DOMContentLoaded",async () => {
    let screen = document.querySelector("h1");
    screen.innerHTML = await getSetup();

});
const answer=async()=>{
    let screen2 = document.querySelector("h2");
    screen2.innerHTML = await getDelivery();
}
btn1.addEventListener("click",answer);
