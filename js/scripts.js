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
  msg += "<button>End Attack Manuvers</button>";
  msg += "<button>End Turn Manuvers</button>";
  msg += "<p>Draw Card</p>";
  $("#activePlayer").html(msg);
  $("#activePlayer").toggle();
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
  redOne.roll();
  redTwo.roll();
  blackOne.roll();
  blackOne.roll();
  blackOne.roll();
  $(".red").show();
  $(".black").show();
  $("#defenseOne").text(redOne.value);
  $("#defenseTwo").text(redTwo.value);
  $("#attackOne").text(blackOne.value);
  $("#attackTwo").text(blackTwo.value);
  $("#attackThree").text(blackThree.value);
});
