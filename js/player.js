function Player(name) {
  this.name=name;
  this.color="";
  this.territories=[];
}
Player.prototype.draftTroops = function() {
  var troops=0;
  game.board.forEach(function(continent) {
    if (continent.isOwned===this.name) {
      troops+=continent.bonusTroops;
    }
  });

  return Math.floor(this.territories.length/3);
}

Player.prototype.removeTerritory = function(territoryName) {
  alert("You have arrived at the non-functioning function, would you like to non-function with us?");
  for(var i=0;i<this.territories.length;i++){
    alert(this.territories[i]);
    if(this.territories[i] === territoryName){

      this.territories.splice(i,1);
    }
  }
}
// function Player() {
//   this.playerColor="";
//   this.objectives=[];
//   this.territories=[];
// }
//
