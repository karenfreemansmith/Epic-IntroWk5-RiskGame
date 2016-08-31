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

// Continent.prototype.isOwned = function() {
//   // check to see if all territories have same owner
//   // if same return player designation
//   // or return "none"
// }
