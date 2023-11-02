let req1 = document.querySelector(".input1");
let req2 = document.querySelector(".input2"); 
let btn = document.querySelector(".button");
let taskList = document.querySelector("#taskList");

btn.addEventListener("click",()=>{
    if((req1.value == "add")||(req1.value == "Add") ||(req1.value == "ADD")){
        console.log("add value");
        if(req2.value !== ""){
            let taskText = req2.value;
            let taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            req1.value ="";
            req2.value="";
        }
    }else  if(req1.value == "delete"){
        console.log("delete value");
       let selectTask = document.querySelectorAll("li");
       selectTask.forEach((taskItem)=>{
        if(taskItem.textContent === req2.value){
            taskList.removeChild(taskItem);
        }
       })
        req1.value ="";
        req2.value="";
    }
});


