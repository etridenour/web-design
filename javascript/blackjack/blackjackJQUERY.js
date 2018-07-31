//The Deck

var suits = ['H', 'S', 'C', 'D'];
var points = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
var deck = [];
var playerPoints = 0;
var dealerPoints = 0;
dealerHand = [];
playerHand = [];
pAceCount = 0;
dAceCount = 0;
var busted = document.querySelector('.bust');
var win = document.querySelector('.win');
var rep = document.querySelector(".replay");
var arrow = document.querySelector(".asiz");
var blackjack = document.querySelector(".blackj");

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
shuffleArray(deck);

//Button selectors
var dealClick = document.querySelector('#deal-button');
var hitClick = document.querySelector('#hit-button');
var standClick = document.querySelector('#stand-button');


//Deal
var pCard3 = document.querySelector(".pCard3");
var pCard4 = document.querySelector(".pCard4");
var pCard5 = document.querySelector(".pCard5");
var pCard6 = document.querySelector(".pCard6");

dealClick.addEventListener('click',function(e){
    dealerHand = [];
    playerHand = [];
    hitClickCount = 0;
    dealerCount = 0;
    busted.textContent = '';
    win.textContent = '';
    rep.textContent = '';
    blackjack.textContent = '';
    arrow.src = '';
    pCard3.src = '';
    pCard4.src = '';
    pCard5.src = '';
    pCard6.src = '';

    var dCard3 = document.querySelector(".dCard3");
    dCard3.src = '';
    var dCard4 = document.querySelector(".dCard4");
    dCard4.src = '';
    var dCard5 = document.querySelector(".dCard5");
    dCard5.src = '';
    var dCard6 = document.querySelector(".dCard6");
    dCard6.src = '';
    
    

    var dCard1 = document.querySelector(".dCard1");
    dCard1.src = 'cards/purple_back.jpg';

    var dCard2 = document.querySelector(".dCard2");
    dCard2.src = getCardImageUrl();
    var dcard2 = deck.shift();
    dealerHand.push(dcard2);
    calculateDPoints()
    dispDPoints();

    var pCard1 = document.querySelector(".pCard1");
    pCard1.src = getCardImageUrl();
    var pcard1 = deck.shift();
    playerHand.push(pcard1);
    calculatePPoints();
    dispPPoints();
    bust();

    var pCard2 = document.querySelector(".pCard2");
    pCard2.src = getCardImageUrl();
    var pcard2 = deck.shift();
    playerHand.push(pcard2);
    calculatePPoints();
    pAce();
    dispPPoints();
    bust();
    blackj();
   
})

//Hit

var hitClickCount = 0;
hitClick.addEventListener('click',function(e){
    if (playerHand.length != 0){
        if (hitClickCount == 0){
            var pCard3 = document.querySelector(".pCard3");
            pCard3.src = getCardImageUrl();
            var pcard3 = deck.shift();
            playerHand.push(pcard3);
            console.log(playerPoints);
            calculatePPoints();
            console.log(playerPoints);
            pAce();
            console.log(playerPoints);
            dispPPoints();
            console.log(playerPoints);
            bust();
            hitClickCount += 1;
            console.log(playerHand);
        } else if (hitClickCount == 1){
            var pCard4 = document.querySelector(".pCard4");
            pCard4.src = getCardImageUrl();
            var pcard4 = deck.shift();
            playerHand.push(pcard4);
            calculatePPoints();
            pAce();
            dispPPoints();
            bust();
            hitClickCount += 1;
        } else if (hitClickCount == 2){
            var pCard5 = document.querySelector(".pCard5");
            pCard5.src = getCardImageUrl();
            var pcard5 = deck.shift();
            playerHand.push(pcard5);
            calculatePPoints();
            pAce();
            dispPPoints();
            bust();
            hitClickCount += 1;
        } else if (hitClickCount == 3){
            var pCard6 = document.querySelector(".pCard6");
            pCard6.src = getCardImageUrl();
            var pcard6 = deck.shift();
            playerHand.push(pcard6);
            calculatePPoints();
            pAce();
            dispPPoints();
            bust();
            hitClickCount += 1;
        }
    }
})

//Stand

standClick.addEventListener('click',function(e){
    var dCard1 = document.querySelector(".dCard1");
    dCard1.src = getCardImageUrl();
    dc1 = deck.shift();
    dealerHand.push(dc1);
    calculateDPoints()
    dAce();
    bust();
    dealTotal();
    
    if ((playerPoints >= dealerPoints && playerPoints <= 21) || dealerPoints > 21){
        win.textContent = 'YOU WIN!';
        replay();
    } else if (dealerPoints > playerPoints) {
        win.textContent = 'YOU LOSE!';
        replay();
    }

})
dealerCount = 0;
function dealTotal(){
    while(dealerPoints < 17){
        if (dealerCount == 0){
            var dCard3 = document.querySelector(".dCard3");
            dCard3.src = getCardImageUrl();
            dc3 = deck.shift();
            dealerHand.push(dc3);
            calculateDPoints();
            dAce();
            bust();
            dispDPoints();
            dealerCount +=1;
            
        } else if (dealerCount == 1){
            var dCard4 = document.querySelector(".dCard4");
            dCard4.src = getCardImageUrl();
            dc4 = deck.shift();
            dealerHand.push(dc4);
            calculateDPoints();
            dAce();
            bust();
            dispDPoints();
            dealerCount +=1;
            
        }  else if (dealerCount == 2){
            var dCard5 = document.querySelector(".dCard5");
            dCard5.src = getCardImageUrl();
            dc5 = deck.shift();
            dealerHand.push(dc5);
            calculateDPoints();
            dAce();
            bust();
            dispDPoints();
            dealerCount +=1;
            
        } else if (dealerCount == 3){
            var dCard6 = document.querySelector(".dCard6");
            dCard5.src = getCardImageUrl();
            dc6 = deck.shift();
            dealerHand.push(dc6);
            calculateDPoints();
            dAce();
            bust();
            dispDPoints();
            
        }
    
    }
    dispDPoints();
}

