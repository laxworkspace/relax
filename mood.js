/*
RELAX
Mood Tracker
*/


const moodButtons =
document.querySelectorAll(".mood");


const moodHistory =
document.getElementById("moodHistory");


const moodMessage =
document.getElementById("moodMessage");





let moods =
JSON.parse(
localStorage.getItem("moodHistory")
) || [];







moodButtons.forEach(button => {


button.addEventListener(
"click",
()=>{


let selectedMood =
button.dataset.mood;



let today =
new Date()
.toISOString()
.split("T")[0];




let existing =
moods.find(
item=>item.date===today
);



if(existing){


existing.mood =
selectedMood;


}

else{


moods.push({

date:today,

mood:selectedMood

});


}






localStorage.setItem(

"moodHistory",

JSON.stringify(moods)

);





moodMessage.innerHTML =

"Saved: " + selectedMood + " 🌱";





displayMoodHistory();



}

);


});










function displayMoodHistory(){


moodHistory.innerHTML="";



let last30 =

moods.slice(-30)
.reverse();





if(last30.length===0){


moodHistory.innerHTML=

"No mood entries yet.";


return;


}







last30.forEach(entry=>{


let card =
document.createElement("div");



card.className =
"history-item";



card.innerHTML =

`

<strong>

${entry.date}

</strong>

<br>

${entry.mood}

`;



moodHistory.appendChild(card);



});



}







displayMoodHistory();