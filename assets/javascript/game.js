$(document).ready(function(){
  
  
var crystalPoints =[];
for (i=0; i<4; i++) {
  crystalPoints[i] = Math.floor(Math.random() *  12 + 1);
}

console.log(crystalPoints);

var goalScore = Math.floor(Math.random() *  120 + 19);
var wins = 0;
var losses = 0;




$(".crystal").click(function(){

  // Clicking the button triggers an alert message.
  alert("you clicked on a crystal");

});



});