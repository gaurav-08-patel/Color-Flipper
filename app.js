// const colors=["red","green","blue","aqua","orange","rgb(156,265,176)"];

let btn=document.querySelector(".btn");
let colorName=document.querySelector(".color");

btn.addEventListener("click", ()=>{
    const randomNumber1=getRandomNumber();
    const randomNumber2=getRandomNumber();
    const randomNumber3=getRandomNumber();
     let color=`rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
    
    
    colorName.innerText=color;
    document.body.style.backgroundColor=color;
    
})

let getRandomNumber=()=>{
    return Math.floor(Math.random()*260);
}