// Backend Logic
// Dice JS
function Die(sides, type, color, value) {
  this.sides = sides;
  this.type = type; //defense, attack, defense bonus, attack bonus
  this.color = color; //determined by type, attack=black, defense=red
  this.value = 1;
  this.roll();
}

Die.prototype.roll=function(){
    min = 1;
    max = this.sides;
    this.value = Math.floor(Math.random()*(max - min+1)) + min;
}

// Frontend Logic
 var newGame = new Game();

$("h4").click(function(){
  var msg = "";
  msg = "<h2>Active Player: Player One</h2>";
  msg += "<h3>Objectives Achieved:</h3>";
  msg += "<p id='rewards'>Major Rewards</p>";
  msg += "<p>Minor Rewards</p>";
  msg += "<ul>";
  msg += "<li>Congo: 5</li>";
  msg += "<li>Peru: 3</li>";
  msg += "<li>Iceland: 7</li>";
  msg += "<li>Quebec: 21</li>";
  msg += "</ul>";
  msg += "<p>Troop Draft</p>";
  msg += "<p>Place Troops</p>";
  msg += "<button id='attack'>Attack</button>";
  msg += "<button id='end'>End Turn</button>";
  msg += "<p>Draw Card</p>";
  $("#activePlayer").html(msg);
  $("#activePlayer").show();
  $("#attack").click(function(){
    $("#battle").show();
  });
});

$("#battle").click(function(){
  var redOne =  new Die(6, "defense", "red");
  var redTwo =  new Die(6, "defense", "red");
  var blackOne =  new Die(6, "attack", "black");
  var blackTwo =  new Die(6, "attack", "black");
  var blackThree =  new Die(6, "attack", "black");
  var redArray = [];
  var blackArray = [];
  function sortArray(){
    redArray.sort(function(a, b){return b-a});
    blackArray.sort(function(a, b){return b-a});
  }
  // troop/dice roll logic
  var player1troops = 5; //Inputted numbers for testing
  var player2troops = 3;  //Inputted numbers for testing

  // for defend(red) dice
    if (player2troops >= 2){
    redOne.roll();
    redTwo.roll();
    redArray.push(redOne.value, redTwo.value);
    sortArray();
    $("#defendOne").text(redArray[0]);
    $("#defendTwo").text(redArray[1]);
    $("#defendOne").show();
    $("#defendTwo").show();
    }
    else if (player2troops === 1) {
    redOne.roll();
    redArray.push(redOne.value);
    $("#defendOne").text(redArray[0]);
    $("#defendOne").show();
    }

  // for attack(black) dice
    if (player1troops > 3){
    blackOne.roll();
    blackTwo.roll();
    blackThree.roll();
    blackArray.push(blackOne.value, blackTwo.value, blackThree.value);
    sortArray();
    $("#attackOne").text(blackArray[0]);
    $("#attackTwo").text(blackArray[1]);
    $("#attackThree").text(blackArray[2]);
    $("#attackOne").show();
    $("#attackTwo").show();
    $("#attackThree").show();
    }
    else if (player1troops === 3) {
    blackOne.roll();
    blackTwo.roll();
    blackArray.push(blackOne.value, blackTwo.value);
    sortArray();
    $("#attackOne").text(blackArray[0]);
    $("#attackTwo").text(blackArray[1]);
    $("#attackOne").show();
    $("#attackTwo").show();
    }
    else if (player1troops === 2) {
    blackOne.roll();
    blackArray.push(blackOne.value);
    $("#attackOne").text(blackArray[0]);
    $("#attackOne").show();
    }
    else {
    alert("You do not have enough troops here to battle.");
  }
  //determines which player won dice battle
  if ((blackArray[0] > redArray[0]) && (blackArray[1] > redArray[1])) {
    $("#winner").text("Attack wins both battles!");
  }
  else if ((blackArray[0] < redArray[0]) && (blackArray[1] < redArray[1])) {
    $("#winner").text("Defense wins both battles");
  }
  else if ((blackArray[0] > redArray[0]) && (blackArray[1] < redArray[1])) {
    $("#winner").text("Each player wins one battle");
  }
  else if ((blackArray[0] < redArray[0]) && (blackArray[1] > redArray[1])){
    $("#winner").text("Each player wins one battle");
  }
  else if ((blackArray[0] === redArray[0]) && (blackArray[1] === redArray[1])){
    $("#winner").text("Defense wins both battles");
  }
  else if ((blackArray[0] === redArray[0]) && (blackArray[1] > redArray[1])){
    $("#winner").text("Each player wins one battle");
  }
  else if ((blackArray[0] === redArray[0]) && (blackArray[1] < redArray[1])){
    $("#winner").text("Defense wins both");
  }
  else if ((blackArray[0] > redArray[0]) && (blackArray[1] === redArray[1])){
    $("#winner").text("Each player wins one battle");
  }
  else if ((blackArray[0] < redArray[0]) && (blackArray[1] === redArray[1])){
    $("#winner").text("Defense wins both battles");
  }
});
