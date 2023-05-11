let storedHTML= document.getElementById("para");


let htmlData= storedHTML.innerHTML;
let textData= storedHTML.innerText;
console.log(htmlData);
console.log(textData);

document.getElementById("name").innerHTML= '<span>shri</span>';
document.getElementById("age").innerHTML= '<span>22</span>';
document.getElementById("email").innerHTML= '<span>@intgmail.com</span>';


//apply style
document.body.style.fontFamily = 'AriL';
storedHTML.style.color = 'brown'

//create element and append
//element1
let imageElement = document.createElement('img');
imageElement.src = "download.jpg";
imageElement.height = 300;
imageElement.width = 300;

//element2
let diveElement = document.createElement('div');
diveElement.innerText = "KTM"

//Append created elements
//document.body.append(imageElement,diveElement);
//select ElementsByClassName and TagName
let ptags = document.getElementsByTagName('p');
let paraClass = document.getElementsByClassName('para');

ptags[1].innerText = "Hello guys";

function addrow(){
    let TableElement = document.getElementById('table');
    let row = TableElement.insertRow();
    let td1 = row.insertCell();
    td1.innerText="CCC";
} 
function evenTiggered(evtValue) {
    console.log(`Triggered event is ${evtValue.value}`)
    //console.log(evtValue.value)
}  

function eventButton(){
    console.log(`Button is clicked`)
}

function addCountry(){
//first of all select the select box (target a elelment to add)
    let selectElement = document.getElementById('country');

//and another create a option element
  let newOption = document.createElement('option');
  newOption.innerText = document.getElementById('country-value').value;
  newOption.setAttribute('value',document.getElementById('country.value').value )

  selectElement.append(newOption);
  document.getElementById('country-value').value="";
}
  
function removeCountry(){
    let selectElement = document.getElementById('country');
    selectElement.remove(selectElement.seletedIndex);
}

document.getElementsByTagName('ul')[0].setAttribute('id','unordered-list');

let ul = document.getElementById('unordered-list');
let li = document.createElement('li');
li.innerHTML ='contact us';
ul.append(li);

