function Game() {
  var northAmerica = new Continent();
  var southAmerica = new Continent();
  var africa = new Continent();
  var asia = new Continent();
  var europe = new Continent();
  var australia = new Continent();

  var alaska = new Territory();
  northAmerica.territories.push(alaska);
  var northwestTerritory = new Territory();
  northAmerica.territories.push(northwestTerritory);
  var alberta = new Territory();
  northAmerica.territories.push(alberta);
  var ontario = new Territory();
  northAmerica.territories.push(ontario);
  var greenland = new Territory();
  northAmerica.territories.push(greenland);
  var easternCanada = new Territory();
  northAmerica.territories.push(easternCanada);
  var westernUnitedStates = new Territory();
  northAmerica.territories.push(westernUnitedStates);
  var easternUnitedStates = new Territory();
  northAmerica.territories.push(easternUnitedStates);
  var centralAmerica = new Territory();
  northAmerica.territories.push(centralAmerica);

  var venezula = new Territory();
  southAmerica.territories.push(venezula);
  var brazil = new Territory();
  southAmerica.territories.push(brazil);
  var peru = new Territory();
  southAmerica.territories.push(peru);
  var argentina = new Territory();
  southAmerica.territories.push(argentina)

  var northAfrica = new Territory();
  africa.territories.push(northAfrica);
  var egypt = new Territory();
  africa.territories.push(egypt);
  var eastAfrica = new Territory();
  africa.territories.push(eastAfrica);
  var centralAfrica = new Territory();
  africa.territories.push(centralAfrica);
  var southAfrica = new Territory();
  africa.territories.push(southAfrica);
  var madagascar = new Territory();
  africa.territories.push(madagascar);

  var iceland = new Territory();
  europe.territories.push(iceland);
  var greatBritain = new Territory();
  europe.territories.push(greatBritain);
  var westernEurope = new Territory();
  europe.territories.push(westernEurope);
  var northernEurope = new Territory();
  europe.territories.push(northernEurope);
  var southernEurope = new Territory();
  europe.territories.push(southernEurope);
  var scandinavia = new Territory();
  europe.territories.push(scandinavia);
  var russia = new Territory();
  europe.territories.push(russia);

  var ural = new Territory();
  asia.territories.push(ural);
  var siberia = new Territory();
  asia.territories.push(siberia);
  var yakutsk = new Territory();
  asia.territories.push(yakutsk);
  var kamchatka = new Territory();
  asia.territories.push(kamchatka);
  var irkutsk = new Territory();
  asia.territories.push(irkutsk);
  var japan = new Territory();
  asia.territories.push(japan);
  var mongolia = new Territory();
  asia.territories.push(mongolia);
  var china  = new Territory();
  asia.territories.push(china);
  var southeastAsia = new Territory();
  asia.territories.push(southeastAsia);
  var india = new Territory();
  asia.territories.push(india);
  var middleEast = new Territory();
  asia.territories.push(middleEast);
  var afghanistan = new Territory();
  asia.territories.push(afghanistan);

  var indonesia = new Territory();
  australia.territories.push(indonesia)
  var newGuinea = new Territory();
  australia.territories.push(newGuinea)
  var westernAustralia = new Territory();
  australia.territories.push(westernAustralia)
  var easternAustralia = new Territory();
  australia.territories.push(easternAustralia)




}
