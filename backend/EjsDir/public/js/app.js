const btns = document.querySelectorAll("button");

for(btn of btns){
    btn.addEventListener("click", (e)=>{
        alert("Button clicked!");
    });
}