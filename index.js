
var Olympian = require('./Olympian')

// On input value 0-3 by clicking the submit it says you are not qualified keep training
// On input value 4 + by clicking the submit it says you are  qualified

// listen for a click on the Submit button Y
// when that happens, get the value from the input Y
// use the value with the Olympian prototype
  //  instantiate (make a new) Olympian with the value from the form input
  //  use checkIfQualified method to check if the new olympian is ready
      // if true (are quliafied)
        // add YESSS to the page
      // if false
        // add KEEP TRAINING to page

var input = document.getElementById('yearsInput')

var submit = document.getElementById('clicker');

submit.addEventListener('click', function () {

// document.getElementById('result').innerHTML = input.value;
var olympian = new Olympian(parseInt(input.value))
console.log("Hey new Olympian", olympian)

  if (olympian.qualified) { document.getElementById('result').innerHTML = "You have qualified " + input.value }
  else  {document.getElementById('result').innerHTML = "Keep training " + input.value }



})



console.log("welcome to the Olympics")

var train = function () {

}
