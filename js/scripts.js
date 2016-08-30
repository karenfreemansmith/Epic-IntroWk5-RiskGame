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
  // $("#end").click(function(){
  //   $("#dice").hide();
  // });
});

$("#battle").click(function(){
  var redOne =  new Die(6, "defense", "red");
  var redTwo =  new Die(6, "defense", "red");
  var blackOne =  new Die(6, "attack", "black");
  var blackTwo =  new Die(6, "attack", "black");
  var blackThree =  new Die(6, "attack", "black");
  var redArray = [];
  var blackArray = [];
  redOne.roll();
  redTwo.roll();
  blackOne.roll();
  blackTwo.roll();
  blackThree.roll();
  redArray.push(redOne.value, redTwo.value);
  blackArray.push(blackOne.value, blackTwo.value, blackThree.value);
  function sortArray(){
    redArray.sort(function(a, b){return b-a});
    blackArray.sort(function(a, b){return b-a});
  }
  sortArray();
  $(".red").show();
  $(".black").show();
  $("#defenseOne").text(redArray[0]);
  $("#defenseTwo").text(redArray[1]);
  $("#attackOne").text(blackArray[0]);
  $("#attackTwo").text(blackArray[1]);
  $("#attackThree").text(blackArray[2]);
});
