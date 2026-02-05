// let todo = [];

// let req = prompt("please enter your request:");

// while(true){
//     if(req == "quit"){
//         console.log("Thank you for using the todo app!");
//         break;
//     }
//     if(req == "list"){
//         console.log("____________________________________")
//         for(i = 0; i < todo.length; i++){
//             console.log(i,todo[i]);
//         }
//         console.log("____________________________________");

//     }
//     else if(req == "add"){
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("Task added successfully!");
//     }
//     else if(req = "delete"){
//         let idx = prompt("please enter the task index:");
//         todo.splice(idx, 1);
//         console.log("Task deleted successfully!");
//     }
//     else{
//         console.log("Wrong request!");
//     }
//     req = prompt("please enter your request:");


// }


let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);

    ul.appendChild(item);
    //console.log(inp.value);
    inp.value = "";          //reset the input field after clicking the button
});

ul.addEventListener("click",function(event){
    // console.log(event);
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove();

        console.log("deleted");        //to check if the button is working
    }

})

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns){
//     delBtn.addEventListener("click", function () {
//         console.log("element deleted");        //to check if the button is working
//         let par = this.parentElement;
//         console.log("par");
//         par.remove();

//     });
// }