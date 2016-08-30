function Territory(name, troops) {
  this.name=name;
  this.owner="none";
  this.troops=troops;
  this.adjacentTerritories=[];
}

// function Territory(territoryName) {
//   this.territoryName=territoryName;
//   this.adjacentTerritories=[];
//   this.city=false;
//   this.capital=false;
//   this.troups=0;
// }
//
// function Capital() {}
// function City() {}
// function Troop(color) {
//   this.playerColor=color;
// }
