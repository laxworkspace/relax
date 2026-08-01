/*
RELAX DASHBOARD
*/


const mood =
document.getElementById("dashboardMood");


const focus =
document.getElementById("dashboardFocus");


const habits =
document.getElementById("dashboardHabits");


const tasks =
document.getElementById("dashboardTasks");





// Mood


let moodData =
JSON.parse(
localStorage.getItem("moodHistory")
) || [];



if(moodData.length > 0){

mood.innerHTML =
moodData[moodData.length-1].mood;

}







// Focus


let focusMinutes =
Number(
localStorage.getItem("focusMinutes")
) || 0;



focus.innerHTML =
focusMinutes + " minutes";







// Habits


let habitData =
JSON.parse(
localStorage.getItem("habits")
)||[];




let completedHabits = 0;



habitData.forEach(habit=>{


if(
habit.history.includes(
new Date()
.toISOString()
.split("T")[0]
)
){

completedHabits++;

}


});



habits.innerHTML =
completedHabits + " completed";







// Tasks


let plannerData =
JSON.parse(
localStorage.getItem("plannerTasks")
)||[];



let remaining =
plannerData.filter(
task=>task.completed===false
).length;



tasks.innerHTML =
remaining + " remaining";






// Daily message


let messages=[

"Small steps still count 🌱",

"One task at a time.",

"You don't have to do everything today.",

"Progress is progress.",

"Take your day gently."

];



document.getElementById(
"dailyMessage"
).innerHTML =

messages[
Math.floor(
Math.random()*messages.length
)
];