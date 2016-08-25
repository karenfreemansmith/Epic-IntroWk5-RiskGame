// Backend Logic
function Game() {
  this.players=[];
  this.dice=[];
  this.cards=[];
  this.objectives=[];
  this.continents=[];
  this.continents.push(new Continent("North America"));
    this.continents[0].territories.push(new Territory("Greenland"));
      this.continents[0].territories[0].adjacentTerritories.push
      ("Iceland", "Northwest Territory", "Ontario", "Quebec");
    this.continents[0].territories.push(new Territory("Northwest Territory"));
      this.continents[0].territories[1].adjacentTerritories.push
      ("Alaska", "Alberta", "Ontario", "Greenland");
    this.continents[0].territories.push(new Territory("Alaska"));
      this.continents[0].territories[2].adjacentTerritories.push
      ("Kamchatka", "Northwest Territory", "Alberta");
    this.continents[0].territories.push(new Territory("Alberta"));
      this.continents[0].territories[3].adjacentTerritories.push
      ("Alaska", "Northwest Territory", "Ontario", "Western United States");
    this.continents[0].territories.push(new Territory("Ontario"));
      this.continents[0].territories[4].adjacentTerritories.push
      ("Greenland", "Northwest Territory", "Alberta", "Quebec", "Western United States", "Eastern United States");
    this.continents[0].territories.push(new Territory("Quebec"));
      this.continents[0].territories[5].adjacentTerritories.push
      ("Greenland", "Ontario", "Eastern United States");
    this.continents[0].territories.push(new Territory("Western United States"));
      this.continents[0].territories[6].adjacentTerritories.push
      ("Central America", "Eastern United States", "Ontario", "Alberta");
    this.continents[0].territories.push(new Territory("Eastern United States"));
      this.continents[0].territories[7].adjacentTerritories.push
      ("Central America", "Western United States", "Ontario", "Quebec");
    this.continents[0].territories.push(new Territory("Central America"));
      this.continents[0].territories[8].adjacentTerritories.push
      ("Western United States", "Eastern United States", "Venezuela");
  this.continents.push(new Continent("South America"));
    this.continents[1].territories.push(new Territory("Venezuela"));
    this.continents[1].territories.push(new Territory("Brazil"));
    this.continents[1].territories.push(new Territory("Peru"));
    this.continents[1].territories.push(new Territory("Argentina"));
  this.continents.push(new Continent("Europe"));
    this.continents[2].territories.push(new Territory("Iceland"));
    this.continents[2].territories.push(new Territory("Scandinavia"));
    this.continents[2].territories.push(new Territory("Ukraine"));
    this.continents[2].territories.push(new Territory("Northern Europe"));
    this.continents[2].territories.push(new Territory("Southern Europe"));
    this.continents[2].territories.push(new Territory("Western Europe"));
    this.continents[2].territories.push(new Territory("Great Britan"));
  this.continents.push(new Continent("Africa"));
    this.continents[3].territories.push(new Territory("Egypt"));
    this.continents[3].territories.push(new Territory("North Africa"));
    this.continents[3].territories.push(new Territory("Congo"));
    this.continents[3].territories.push(new Territory("South Africa"));
    this.continents[3].territories.push(new Territory("East Africa"));
    this.continents[3].territories.push(new Territory("Madagascar"));
  this.continents.push(new Continent("Asia"));
    this.continents[4].territories.push(new Territory("Afghanistan"));
    this.continents[4].territories.push(new Territory("Ural"));
    this.continents[4].territories.push(new Territory("Siberia"));
    this.continents[4].territories.push(new Territory("Yakutsk"));
    this.continents[4].territories.push(new Territory("Irkutsk"));
    this.continents[4].territories.push(new Territory("Kamchatka"));
    this.continents[4].territories.push(new Territory("Japan"));
    this.continents[4].territories.push(new Territory("Mongolia"));
    this.continents[4].territories.push(new Territory("China"));
    this.continents[4].territories.push(new Territory("Siam"));
    this.continents[4].territories.push(new Territory("India"));
    this.continents[4].territories.push(new Territory("Middle East"));
  this.continents.push(new Continent("Australia"));
    this.continents[5].territories.push(new Territory("Indonesia"));
    this.continents[5].territories.push(new Territory("New Guinea"));
    this.continents[5].territories.push(new Territory("Western Australia"));
    this.continents[5].territories.push(new Territory("Eastern Australia"));
}
function Objective() {
  this.reward=new Reward("{description}");
}
function Reward(description) {
  this.description=description;
}
function Die(sides, type) {
  this.sides = sides;
  this.type = type; //defense, attack, defense bonus, attack bonus
  this.color = ""; //determined by type, attack=black, defense=red
  this.value = 1;
  this.roll();
}

Die.prototype.roll=function(){
    min = 1;
    max = this.sides;
    this.value = Math.floor(Math.random()*(max - min+1)) + min;
}

function Card(name, image, stars) {
  this.territory=territoryName;
  this.territory=territoryImage;
  this.stars=stars;
}

function Player() {
  this.playerColor="";
  this.objectives=[];
  this.territories=[];
}

function Continent(continentName) {
  this.continentName=continentName;
  this.continentColor="";
  this.territories=[];
}
Continent.prototype.findTerritory = function(territoryName) {
  this.territories.forEach(function(territory, index) {
    if(territory.territoryName===territoryName) {
      // alert(index);
    }
  });
}

function Territory(territoryName) {
  this.territoryName=territoryName;
  this.adjacentTerritories=[];
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
var newGame = new Game();

$("h4").click(function(){
  var msg = "";
  msg = "<h2>Active Player: Player One</h2>";
  msg += "<h3>Objectives Achieved:</h3>";
  msg += "<p id='rewards'>Major Rewards</p>";
  msg += "<p>Minor Rewards</p>";
  msg += "<ul>";
  msg += "<li>Congo: 5</li>";
  msg += "<li>Peru: 3</li>";
  msg += "<li>Iceland: 7</li>";
  msg += "<li>Quebec: 21</li>";
  msg += "</ul>";
  msg += "<p>Troop Draft</p>";
  msg += "<p>Place Troops</p>";
  msg += "<button>Attack</button>";
  msg += "<button>End Attack Manuvers</button>";
  msg += "<button>End Turn Manuvers</button>";
  msg += "<p>Draw Card</p>";
  $("#activePlayer").html(msg);
});
