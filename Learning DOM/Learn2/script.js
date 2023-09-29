/*
//ACCESSING ELEMENTS

//1.getElementById()

//if more than 1 element with same id is present, getElementById() returns the first element

let para = document.getElementById('intro');
console.log(para);

let p = document.getElementById('xyz');
console.log(p);//returns null

//2.querySelector()

//if more than 1 element with same id, class is present, querySelector() returns the first element

//Accessing class - use (dot). before
let list = document.querySelector('.lists');
console.log(list);
//Accessging id - use # before
let heading = document.querySelector('#heading');
console.log(heading)
//Accessing by Tag name
let img = document.querySelector('img');
console.log(img);
*/

/*
//READ ELEMENTS

//1.textContent - read contents of webpage
let para = document.getElementById('intro');
let p = para.textContent; 
console.log(p);

//2.innerHTML - read contents of html
let lists = document.querySelector('.lists');
let l = lists.innerHTML;
console.log(l);
*/

/*
//MODIFY ELEMENTS

//1.modifying contents of webpage
document.getElementById('dynamicContent').textContent = 'This is a dynamically generated paragraph';

//2.modifying contents of html
let lists=document.querySelector('.lists');
lists.innerHTML=`<table border="1">
<tr>
    <td>1</td><td>Accessing DOM Element</td>
</tr>
<tr>
    <td>1</td><td>Accessing DOM Element</td>
</tr>
<tr>
    <td>1</td><td>Accessing DOM Element</td>
</tr>
<tr>
    <td>1</td><td>Accessing DOM Element</td>
</tr>
</table>`
*/

/*
//CHANGING ATTRIBUTE AND STYLE OF A WEBPAGE

//1.changin attribute
document.querySelector('img').src='images/img1.png';
document.querySelector('img').height='200';

//2.adding styles dyanmically
document.getElementById('heading').style.color='blue';
document.querySelector('.lists').style.backgroundColor='yellow';
*/

/*
//ADDING AND REMOVING CLASS FROM A WEBPAGE ELEMENT

document.querySelector('.header').classList.remove('.header');
document.querySelector('.container').classList.remove('.container');

document.querySelector('.lists').classList.add('dynamic');
*/

/*
//COLLECTING FORM DATA

//1.collecting data from text boxes
let fname = document.getElementById('first-name').value;
console.log(fname);

let lname = document.getElementById('last-name').value;
console.log(lname);

let email = document.getElementById('email').value;
console.log(email);


//2.collecting data from drop down
let country = document.querySelector('#country').value;
console.log(country); 

//3.collecting data from checkboxes

*/

/*
//EVENTS
//1.inline event handler - done inside the html

//2.event handler
let lname = document.getElementById('last-name');
lname.onfocus= function(){
    lname.style.backgroundColor='yellow';
}
lname.onblur=function(){
    lname.style.backgroundColor='white';
}

let registration = document.querySelector('#Registration');
registration.onmouseover=function(){
    registration.style.color='red'
}
registration.onmouseout=function(){
    registration.style.color='black'
}

//3.addEventListner()
function displayAlert(){
    alert('You clicked on the submit button');
}
document.getElementById('btn').addEventListener('click',displayAlert);

document.getElementById('email').addEventListener('focus',function(){
    document.getElementById('email').style.backgroundColor='yellow';
})
document.getElementById('email').addEventListener('blur',function(){
    document.getElementById('email').style.backgroundColor='white';
})
*/

//Build a Sample Project

//MODAL WINDOWS

/*
When modal window appears on your window, the webpage becomes unresponsive. until you deal with the modal window
*/

//1. alert - used to show a message to users
//alert('Welcome to JavaScript DOM');

//2. prompt - used to take input from user
/*let age = prompt('Enter your age');
console.log(age);
*/

//3. confirm - used to get confirmation from user
/*let del = confirm('Do you want to delete this item?');
console.log(del);
*/

//Custom Alert Button

let btnAlert = document.querySelector('.btn-alert');
let alertEl = document.querySelector('.alert');
let overlayEl = document.querySelector('.overlay');
let alertOK = document.getElementById('alertOK');

function showAlert(){
    alertEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
}

function hideAlert(){
    alertEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
}

btnAlert.addEventListener('click', showAlert)

alertOK.addEventListener('click',hideAlert)


//custome prompt

let promptBtn = document.getElementById('btn-prompt');
let promptEl = document.querySelector('.prompt');

let promptOK = document.getElementById('promptOK');
let promptCancel = document.getElementById('promptCancel');

let input = document.getElementById('input');

function showPrompt(){
    promptEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
}
function hidePrompt(event){
    
    let value;
    //console.log(event.target.textContent);
    if(event.target.textContent === 'OK'){
        value = input.value;
    }
    else{
        value = null;
    }
    console.log(value);
    overlayEl.classList.add('hidden');
    promptEl.classList.add('hidden');
}

promptBtn.addEventListener('click', showPrompt)

promptOK.addEventListener('click', hidePrompt)

promptCancel.addEventListener('click', hidePrompt)

//Adding Elements dynamically to webpage using js

//1. Create DIV element
let div = document.createElement('div');

//2.create a text content
let textNode = document.createTextNode('This is a dynamically generated text.');
div.appendChild(textNode);

//3. adding DIV element to the webpage
let contentsDiv = document.querySelector('.contents');
let listsDiv = document.querySelector('.lists');
//HTMLelementInsideWhichYou Want to add .insertBefore(element you want to insert, element before which you want to insert);
contentsDiv.insertBefore(div, listsDiv);

div.classList.add('import-update');
div.style.marginTop = "30px";