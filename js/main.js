var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
  } else {
  console.log("Sorry, try again.");
  }
};

var flipCard = function (cardId) {
  console.log("User Flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].card)
  console.log("User Flipped " + cards[cardId].suit);
  console.log("User Flipped" + cards[cardId].cardImage);


if (cardsInPlay.length === 2) {
  checkForMatch();
  cardsInPlay = [];
  }
};

flipCard(0);
flipCard(2);
