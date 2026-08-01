/*
RELAX
Brain Space
*/


const thoughtInput =
document.getElementById("thoughtInput");


const saveButton =
document.getElementById("saveThought");


const thoughtHistory =
document.getElementById("thoughtHistory");


const thoughtMessage =
document.getElementById("thoughtMessage");





let thoughts =
JSON.parse(
localStorage.getItem("thoughts")
) || [];







saveButton.onclick = () => {


let text =
thoughtInput.value.trim();




if(text === ""){


thoughtMessage.innerHTML =
"Write something first 🌱";


return;


}







let newThought = {


id: Date.now(),


text:text,


date:
new Date()
.toLocaleDateString()


};





thoughts.push(newThought);




localStorage.setItem(

"thoughts",

JSON.stringify(thoughts)

);






thoughtInput.value="";



thoughtMessage.innerHTML =
"Saved to your Brain Space 🧠";



displayThoughts();



};









function displayThoughts(){


thoughtHistory.innerHTML="";



if(thoughts.length===0){


thoughtHistory.innerHTML =
"No thoughts saved yet.";


return;


}







thoughts
.slice()
.reverse()
.forEach(thought=>{



let card =
document.createElement("div");



card.className =
"history-item";





card.innerHTML =

`

<p>

${thought.text}

</p>


<small>

${thought.date}

</small>


<br>


<button onclick="deleteThought(${thought.id})">

Delete

</button>

`;





thoughtHistory.appendChild(card);



});



}









function deleteThought(id){


thoughts =

thoughts.filter(

thought=>thought.id!==id

);



localStorage.setItem(

"thoughts",

JSON.stringify(thoughts)

);



displayThoughts();



}







displayThoughts();