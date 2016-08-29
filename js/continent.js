function Continent(bonus) {
  this.territories=[];
  this.bonusTroops=bonus;
}
Continent.prototype.isOwned = function() {
  //for each territory in continents, check to see if owner is the same
  //if same, return owner.name
  //if not same, return "none"
}
