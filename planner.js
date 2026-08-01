/*
RELAX
Daily Planner
*/


const workInput =
document.getElementById("workInput");


const personalInput =
document.getElementById("personalInput");


const addWorkButton =
document.getElementById("addWork");


const addPersonalButton =
document.getElementById("addPersonal");


const workList =
document.getElementById("workList");


const personalList =
document.getElementById("personalList");


const progress =
document.getElementById("plannerProgress");






let tasks =

JSON.parse(

localStorage.getItem("plannerTasks")

) || [];








addWorkButton.onclick = () => {


addTask(
workInput.value,
"work"
);


workInput.value="";


};







addPersonalButton.onclick = () => {


addTask(
personalInput.value,
"personal"
);


personalInput.value="";


};









function addTask(text,type){


text=text.trim();



if(text==="")
return;





tasks.push({


id:Date.now(),


text:text,


type:type,


completed:false


});





saveTasks();


displayTasks();



}









function saveTasks(){


localStorage.setItem(

"plannerTasks",

JSON.stringify(tasks)

);


}









function displayTasks(){


workList.innerHTML="";

personalList.innerHTML="";



tasks.forEach(task=>{



let item =
document.createElement("div");



item.className =
"task-item";





item.innerHTML =

`

<input 

type="checkbox"

${task.completed ? "checked":""}

onchange="toggleTask(${task.id})"

>


<span>

${task.text}

</span>


<button onclick="deleteTask(${task.id})">

✕

</button>

`;







if(task.type==="work"){


workList.appendChild(item);


}

else{


personalList.appendChild(item);


}



});





updateProgress();



}









function toggleTask(id){


let task =

tasks.find(

item=>item.id===id

);



if(task){


task.completed =
!task.completed;


}





saveTasks();


updateProgress();



}









function deleteTask(id){


tasks =

tasks.filter(

task=>task.id!==id

);



saveTasks();


displayTasks();



}









function updateProgress(){


let completed =

tasks.filter(

task=>task.completed

).length;





progress.innerHTML =

`${completed} completed out of ${tasks.length} tasks`;



}









displayTasks();