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
var score = 0;

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  score += 1;
  document.getElementById('score').innerHTML = score;
  } else {
  alert("Sorry, try again.");
  document.location.reload();
  }
};

var flipCard = function () {
  cardId = this.getAttribute('data-id');
  alert("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);

if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

var createBoard = function () {
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

createBoard();
