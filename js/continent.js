function Continent(bonus) {
  this.territories=[];
  this.bonusTroops=bonus;
}
Continent.prototype.isOwned = function() {
  var continentOwner="";
  this.territories.forEach(function(territory) {
    if((territory.owner===continentOwner)||(continentOwner==="")) {
      continentOwner=territory.owner;
    } else {
      continentOwner= "none";
    }
    return continentOwner;
  });
}
