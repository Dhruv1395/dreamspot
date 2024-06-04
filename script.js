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

        let day = document.getElementById("day");
        let hrs = document.getElementById("hrs");
        let min = document.getElementById("min");
        let sec = document.getElementById("sec");
        hrs = hrs>12? hrs % 12 : hrs;
        
       
        setInterval(()=>{
            var ctime = new Date()
            hrs.innerHTML =  ctime.getHours();
            min.innerHTML = (ctime.getMinutes()<10?"0":"") +  ctime.getMinutes();
            sec.innerHTML =ctime.Seconds();
            day.innerHTML=ctime.getDate();
        },1000)
