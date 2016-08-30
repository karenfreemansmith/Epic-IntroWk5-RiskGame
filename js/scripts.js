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
 var teamYellow = new Player("Yellow");
 var teamGreen = new Player("Green");
 var teamBlue = new Player("Blue");
 var teamRed = new Player("Red");
 var teamBlack = new Player ("Black");
 newGame.addPlayer(teamYellow);
 newGame.addPlayer(teamGreen);
 newGame.addPlayer(teamBlue);
 newGame.addPlayer(teamRed);
 newGame.addPlayer(teamBlack);

 newGame.assignTerritories();
 showActivePlayer(0);

$("h4").click(function(){
  //alert($(this).text().substr(5));
  var playerName=$(this).text().substr(5);
  if (playerName === "Yellow") {
    var playerClass = "p1";
  } else if(playerName === "Green") {
    var playerClass = "p2";
  }else if(playerName === "Blue") {
    var playerClass = "p3";
  }else if(playerName === "Red") {
    var playerClass = "p4";
  }else if(playerName === "Black") {
    var playerClass = "p5";
  }
  var msg = "";
  var troopDraft = 0;
  msg = "<h2 class='"+playerClass+"'>"+$(this).text()+"</h2>";
  msg += "<h3>Territories Owned:</h3>";
  msg += "<ul>";
  newGame.players.forEach(function(player){
    if (player.name === playerName) {
      troopDraft = Math.floor(player.territories.length/3);
      player.territories.forEach(function(territory) {
        msg += "<li class = '"+playerClass+"'>"+territory+ ": ";
        newGame.board.forEach(function(continent){
          continent.territories.forEach(function(t) {
            if(t.name===territory) {
              msg+=t.troops;
            }
          });
        });
      });
    }
    msg+="</li>";
  });

  msg += "</ul>";
  $("#otherPlayer").html(msg);
  $("#otherPlayer").show();
});

function showActivePlayer(playerNumber){

  var playerName=newGame.players[playerNumber].name;
  if (playerName === "Yellow") {
    var playerClass = "p1";
  } else if(playerName === "Green") {
    var playerClass = "p2";
  }else if(playerName === "Blue") {
    var playerClass = "p3";
  }else if(playerName === "Red") {
    var playerClass = "p4";
  }else if(playerName === "Black") {
    var playerClass = "p5";
  }
  var msg = "";
  var troopDraft = 0;
  msg = "<h2 class='"+playerClass+"'>Team "+playerName+"</h2>";
  msg += "<h3>Territories Owned:</h3>";
  msg += "<ul>";
  newGame.players.forEach(function(player){
    if (player.name === playerName) {
      troopDraft = Math.floor(player.territories.length/3);
      player.territories.forEach(function(territory) {
        msg += "<li class = '"+playerClass+"'>"+territory+ ": ";
        newGame.board.forEach(function(continent){
          continent.territories.forEach(function(t) {
            if(t.name===territory) {
              msg+=t.troops;
            }
          });
        });
      });
    }
    msg+="</li>";
  });

  msg += "</ul>";
  msg += "<div class='draft'>";
  msg += "<p>Troop Draft: "+troopDraft+"</p>";
  msg += "<p>Place Troops</p>";
  msg += "</div>";
  msg += "<div class='attack'>";
  msg += "<button id='attack'>Attack</button>";
  msg += "<button>End Attack Manuvers</button>";
  msg += "<button>End Turn Manuvers</button>";
  msg += "</div>";
  $("#activePlayer").html(msg);
  $("#activePlayer").show();
  $("#attack").click(function(){
    $("#battle").show();
  });
}

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
