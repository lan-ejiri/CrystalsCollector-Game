$(document).ready(function(){
  
  var goalScore;
  var wins = 0;
  var losses = 0;
  var crystalPoints =[];
  var userScore = 0;

  var pictureArray = [
    { name: 'crystal1', image: 'assets/images/crystal1.png'}, 
    { name: 'crystal2', image: 'assets/images/crystal2.png'}, 
    { name: 'crystal3', image: 'assets/images/crystal3.png'}, 
    { name: 'crystal4', image: 'assets/images/crystal4.png'}, 
  ];
console.log(pictureArray);

  //  //listening for keypresses
  document.onkeyup = function(event) {

    //Determinses which key was pressed.
    keyPress = event.key;
  
    //if key press was space
    if(keyPress == " "){
      
      console.log("space was pressed");
      //generate goal score, reset user score to 0, reset images
      userScore = 0;
      $("#userScore").text(userScore);
      goalScore = Math.floor(Math.random() *  120 + 19);
      $("#goalScore").text(goalScore);
      console.log("goal score: " + goalScore);
      $("#crystals").empty();

      //make array fir values
      for (i=0; i<4; i++) {
        crystalPoints[i] = Math.floor(Math.random() *  12 + 1);
      }

      //make the picutres on the screen, assign values
      for (var i = 0; i < crystalPoints.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", pictureArray[i].image);
        imageCrystal.attr("data-crystalvalue", crystalPoints[i]);
        imageCrystal.attr("height", "180px");
        $("#crystals").append(imageCrystal);
      } 

    }

    //any other key presses
    else {
      //do nothing
      alert("whoops, you don't need to press that key boi. Press space to start a new game or click a crystal to resume current game.");
    }
  }

  $("#crystals").on("click", ".crystal-image", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  
    console.log("crytsal value:" + crystalValue);

    //every click adds crystal value to user score
    userScore = userScore + crystalValue;

    //update user score with every click
    $("#userScore").text(userScore);

    //if user score is same as goal score, win stuff
    if (userScore === goalScore) {
     // how tf do i make the last score show up $("#userScore").text(userScore);

      alert("You win! Press space to start another game");
      wins++;
      $("#wins").text(wins);

      userScore = 0;
      $("#userScore").text(userScore);
      goalScore = Math.floor(Math.random() *  120 + 19);
      $("#goalScore").text(goalScore);
      console.log("goal score: " + goalScore);
      $("#crystals").text("press space to play again");
    }

    //if user score goes over goal score, lose stuff
    else if (userScore >= goalScore) {
      alert("You lose! Press space to start another game");
      losses++;
      $("#losses").text(losses);
      userScore = 0;
      $("#userScore").text(userScore);
      goalScore = Math.floor(Math.random() *  120 + 19);
      $("#goalScore").text(goalScore);
      console.log("goal score: " + goalScore);
      $("#crystals").text("press space to play again");
    }

  });

  
});