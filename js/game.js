function Game() {
  this.players=[];
  var northAmerica = new Continent(5);
  var southAmerica = new Continent(2);
  var africa = new Continent(3);
  var asia = new Continent(7);
  var europe = new Continent(5);
  var australia = new Continent(2);
  this.board = [northAmerica,southAmerica,africa,asia,europe,australia];

  var alaska = new Territory("Alaska", 1);
  northAmerica.territories.push(alaska);
  alaska.adjacentTerritories.push("Kamchatka", "Northwest Territory", "Alberta");
  var northwestTerritory = new Territory("Northwest Territory", 2);
  northAmerica.territories.push(northwestTerritory);
  northwestTerritory.adjacentTerritories.push("Alaska", "Northwest Territory", "Ontario", "Western United States");
  var alberta = new Territory("Alberta", 1);
  northAmerica.territories.push(alberta);
  alberta.adjacentTerritories.push("Alaska", "Northwest Territory", "Ontario", "Western United States");
  var ontario = new Territory("Ontario", 1);
  northAmerica.territories.push(ontario);
  ontario.adjacentTerritories.push("Northwest Territory", "Greenland", "Easter Canada", "Alberta", "Western United States", "Eastern United States");
  var greenland = new Territory("Greenland", 1);
  northAmerica.territories.push(greenland);
  greenland.adjacentTerritories.push("Northwest Territory", "Ontario", "Eastern Canada", "Iceland");
  var easternCanada = new Territory("Eastern Canada", 1);
  northAmerica.territories.push(easternCanada);
  easternCanada.adjacentTerritories.push("Ontario", "Greenland", "Eastern United States");
  var westernUnitedStates = new Territory("Western United States", 1);
  northAmerica.territories.push(westernUnitedStates);
  westernUnitedStates.adjacentTerritories.push("Alberta", "Ontario", "Eastern United States", "Central America");
  var easternUnitedStates = new Territory("Eastern United States", 1);
  northAmerica.territories.push(easternUnitedStates);
  easternUnitedStates.adjacentTerritories.push("Western United States", "Ontario", "Eastern Canada", "Central America");
  var centralAmerica = new Territory("Central America", 1);
  northAmerica.territories.push(centralAmerica);
  centralAmerica.adjacentTerritories.push("Western United States", "Eastern United States", "Venezuela");

  var venezula = new Territory("Venezuela", 2);
  southAmerica.territories.push(venezula);
  venezula.adjacentTerritories.push("Central America", "Peru", "Brazil");
  var brazil = new Territory("Brazil", 1);
  southAmerica.territories.push(brazil);
  brazil.adjacentTerritories.push("Venezuela", "Peru", "Argentina", "North Africa");
  var peru = new Territory("Peru", 1);
  southAmerica.territories.push(peru);
  peru.adjacentTerritories.push("Venezuela", "Brazil", "Argentina");
  var argentina = new Territory("Argentina", 1);
  southAmerica.territories.push(argentina);
  argentina.adjacentTerritories.push("Peru", "Brazil");

  var northAfrica = new Territory("North Africa", 1);
  africa.territories.push(northAfrica);
  northAfrica.adjacentTerritories.push("Brazil", "Western Europe", "Egypt", "East Africa", "Central Africa");
  var egypt = new Territory("Egypt", 1);
  africa.territories.push(egypt);
  egypt.adjacentTerritories.push("North Africa", "Southern Europe", "Middle East", "East Africa");
  var eastAfrica = new Territory("East Africa", 2);
  africa.territories.push(eastAfrica);
  eastAfrica.adjacentTerritories.push("Madagascar", "South Africa", "Central Africa", "North Africa", "Egypt", "Middle East");
  var centralAfrica = new Territory("Central Africa", 2);
  africa.territories.push(centralAfrica);
  centralAfrica.adjacentTerritories.push("South Africa", "North Africa", "East Africa");
  var southAfrica = new Territory("South Africa", 1);
  africa.territories.push(southAfrica);
  southAfrica.adjacentTerritories.push("Madagascar", "Central Africa", "East Africa");
  var madagascar = new Territory("Madagascar", 1);
  africa.territories.push(madagascar);
  madagascar.adjacentTerritories.push("South Africa", "East Africa");

  var iceland = new Territory("Iceland", 1);
  europe.territories.push(iceland);
  iceland.adjacentTerritories.push("Greenland", "Scandinavia", "Northern Europe", "Great Britain");
  var greatBritain = new Territory("Great Britain", 2);
  europe.territories.push(greatBritain);
  greatBritain.adjacentTerritories.push("Iceland", "Scandinavia", "Northern Europe", "Western Europe");
  var westernEurope = new Territory("Western Europe", 2);
  europe.territories.push(westernEurope);
  westernEurope.adjacentTerritories.push("Great Britain", "Northern Europe", "Southern Europe", "North Africa");
  var northernEurope = new Territory("Northern Europe", 1);
  europe.territories.push(northernEurope);
  northernEurope.adjacentTerritories.push("Scandinavia", "Russia", "Southern Europe", "Western Europe", "Great Britain");
  var southernEurope = new Territory("Southern Europe", 1);
  europe.territories.push(southernEurope);
  southernEurope.adjacentTerritories.push("Western Europe", "Northern Europe", "Russia", "Middle East", "Egypt", "North Africa");
  var scandinavia = new Territory("Scandinavia", 1);
  europe.territories.push(scandinavia);
  scandinavia.adjacentTerritories.push("Iceland", "Great Britain", "Northern Europe", "Russia");
  var russia = new Territory("Russia", 1);
  europe.territories.push(russia);
  russia.adjacentTerritories.push("Scandinavia", "Northern Europe", "Southern Europe", "Middle East", "Afghanistan", "Ural");

  var ural = new Territory("Ural", 2);
  asia.territories.push(ural);
  ural.adjacentTerritories.push("Russia", "Afghanistan", "China", "Siberia");
  var siberia = new Territory("Siberia", 1);
  asia.territories.push(siberia);
  siberia.adjacentTerritories.push("Ural", "China", "Mongolia", "Irkutsk", "Yakutsk");
  var yakutsk = new Territory("Yakutsk", 2);
  asia.territories.push(yakutsk);
  yakutsk.adjacentTerritories.push("Siberia", "Irkutsk", "Kamchatka");
  var kamchatka = new Territory("Kamchatka", 1);
  asia.territories.push(kamchatka);
  kamchatka.adjacentTerritories.push("Yakutsk", "Mongolia", "Irkutsk", "Japan", "Alaska");
  var irkutsk = new Territory("Irkutsk", 2);
  asia.territories.push(irkutsk);
  irkutsk.adjacentTerritories.push("Siberia", "Yakutsk", "Kamchatka","Mongolia");
  var japan = new Territory("Japan", 2);
  asia.territories.push(japan);
  japan.adjacentTerritories.push("Kamchatka", "Mongolia");
  var mongolia = new Territory("Mongolia", 1);
  asia.territories.push(mongolia);
  mongolia.adjacentTerritories.push("Japan", "Kamchatka", "Irkutsk", "Siberia", "China");
  var china  = new Territory("China", 1);
  asia.territories.push(china);
  china.adjacentTerritories.push("Mongolia", "Siberia", "Ural", "Afghanistan", "India", "Southeast Asia");
  var southeastAsia = new Territory("Southeast Asia", 1);
  asia.territories.push(southeastAsia);
  southeastAsia.adjacentTerritories.push("China", "India", "Indonesia");
  var india = new Territory("India", 1);
  asia.territories.push(india);
  india.adjacentTerritories.push("Middle East", "Afghanistan", "China", "Southeast Asia");
  var middleEast = new Territory("Middle East", 1);
  asia.territories.push(middleEast);
  middleEast.adjacentTerritories.push("East Africa", "Egypt", "Southern Europe", "Afghanistan", "India", "Russia");
  var afghanistan = new Territory("Afghanistan", 1);
  asia.territories.push(afghanistan);
  afghanistan.adjacentTerritories.push("Russia", "Middle East", "India", "China", "Ural");

  var indonesia = new Territory("Indonesia", 1);
  australia.territories.push(indonesia);
  indonesia.adjacentTerritories.push("Southeast Asia", "New Guinea", "Western Australia");
  var newGuinea = new Territory("New Guinea", 1);
  australia.territories.push(newGuinea);
  newGuinea.adjacentTerritories.push("Indonesia", "Eastern Australia");
  var westernAustralia = new Territory("Western Australia", 1);
  australia.territories.push(westernAustralia);
  westernAustralia.adjacentTerritories.push("Indonesia", "Eastern Australia");
  var easternAustralia = new Territory("Eastern Australia", 2);
  australia.territories.push(easternAustralia);
  easternAustralia.adjacentTerritories.push("New Guinea", "Western Australia");
}

