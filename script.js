let menu =document.getElementById("menu");
let close =document.getElementById("close");
let tl = gsap.timeline();
tl.to("#sidenav",{
    width:200,
    duration:0.3
})
tl.pause();
menu.addEventListener("click",function(){
    tl.play();
})
close.addEventListener("click",function(){
    tl.reverse();
    
})