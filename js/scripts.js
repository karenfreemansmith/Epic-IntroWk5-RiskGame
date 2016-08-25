// Backend Logic
function Game() {
  this.players=[];
  this.dice=[];
  this.cards=[];
  this.objectives[];
}
function Objective() {
  this.reward=new Reward("{description}");
}
function Reward(description) {
  this.description=description;
}
function Die() {}
function Card() {}


function Player() {
  this.playerColor="";
  this.objectives=[];
  this.territories=[];
}

function Continent(continentName) {
  this.continentName=continentName;
  this.territories=[];
  this.continentColor="";
}
function Territory(territoryName) {
  this.territoryName=territoryName;
  this.city=false;
  this.capital=false;
  this.troups=0;
}
function Capital() {}
function City() {}
function Troup(color) {
  this.playerColor=color;
}


// Frontend Logic
