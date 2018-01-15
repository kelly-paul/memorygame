console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function(); {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
  } else {
  console.log("Sorry, try again.");
  }
};

var flipCard = function(){
  var cardId = ();
  var card = cards[cardId];
  console.log("User Flipped" + cards[cardId]);
  checkForMatch();
  flipCard(0);
  flipCard(2);
};

cardsInPlay.push(cards[cardId]);
