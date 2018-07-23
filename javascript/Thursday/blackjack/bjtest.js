var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
var points = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
var deck = [];

function getDeck(){
    for (x = 0; x < suits.length; x++){
        for (y = 0; y < points.length; y++){
            var card = {Points: points[y], Suit: suits[x]};
            console.log(card);
			deck.push(card);
        }
    }
    return deck;
}

getDeck();

console.log(deck);