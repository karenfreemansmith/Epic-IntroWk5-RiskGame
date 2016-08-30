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

// function Continent(continentName) {
//   this.continentName=continentName;
//   this.continentColor="";
//   this.territories=[];
// }
Continent.prototype.findTerritory = function(territoryName) {
  this.territories.forEach(function(territory) {
    if(territory.territoryName===territoryName) {
      console.log(territory.troops);
    }
  });
}
// Continent.prototype.isOwned = function() {
//   // check to see if all territories have same owner
//   // if same return player designation
//   // or return "none"
// }
