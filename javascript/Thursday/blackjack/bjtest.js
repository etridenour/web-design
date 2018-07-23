var suits = ['H', 'S', 'C', 'D'];
var points = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
var deck = [];

function getDeck(){
    for (x = 0; x < suits.length; x++){
        for (y = 0; y < points.length; y++){
            var card = {Points: points[y], Suit: suits[x]};
			deck.push(card);
        }
    }
    return deck;
}

getDeck();

playerPoints = 50;
playerHand = [{Points: '7', Suit: 'H'}, {Points: '13', Suit: 'S'}, {Points: '11', Suit: 'D'}]


function ace(){
    playerHand.forEach(function(e){
        if(e.Suit == 'A' && playerPoints > 21){
            playerPoints -= 10;
        }
    })
}
ace();
console.log(playerPoints);
