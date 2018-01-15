console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0]; {
console.log("User flipped " + cardOne);
}
cardsInPlay.push(cardOne);

var cardTwo = cards[2]; {
console.log("User flipped " + cardTwo);
}
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
alert("You found a match!");
} else {
alert("Sorry, try again!");
}