Game.prototype.assignTerritories = function() {
  var counter=0;
  var numberOfPlayers=this.players.length;
  for(i=0; i<numberOfPlayers; i++) {
    thisPlayer=this.players[i];
    this.board.forEach(function(continent) {
      continent.territories.forEach(function(territory) {
        if(counter%numberOfPlayers===i) {
          territory.owner=thisPlayer.name;
          thisPlayer.territories.push(territory.name);
        }
        counter++;
      });
    });
  }
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
}

// function Game() {
//   this.players=[];
//   this.dice=[];
//   this.cards=[];
//   this.objectives=[];
// }
//
// function Objective() {
//   this.reward=new Reward("{description}");
// }
// function Reward(description) {
//   this.description=description;
// }

// function Card(name, image, stars) {
//   this.territory=territoryName;
//   this.territory=territoryImage;
//   this.stars=stars;
  /*
  ### 42 Card Deck:
  #Alaska - 1
  #Argentina - 1
  #Scandinavia - 1
  #India - 1
  #Kamchatka - 1
  #Mongolia - 1
  #China - 1
  #New Guinea - 1
  #Alberta - 1
  #Yakutska - 2
  #Central Africa - 2
  #Centarl America - 1
  #Indonesia - 1
  #Southeast Asia - 1
  #Eastern Australia - 2
  #North Africa - 1
  #Egypt - 1
  #Ontario - 2
  #Western Australia - 1
  #Brazil - 1
  #East Africa - 2
  #Madagascar - 1
  #Greenland - 1
  #Iceland - 1
  #Northwest Territory - 2
  #Ural - 2
  #South Africa - 1
  #Western Europe - 2
  #Northern Europe - 1
  #Irkutsk - 2
  #Eastern Canada - 1
  #Middle East - 1
  #Western United States - 1
  #Russia - 1
  #Venezuela - 2
  #Eastern United States - 1
  #Afghanistan - 1
  #Southern Europe - 1
  #Peru - 1
  #Siberia - 1
  #Great Britain - 2
  #Japan - 2
  */
// }
