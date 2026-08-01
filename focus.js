 /*
    RELAX
    Focus Room
 */


const timerDisplay =
document.getElementById("timer");


const startButton =
document.getElementById("startTimer");


const pauseButton =
document.getElementById("pauseTimer");


const resetButton =
document.getElementById("resetTimer");


const goalInput =
document.getElementById("dailyGoal");


const saveGoalButton =
document.getElementById("saveGoal");


const stats =
document.getElementById("focusStats");


const streak =
document.getElementById("focusStreak");






let totalSeconds = 25 * 60;


let timer = null;


let running = false;






function updateTimer(){


let minutes =
Math.floor(totalSeconds / 60);


let seconds =
totalSeconds % 60;



timerDisplay.innerHTML =

`${minutes}:${seconds
.toString()
.padStart(2,"0")}`;


}






function startTimer(){


if(running)
return;



running=true;



timer=setInterval(()=>{


if(totalSeconds <= 0){


clearInterval(timer);


running=false;



completeSession();


resetTimer();



return;


}



totalSeconds--;


updateTimer();



},1000);



}







function pauseTimer(){


clearInterval(timer);


running=false;


}







function resetTimer(){


clearInterval(timer);


running=false;


totalSeconds =
25*60;


updateTimer();


}







function completeSession(){


let minutes =
Number(
localStorage.getItem(
"focusMinutes"
)
)||0;



minutes +=25;



localStorage.setItem(

"focusMinutes",

minutes

);





updateStats();


}








startButton.onclick =
startTimer;


pauseButton.onclick =
pauseTimer;


resetButton.onclick =
resetTimer;









saveGoalButton.onclick=()=>{


let goal =
Number(
goalInput.value
);



if(goal>0){


localStorage.setItem(

"dailyGoal",

goal

);



alert(
"Daily goal saved!"
);


}


};










function updateStats(){


let minutes =
Number(
localStorage.getItem(
"focusMinutes"
)
)||0;



stats.innerHTML =

`${minutes} minutes focused`;





calculateStreak();



}









function calculateStreak(){


let sessions =
JSON.parse(

localStorage.getItem(
"focusHistory"

)

)||[];





let today =
new Date()
.toISOString()
.split("T")[0];




if(
sessions[
sessions.length-1
] !== today
){


sessions.push(today);



localStorage.setItem(

"focusHistory",

JSON.stringify(sessions)

);


}





let streakCount = 0;


let date =
new Date();





while(true){


let check =
date
.toISOString()
.split("T")[0];



if(
sessions.includes(check)
){


streakCount++;


date.setDate(
date.getDate()-1
);


}

else{


break;


}


}





streak.innerHTML =

`${streakCount} day streak`;



}






updateTimer();

updateStats();