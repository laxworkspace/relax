/*
RELAX
Backup & Restore
*/


const exportButton =
document.getElementById("exportData");


const chooseButton =
document.getElementById("chooseFile");


const fileInput =
document.getElementById("backupFile");








// Export data


exportButton.onclick = () => {


let backup = {};





for(
let i = 0;
i < localStorage.length;
i++
){


let key =
localStorage.key(i);



backup[key] =
localStorage.getItem(key);



}








let data =

JSON.stringify(

backup,

null,

2

);







let file =

new Blob(

[data],

{

type:"application/json"

}

);







let link =

document.createElement("a");



link.href =

URL.createObjectURL(file);



link.download =

"Relax-backup.json";



link.click();




};











// Open file picker


chooseButton.onclick = () => {


fileInput.click();



};











// Import data


fileInput.onchange = (event)=>{


let file =

event.target.files[0];





if(!file)
return;







let reader =

new FileReader();







reader.onload = ()=>{


let backup =

JSON.parse(

reader.result

);







Object.keys(backup)

.forEach(key=>{


localStorage.setItem(

key,

backup[key]

);



});







alert(

"Relax data restored successfully 🌱"

);







location.href =

"index.html";



};







reader.readAsText(file);



};