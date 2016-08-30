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

$("form").submit(function(event){
  var playersArray = []; //this is the array of colors players choose before game play
  event.preventDefault();

  $.each($("input:checked"), function (){
    playersArray.push($(this).val());
  });

  playersArray.forEach(function(teamColor){
     if(teamColor === "Yellow"){
       var teamYellow = new Player("Yellow");
       newGame.addPlayer(teamYellow);
     }
     if (teamColor === "Green"){
       var teamGreen = new Player("Green");
       newGame.addPlayer(teamGreen);
     }
     if (teamColor === "Blue"){
       var teamBlue = new Player("Blue");
       newGame.addPlayer(teamBlue);
     }
     if (teamColor === "Red"){
       var teamRed = new Player("Red");
       newGame.addPlayer(teamRed);
     }
     if (teamColor === "Black"){
       var teamBlack = new Player("Black");
       newGame.addPlayer(teamBlack);
     }

   });

  newGame.assignTerritories();
  $(".intro").slideUp();
  $(".container").slideDown();
  var numberOfPlayers = newGame.players.length;
  var activePlayerNumber = 0;
  showActivePlayer(activePlayerNumber);

  $("h4").click(function(){
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
  msg += "<button class='end'>End Turn</button>";
  msg += "</div>";

  $("#activePlayer").html(msg);
  $("#activePlayer").show();

  $("button.end").click(function() {
    if (activePlayerNumber < numberOfPlayers-1) {
      activePlayerNumber += 1;
    } else {
      activePlayerNumber = 0;
    }
    showActivePlayer(activePlayerNumber);
  });
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
