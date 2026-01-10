let btnl=document.getElementById("left");
let box=document.querySelector(".box");

btnl.addEventListener("click", ()=>
   {
       box.scrollLeft-=1000;
   });

let btnr=document.getElementById("right");
btnr.addEventListener("click", ()=>
    {
        box.scrollLeft+=1000;
    });

box.addEventListener("scroll", ()=>
{
    if(box.scrollLeft>0){
        btnl.classList.add("show");
    }
    else{
        btnl.classList.remove("show");
    }
});

box.addEventListener("scroll",()=>
{
    if(box.scrollLeft>1000)
    {
        btnr.classList.add("disappear");
    }
    else{
        btnr.classList.remove("disappear");
    }
});



const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const box = document.getElementById(targetId);

        box.classList.toggle("show");
        
    });
});
