/*
RELAX
Remember List
*/


const rememberInput =
document.getElementById("rememberInput");


const categorySelect =
document.getElementById("rememberCategory");


const addButton =
document.getElementById("addRemember");


const rememberList =
document.getElementById("rememberList");






let reminders =

JSON.parse(

localStorage.getItem("reminders")

) || [];








addButton.onclick = () => {


let text =
rememberInput.value.trim();



let category =
categorySelect.value;




if(text==="")
return;







reminders.push({


id:Date.now(),


text:text,


category:category,


date:

new Date()

.toLocaleDateString()


});






saveReminders();


rememberInput.value="";


displayReminders();



};









function saveReminders(){


localStorage.setItem(

"reminders",

JSON.stringify(reminders)

);


}









function displayReminders(){


rememberList.innerHTML="";



if(reminders.length===0){


rememberList.innerHTML =

"No reminders saved yet.";

return;


}







reminders
.slice()
.reverse()
.forEach(item=>{



let card =
document.createElement("div");



card.className =
"history-item";






card.innerHTML =

`

<h3>

${item.text}

</h3>


<p>

Category: ${item.category}

</p>


<small>

Saved: ${item.date}

</small>


<br>


<button onclick="deleteReminder(${item.id})">

Delete

</button>

`;





rememberList.appendChild(card);



});



}









function deleteReminder(id){


reminders =

reminders.filter(

item=>item.id!==id

);





saveReminders();


displayReminders();



}









displayReminders();