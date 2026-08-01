/*
    RELAX
    Dashboard Functions
*/


// ============================
// Load Today's Mood
// ============================


const todayMood =
document.getElementById("todayMood");



const savedMood =
localStorage.getItem("currentMood");



if(savedMood){

    todayMood.innerHTML = savedMood;

}

else{

    todayMood.innerHTML = "—";

}







// ============================
// Load Focus Time
// ============================


const todayFocus =
document.getElementById("todayFocus");



const focusMinutes =
Number(
localStorage.getItem("focusMinutes")
) || 0;



if(todayFocus){

    todayFocus.innerHTML =
    focusMinutes + " min";

}








// ============================
// Load Habit Progress
// ============================


const todayHabits =
document.getElementById("todayHabits");



const habitCount =
Number(
localStorage.getItem("habitCount")
) || 0;



if(todayHabits){

    todayHabits.innerHTML =
    habitCount;

}







// ============================
// Reset Button
// ============================


const resetButton =
document.getElementById("resetButton");



if(resetButton){


resetButton.addEventListener(
"click",
()=>{


localStorage.removeItem(
"currentMood"
);


localStorage.removeItem(
"focusMinutes"
);


localStorage.removeItem(
"habitCount"
);



alert(
"Fresh start ready 🌱"
);



location.reload();


});


}