const colors=["red","green","blue","aqua","orange","rgb(156,265,176)"];
let btn=document.querySelector(".btn");
let colorName=document.querySelector(".color");

btn.addEventListener("click", ()=>{
    const randomNumber=getRandomNumber();
    colorName.innerText=colors[randomNumber];
    document.body.style.backgroundColor=colors[randomNumber];
})

let getRandomNumber=()=>{
    return Math.floor(Math.random()*colors.length);
}