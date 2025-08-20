let todo = [];

let req = prompt("please enter your request:");

while(true){
    if(req == "quit"){
        console.log("Thank you for using the todo app!");
        break;
    }
    if(req == "list"){
        console.log("____________________________________")
        for(i = 0; i < todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("____________________________________");

    }
    else if(req == "add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("Task added successfully!");
    }
    else if(req = "delete"){
        let idx = prompt("please enter the task index:");
        todo.splice(idx, 1);
        console.log("Task deleted successfully!");
    }
    else{
        console.log("Wrong request!");
    }
    req = prompt("please enter your request:");


}

    