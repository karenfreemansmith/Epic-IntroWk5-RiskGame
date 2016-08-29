function Player(name) {
  this.name=name;
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
