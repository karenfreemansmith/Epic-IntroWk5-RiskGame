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

// function Player() {
//   this.playerColor="";
//   this.objectives=[];
//   this.territories=[];
// }
//