//Get correct card image
function getCardImageUrl(){
    if (deck[0]['Points'] == 1){
        var url = ('cards/2' + deck[0]['Suit'] + '.jpg');
    } else if (deck[0]['Points'] == 2){
        var url = ('cards/3' + deck[0]['Suit'] + '.jpg');
    } else if (deck[0]['Points'] == 3){
        var url = ('cards/4' + deck[0]['Suit'] + '.jpg');
    } else if (deck[0]['Points'] == 4){
        var url = ('cards/5' + deck[0]['Suit'] + '.jpg');
    } else if (deck[0]['Points'] == 5){
        var url = ('cards/6' + deck[0]['Suit'] + '.jpg');
    } else if (deck[0]['Points'] == 6){
        var url = ('cards/7' + deck[0]['Suit'] + '.jpg');
    } else if (deck[0]['Points'] == 7){
        var url = ('cards/8' + deck[0]['Suit'] + '.jpg');
    } else if (deck[0]['Points'] == 8){
        var url = ('cards/9' + deck[0]['Suit'] + '.jpg');
    } else if (deck[0]['Points'] == 9){
        var url = ('cards/10' + deck[0]['Suit'] + '.jpg');
    } else if (deck[0]['Points'] == 10){
        var url = ('cards/J' + deck[0]['Suit'] + '.jpg');
    } else if (deck[0]['Points'] == 11){
        var url = ('cards/Q' + deck[0]['Suit'] + '.jpg');
    } else if (deck[0]['Points'] == 12){
        var url = ('cards/K' + deck[0]['Suit'] + '.jpg');
    } else {
        var url = ('cards/A' + deck[0]['Suit'] + '.jpg');
    }
    return url;
}

//Points
function calculatePPoints(){
    playerPoints = 0;
    for(let e = 0; e < playerHand.length; e++){
        if (playerHand[e]['Points'] == '1'){
            playerPoints += 2;
        } else if (playerHand[e]['Points'] == '2'){
            playerPoints += 3;
        } else if (playerHand[e]['Points'] == '3'){
            playerPoints += 4;
        } else if (playerHand[e]['Points'] == '4'){
            playerPoints += 5;
        } else if (playerHand[e]['Points'] == '5'){
            playerPoints += 6;
        } else if (playerHand[e]['Points'] == '6'){
            playerPoints += 7;
        } else if (playerHand[e]['Points'] == '7'){
            playerPoints += 8;
        } else if (playerHand[e]['Points'] == '8'){
            playerPoints += 9;
        } else if (playerHand[e]['Points'] == '9' || playerHand[e]['Points'] == '10' || playerHand[e]['Points'] == '11' || playerHand[e]['Points'] == '12'){
            playerPoints += 10;
        } else  {
            playerPoints += 11;

        }
    }
}

function calculateDPoints(){
    dealerPoints = 0;
    for(let e = 0; e < dealerHand.length; e++){
        if (dealerHand[e]['Points'] == '1'){
            dealerPoints += 2;
        } else if (dealerHand[e]['Points'] == '2'){
            dealerPoints += 3;
        } else if (dealerHand[e]['Points'] == '3'){
            dealerPoints += 4;
        } else if (dealerHand[e]['Points'] == '4'){
            dealerPoints += 5;
        } else if (dealerHand[e]['Points'] == '5'){
            dealerPoints += 6;
        } else if (dealerHand[e]['Points'] == '6'){
            dealerPoints += 7;
        } else if (dealerHand[e]['Points'] == '7'){
            dealerPoints += 8;
        } else if (dealerHand[e]['Points'] == '8'){
            dealerPoints += 9;
        } else if (dealerHand[e]['Points'] == '9' || dealerHand[e]['Points'] == '10' || dealerHand[e]['Points'] == '11' || dealerHand[e]['Points'] == '12'){
            dealerPoints += 10;
        } else  {
            dealerPoints += 11;

        }
    }
}


function dispPPoints(){
    var pPoints = document.querySelector('.pPoints');
    pPoints.textContent = playerPoints;
}
function dispDPoints(){
    var dPoints = document.querySelector('.dPoints');
    dPoints.textContent = dealerPoints;
}

function pAce(){
    playerHand.forEach(function(e){
            if(e.Points == 13 && playerPoints > 21){
                playerPoints -= 10;
            }   
    })
}

function dAce(){
    dealerHand.forEach(function(e){
            if(e.Points == 13 && dealerPoints > 21){
                dealerPoints -= 10;
            }    
    })
}

//Shuffle

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//Bust
function bust(){
    if (playerPoints > 21){
        busted.textContent = 'YA BUSTED!';
        win.textContent = 'YOU LOSE!';
        replay();
    } else if (dealerPoints > 21){
        busted.textContent = 'DEALER BUSTED!';
        win.textContent = 'YOU WIN!';
        replay();
    }
}

//Replay
function replay(){
    rep.textContent = 'Replay';
    arrow.src = 'arrow.png';
}

//Blackjack
function blackj(){
    playerHand.forEach(function(e){
        if(playerPoints == 21 && (e.Points == 13 || e.Points == 12 || e.Points == 11 || e.Points == 10)){
            blackjack.textContent = 'BLACKJACK!';
        } 
    })
}

$(function() {
    // code block
  });





