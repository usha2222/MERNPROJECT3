let btn1=document.querySelector(".btn-1");
let btn2=document.querySelector(".btn-2");
let btn3=document.querySelector(".btn-3");
let btn4=document.querySelector(".btn-4");
let body=document.querySelector("body");
let title=document.querySelector(".title");
//add event listeners
btn1.addEventListener('click' ,function(){
    body.style.backgroundColor="gray"; 
})
btn2.addEventListener('click' ,function(){
// title.style.fontSize="40px"; 
title.style.color="green"; 
})
btn3.addEventListener('click' ,function(){
title.style.fontSize=""; 
title.style.color=""; 
})
btn4.addEventListener('click' ,function(){
title.style.fontSize="44px"; 
title.style.fontFamily="Arial";
})
