# [Risk](https://karenfreemansmith.github.io/risk/)
__Version 1.0.0: August 31, 2016__

A web-based game of risk by:
[Aimen Khakwani](https://github.com/aimenkhakwani), [J'ena SanCartier](https://github.com/jenasancartier), [Karen Freeman-Smith](https://github.com/karenfreemansmith), and [Katy Henning](https://github.com/KatyCodes)

![project screenshot](/img/screenshot.jpg)


## Technologies Used
HTML, CSS, Bootstrap, JavaScript, jQuery

## Specifications:
### Game Setup
* Create board objects
  * continents defined
    * input - start game
    * output - array of 6 continents with continent name
  * territories defined
    * input - continent name
    * output - array of territories in that continent
  * adjacent territories defined
    * input - territory name
    * output - array of adjacent territories
* Allow 3-5 players
  * input and store player names in player objects
  * create player "card" in user interface to show current player's stats
* Assign (random) territories and troops to players
  * assign each territory to a player (randomly, like dealing a deck of cards)
  * assign each player troops according to territories held
* Create game dice
  * 3 - 6-sided black dice for attacks
  * 2 - 6-sided red dice for defense

### Game Play (Each Turn)
* Draft troops according to:
  * 1 troop for every 3 territories held
* Attack neighboring countries until "hold"
  * You can keep attacking countries as long as you have troops (looping)
  * Each attack -
    * you can roll 1 die for up to 3 troops, as long as you have ONE troop left behind to defend territory. (rolls up to 3 dice-black)
    * defender chooses to defend with 1 or 2 troops, as long as they are available (rolls up to 2 dice-red)
    * order all dice highest to lowest so that you compare highest black to highest red, and so on to determine who "wins" each battle. (defense wins ties)
    * *loser for each die matchup removes 1 troop from their territory.*
    * ignore extra dice
* Reassigning territory when all troops are removed after a battle
  * winner gets losers territory
* Create user interface for attacking player and defending player
  * Show any continents held
  * Show countries held and number of troops in each country
    * *Update countries in list if they are reassigned after a battle*
  * *Update troop numbers when battles are won/lost*
  * *Update number of troops player can draft at start of next turn*

### End Game on World Domination
* Determine if any player holds all territories - they win, game over

## Setup/Installation
* [View on Github Pages](https://karenfreemansmith.github.io/EpicIntroWk1-PetWebsite)
* _OR_
* Clone diectory 
* Open index.html in your favorite browser

## Support & Contact
For questions, concerns, or suggestions please email karenfreemansmith@gmail.com

## Known Issues
* The program does not stop subtracting from troops if troop number hits 0
* Some battles end with attacking country having -1 troops
* The program allows user to attack themselves
* The attacking list does not display territory owner by color
* Sometimes defending country displays with wrong team color
* Too many dice display sometimes (are not hidden if attack troops go down, but don't seem to roll again)
* Stuff stays on screen after battles or turn end that should be hidden or reset

### What is next
* Assign bonus troops for countries owned
* Add troop maneuvers at the end of each turn
* Add cards at the end of each turn
* Add objectives and rewards (3 objectives won)
* Add cities and capitols
* Artificial intelligence

### Legal
*Licensed under the GNU General Public License v3.0*

Copyright (c) 2016 **[Aimen Khakwani](https://github.com/aimenkhakwani), [J'ena SanCartier](https://github.com/jenasancartier), [Karen Freeman-Smith](https://github.com/karenfreemansmith), and [Katy Henning](https://github.com/KatyCodes)** All Rights Reserved.
