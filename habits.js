/*
RELAX
Habit Garden
*/


const habitInput =
document.getElementById("habitInput");


const addHabitButton =
document.getElementById("addHabit");


const habitList =
document.getElementById("habitList");


const gardenDisplay =
document.getElementById("gardenDisplay");


const habitStats =
document.getElementById("habitStats");






let habits =

JSON.parse(

localStorage.getItem("habits")

) || [];







addHabitButton.onclick = () => {


let name =
habitInput.value.trim();



if(name==="")
return;





habits.push({


id:Date.now(),


name:name,


history:[]


});





saveHabits();


habitInput.value="";


displayHabits();



};









function saveHabits(){


localStorage.setItem(

"habits",

JSON.stringify(habits)

);


}









function displayHabits(){


habitList.innerHTML="";



if(habits.length===0){


habitList.innerHTML =
"No habits yet. Start growing 🌱";


return;


}







habits.forEach(habit=>{



let today =

new Date()

.toISOString()

.split("T")[0];






let completed =

habit.history.includes(today);







let item =
document.createElement("div");



item.className =
"task-item";







item.innerHTML =

`

<input

type="checkbox"

${completed ? "checked":""}

onchange="completeHabit(${habit.id})"

>


<span>

${habit.name}

</span>


<button onclick="deleteHabit(${habit.id})">

✕

</button>

`;





habitList.appendChild(item);



});




updateGarden();



}









function completeHabit(id){


let habit =

habits.find(

item=>item.id===id

);




let today =

new Date()

.toISOString()

.split("T")[0];






if(habit){



if(
habit.history.includes(today)

){


habit.history =

habit.history.filter(

date=>date!==today

);


}

else{


habit.history.push(today);


}


}




saveHabits();


displayHabits();



}









function deleteHabit(id){


habits =

habits.filter(

habit=>habit.id!==id

);



saveHabits();


displayHabits();



}









function updateGarden(){


let totalCompleted = 0;



habits.forEach(habit=>{


totalCompleted +=

habit.history.length;


});






let plants = "";



if(totalCompleted===0){


plants="🌱";


}

else if(totalCompleted<5){


plants="🌱🌱";


}

else if(totalCompleted<15){


plants="🌿🌿🌱";


}

else if(totalCompleted<30){


plants="🌳🌳🌿";


}

else{


plants="🌳🌳🌳🌸";


}







gardenDisplay.innerHTML =
plants;





habitStats.innerHTML =

`${totalCompleted} habit completions`;



}









displayHabits();