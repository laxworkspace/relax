/*
RELAX
Settings
*/



const darkButton =
document.getElementById("darkMode");


const textButton =
document.getElementById("largeText");


const motionButton =
document.getElementById("reduceMotion");


const clearButton =
document.getElementById("clearData");







// Load saved settings


let darkMode =

localStorage.getItem(
"darkMode"
)==="true";



let largeText =

localStorage.getItem(
"largeText"
)==="true";



let reduceMotion =

localStorage.getItem(
"reduceMotion"
)==="true";








function applySettings(){



if(darkMode){


document.body.classList.add(
"dark-mode"
);


darkButton.innerHTML =
"On";


}

else{


document.body.classList.remove(
"dark-mode"
);


darkButton.innerHTML =
"Off";


}







if(largeText){


document.body.classList.add(
"large-text"
);


textButton.innerHTML =
"On";


}

else{


document.body.classList.remove(
"large-text"
);


textButton.innerHTML =
"Off";


}







if(reduceMotion){


document.body.classList.add(
"reduce-motion"
);


motionButton.innerHTML =
"On";


}

else{


document.body.classList.remove(
"reduce-motion"
);


motionButton.innerHTML =
"Off";


}



}








darkButton.onclick = () => {


darkMode=!darkMode;



localStorage.setItem(

"darkMode",

darkMode

);



applySettings();


};









textButton.onclick = () => {


largeText=!largeText;



localStorage.setItem(

"largeText",

largeText

);



applySettings();


};









motionButton.onclick = () => {


reduceMotion=!reduceMotion;



localStorage.setItem(

"reduceMotion",

reduceMotion

);



applySettings();


};









clearButton.onclick = () => {


let confirmDelete =

confirm(

"Delete all Relax data?"

);



if(confirmDelete){


localStorage.clear();



alert(

"All Relax data removed."

);



location.href =
"index.html";


}



};







applySettings();