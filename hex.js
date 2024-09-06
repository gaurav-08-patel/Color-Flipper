const colors =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let btn=document.querySelector(".btn");
let colorName=document.querySelector(".color");


btn.addEventListener("click",()=>{
    let color="#";
    for(let i=0;i<6;i++){
        color+=colors[getRandomNumber()];
    }
    colorName.innerText=color;
    document.body.style.backgroundColor=color;
})



function getRandomNumber(){
    return Math.floor(Math.random()*16);
}
