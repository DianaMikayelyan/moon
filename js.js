let moon = document.getElementById("moonDiv");
let sun = document.getElementById("sunDiv");

let night = function(){
    sun.style.transition = "10s";
    sun.style.marginTop = "-20px";
    sun.style.backgroundColor = "rgb(236, 220 ,76)";
    moon.style.transition = "13s";
    moon.style.marginLeft = "10px";
    document.body.style.transition = "15s";
    document.body.style.backgroundColor = "#e4e4ff";

   
} 
setTimeout(()=>{
    night()
},1000
)
// arrow function a