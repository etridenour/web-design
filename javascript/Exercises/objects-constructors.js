//Javascript Objects and Constructors

function Person(name, email, phone) { 
    this.name = name; 
    this.email = email; 
    this.phone = phone; 
} 

Person.prototype.greet = function(other) { 
    console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
}

var sonny = new Person('Sonny', 'sonny@hotmail.com', '375-398-3873');
var jordan = new Person('Jordan', 'jordan@aol.com', '475-328-5673');

sonny.greet(jordan);
jordan.greet(sonny);

console.log(`Sonny email: ${sonny.email}
Sonny phone #: ${jordan.phone}`);

console.log(`Jordan email: ${jordan.email}
Jordan phone #: ${jordan.phone}`)

//Card Constructor
console.log('--------Card Constructor----------')

class Card {
    constructor(point, suit){
        this.point = point;
        this.suit = suit;
    }
}

var myCard = new Card(5, 'diamonds') 

console.log(myCard.point);
console.log(myCard.suit);

//Get Image Url
console.log('--------Get Image Url----------')

Card.prototype.getImageUrl = function(){
    return (`images/${myCard.point}_of_${myCard.suit}.png`)
}
console.log(myCard.getImageUrl());

//Hand Constructor
console.log('--------Hand Constructor----------')
var sum = 0;

class Hand {
    constructor(){
        this.myHand = []
    }

    addCard(card){
        this.myHand.push(card)
    }
    
    getPoints(){
        this.myHand.forEach(function(e){
            if(e['point'] > 9){
                sum += 10;
            } else {
                sum += e['point'];
            }
        })
        console.log(sum);
    }
}

var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds')) 
myHand.addCard(new Card(13, 'spades'))
myHand.getPoints()

//Deck Constructor
console.log('--------Deck Constructor----------')

class Deck{
    constructor(){
        this.myDeck = [];
    }

    makeDeck (){
        for (x = 0; x < suits.length; x++){
            for (y = 0; y < points.length; y++){
                var card = {Points: points[y], Suit: suits[x]};
			    myDeck.push(card);
            }
        }
        return deck;
    }

    draw(){
        console.log(myDeck[Math.floor(Math.random()*myArray.length)]);
    }

}

Deck.makeDeck();
draw();

var myDeck = new Deck(); 
// myDeck.draw(); 
// Card {point: 6, suit: "clubs"} 
// myDeck.draw() 
// Card {point: 1, suit: "spades"} 
// myDeck.shuffle() 
// myDeck.numCardsLeft() 
// 50
