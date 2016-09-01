//Frontend Logic (see other files for backend object...game.js, player.js, etc)
  var newGame = new Game();

//Setup splash screen
$("form").submit(function(event){
  var playersArray = []; //this is the array of colors players choose before game play
  event.preventDefault();
  $.each($("input:checked"), function (){
    playersArray.push($(this).val());
  });
  for (i=0; i<playersArray.length; i++) {
    if(playersArray[i] === "Yellow"){
      var teamYellow = new Player("Yellow");
      newGame.addPlayer(teamYellow);
      $(".p1").show();
    }
    if (playersArray[i] === "Green"){
      var teamGreen = new Player("Green");
      newGame.addPlayer(teamGreen);
      $(".p2").show();
    }
    if (playersArray[i]=== "Blue"){
      var teamBlue = new Player("Blue");
      newGame.addPlayer(teamBlue);
      $(".p3").show();
    }
    if (playersArray[i] === "Red"){
      var teamRed = new Player("Red");
      newGame.addPlayer(teamRed);
      $(".p4").show();
    }
    if (playersArray[i] === "Black"){
      var teamBlack = new Player("Black");
      newGame.addPlayer(teamBlack);
      $(".p5").show();
    }
  }
  newGame.assignTerritories();
  $(".intro").slideUp();
  $(".container").slideDown();
  newGame.numberOfPlayers = newGame.players.length;

  showActivePlayer(newGame.activePlayerIndex);

  $("h4").click(function(){
    var playerName=$(this).text().substr(5);
    if (playerName === "Yellow") {
      var playerClass = "p1";
    } else if(playerName === "Green") {
      var playerClass = "p2";
    } else if(playerName === "Blue") {
      var playerClass = "p3";
    } else if(playerName === "Red") {
      var playerClass = "p4";
    } else if(playerName === "Black") {
      var playerClass = "p5";
    }
    var msg = "";
    // var troopDraft = 0;
    msg = "<h2 class='"+playerClass+"'>"+$(this).text()+"</h2>";
    msg += "<h3>Territories Owned:</h3>";
    msg += "<ul>";
    newGame.players.forEach(function(player){
     if (player.name === playerName) {
       newGame.troopDraft = Math.floor(player.territories.length/3);
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


//Game Play screen
  //Active Player Box
    //Title
    //Territory List
    //Draft Troops
      //Number of Troops
      //Troop Placement drop-down
  //Other Player Box
    //Title
    //Territory List
  //Teams Box
    //Teams Playing
    //Attack button
    //End Turn button
  //Battle Area
  //Attack From Box
  //Defending Territory Box
function getPlayerClass(playerName) {
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
  return playerClass;
}

function showAdjacent(at, playerClass, t) {
  $("#adjacent").append("<li class='defenders'>" + at + "</li>");
  $(".defenders").last().click(function() {
    newGame.defending=newGame.findTerritory(at);
    $("#defendingTerritory").text(newGame.defending.name + " (" + newGame.defending.troops + ")");
    $("#defendingTerritory").addClass(getPlayerClass(newGame.defending.owner));
  });
  $("#placeTroopsTerritory").text(t.name);
  $("#attackingTerritory").text(t.name + " ("+t.troops+")");
  $("#attackingTerritory").addClass(playerClass);
  $("#numberOfTroopsPlaced").empty();
  for (var i=t.troops; i<=newGame.troopDraft+t.troops; i++) {
    $("#numberOfTroopsPlaced").append("<option>"+i+"</option>");
  }
}

function showActivePlayer(playerNumber){
  var playerName=newGame.players[playerNumber].name;
  playerClass=getPlayerClass(playerName);
  $("#activePlayer h2").removeClass();
  $("#activePlayer h2").addClass(playerClass);
  $("#teamName").text(playerName);

  // activePlayerTerritories
  newGame.players.forEach(function(player){
    var msg="";
    if (player.name === playerName) {
      newGame.troopDraft = Math.floor(player.territories.length/3);
      $("#troopsDrafted").text(newGame.troopDraft);
      $("#activePlayerTerritories").empty();
      player.territories.forEach(function(territory) {
        msg = "<li class = '"+playerClass+"'><span class='territory'>"+territory+ ": ";
        newGame.board.forEach(function(continent){
          continent.territories.forEach(function(t) {
            if(t.name===territory) {
              msg+=t.troops;
              msg+="</span></li>";
              $("#activePlayerTerritories").append(msg);
              $(".territory").last().click(function() {
                newGame.attacking=t;
                $("#adjacent").empty();
                newGame.attacking.adjacentTerritories.forEach(function(at) {
                  showAdjacent(at, playerClass, t);
                });
              }); // end of .territory last
            } // end of if t name
          }); //end of  continent territories for Each
        }); // end of newGame .board territory
      }); //end of for each territory
    } // end of if player name
  }); //end of newGame players
  $("#activePlayer").show();
  $("#numberOfTroopsPlaced").change(function(){
    var troops2move=parseInt($("#numberOfTroopsPlaced").val())-newGame.attacking.troops;
    newGame.troopDraft-=troops2move;
    $("#troopsDrafted").text(newGame.troopDraft);
    newGame.attacking.troops+=troops2move;
    $("#attackingTerritory").text(newGame.attacking.name + " ("+newGame.attacking.troops+")");
  });
}
$("button.endTurn").click(function() {
  if (newGame.activePlayerIndex < newGame.numberOfPlayers-1) {
    newGame.activePlayerIndex += 1;
  } else {
    newGame.activePlayerIndex = 0;
  }
  // $("#battle").hide();
  // $("#dice").hide();
  showActivePlayer(newGame.activePlayerIndex);
  if (newGame.players.length === 1) { // THIS IS WHERE WINNER OF GAME IS DECLARED, permenant trigger button tbd
    $(".game-body").hide();
    $("body").css("background-image", "none");
    $("body").css("background-color", "black");
    $("#finale").show();
    $("#theWinner").text(newGame.players[0].name + " team wins!");
  }
});
$("button.attack").click(function(){
  $("#battle").show();
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
  var player1troops = newGame.attacking.troops;
  var player2troops = newGame.defending.troops;

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
    newGame.defending.troops -= 2;
  }
  else if ((blackArray[0] < redArray[0]) && (blackArray[1] < redArray[1])) {
    $("#winner").text("Defense wins both battles");
    newGame.attacking.troops -= 2;
  }
  else if ((blackArray[0] > redArray[0]) && (blackArray[1] < redArray[1])) {
    $("#winner").text("Each player wins one battle");
  }
  else if ((blackArray[0] < redArray[0]) && (blackArray[1] > redArray[1])){
    $("#winner").text("Each player wins one battle");
    newGame.attacking.troops -= 1;
    newGame.defending.troops -= 1;
  }
  else if ((blackArray[0] === redArray[0]) && (blackArray[1] === redArray[1])){
    $("#winner").text("Defense wins both battles");
    newGame.attacking.troops -= 2;
  }
  else if ((blackArray[0] === redArray[0]) && (blackArray[1] > redArray[1])){
    $("#winner").text("Each player wins one battle");
    newGame.attacking.troops -= 1;
    newGame.defending.troops -= 1;
  }
  else if ((blackArray[0] === redArray[0]) && (blackArray[1] < redArray[1])){
    $("#winner").text("Defense wins both battles");
    newGame.attacking.troops -= 2;
  }
  else if ((blackArray[0] > redArray[0]) && (blackArray[1] === redArray[1])){
    $("#winner").text("Each player wins one battle");
    newGame.attacking.troops -= 1;
    newGame.defending.troops -= 1;
  }
  else if ((blackArray[0] < redArray[0]) && (blackArray[1] === redArray[1])){
    $("#winner").text("Defense wins both battles");
    newGame.attacking.troops -= 2;
  }

  if (blackArray[0] < redArray[0]) {
    $("#winner").text("Defense wins this battle");
    newGame.attacking.troops -= 1;
  }
  if (blackArray[0] > redArray[0]) {
    $("#winner").text("Attack wins this battle");
    newGame.defending.troops -= 1;
  }
  if (blackArray[0] === redArray[0]) {
    $("#winner").text("Defense wins this battle");
    newGame.attacking.troops -= 1;
  }
  if (newGame.defending.troops <= 0) {
    //alert(newGame.defending.owner);
    newGame.loseBattle(newGame.attacking.owner,newGame.defending.owner, newGame.defending);
    newGame.defending.owner = newGame.attacking.owner;
  }
  alert("Defending Troops: " + newGame.defending.troops);
  alert("Attacking Troops: " + newGame.attacking.troops);
});

//End Game screen
