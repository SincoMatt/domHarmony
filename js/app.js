/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
matCount.innerHTML = 11;


//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
msgCount.innerHTML = 23;


//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
fullname.innerHTML = 'Ronald McDonald';


//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
age.innerHTML = 63;


//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var jobBox = document.createElement('div');
jobBox.id = 'job';
jobBox.innerHTML = "Clown and Restauranteur";
data.appendChild(jobBox);


//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var hob = document.createElement('div');
hob.id = 'hobbies';
hob.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
data.appendChild(hob);


//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var local = document.createElement('div');
local.id = 'location';
local.innerHTML = 'Honolulu, HI';
data.appendChild(local);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var wants = document.createElement('div');
wants.id = 'wants';
wants.innerHTML = 'Looking for a Mrs. McDonald';
data.appendChild(wants);


//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var para = document.createElement('p');
para.id = 'pro2';
para.innerHTML = 'I love falllowing chuildren and giving them food. Adults may not understand me but the children do. I love children!!';
data.appendChild(para);


//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var nameElem = document.createElement('firstName');
nameElem[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var ageElem = document.createElement('otherAge');
ageElem[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var statELem = document.createElement('status');
statELem[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
var nameElem = document.createElement('firstName');
nameElem[0].innerHTML = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
var ageElem = document.createElement('otherAge');
ageElem[0].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto

var myName = document.createElement('firstName');
myName[0].innerHTML = 'Matt';

var myAge = document.createElement('otherAge');
myAge[0].innerHTML = 20;

var myStatus = document.createElement('status');
myStatus[0].innerHTML = 'taken';

var myMotto = document.createElement('motto');
myMotto[0].innerHTML = 'It aint easy being the greatest';


