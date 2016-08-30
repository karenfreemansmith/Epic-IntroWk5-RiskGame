# Risk
A web-based game of risk by:
###Aimen Khakwani, J'ena SanCartier, Karen Freeman-Smith, and Katy Henning

### Specifications:
#### Game Setup
* Create board objects *(Karen- already in progress before we switched projects)*
  * continents defined
    * input - start game
    * output - array of 6 continents with continent name
  * territories defined
    * input - continent name
    * output - array of territories in that continent
  * adjacent territories defined
    * input - territory name
    * output - array of adjacent territories
* Allow 3-5 players *(J'ena?)*
  * input and store player names in player objects
  * create player "card" in user interface to show current player's stats
* Assign (random) territories and troops to players *(Katy?)*
  * assign each territory to a player (randomly, like dealing a deck of cards)
  * assign each player troops according to territories held
* Create game dice *(Aimen?)*
  * 3 - 6-sided black dice for attacks
  * 2 - 6-sided red dice for defense
* Optional features:
  * cities
  * capitals
  * various presets for starting territories assigned less randomly

### Game Play (Each Turn)
* Draft troops according to: *(Karen?)*
  * 1 troop for every 3 territories held
  * Extra troops if an entire continent is held (optional)
* Attack neighboring countries until "hold" *(Aimen?)*
  * You can keep attacking countries as long as you have troops (looping)
  * Each attack -
    * you can roll 1 die for up to 3 troops, as long as you have ONE troop left behind to defend territory. (rolls up to 3 dice-black)
    * defender chooses to defend with 1 or 2 troops, as long as they are available (rolls up to 2 dice-red)
    * order all dice highest to lowest so that you compare highest black to highest red, and so on to determine who "wins" each battle. (defense wins ties)
    * loser for each die matchup removes 1 troop from their territory.
    * ignore extra dice
* Reassigning territory when all troops are removed after a battle *(Katy?)*
  * winner gets losers territory
  * winner gets a card/star(s) - optional feature
* *(Optional feature: check for objectives met)*
* Create user interface for attacking player and defending player *(J'ena?)*
  * Show any continents held
  * *(optional - show objectives if met and bonuses received)*
  * Show countries held and number of troops in each country
    * Update countries in list if they are reassigned after a battle
  * Update troop numbers when battles are won/lost
  * Update number of troops player can draft at start of next turn
* After "hold" player can maneuver troops to new Territory *(Karen?)*
  * MVP - one maneuver troops from one territory to one other adjacent territory
  * *(optional upgrade, unlimited maneuvers to any adjacent territory)*

### End Game on World Domination
* Determine if any player holds all territories - they win, game over
* *(Optional: first player who achieves 3 objectives wins)*
