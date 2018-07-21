
//Deal

var dealClick = document.querySelector('#deal-button');

dealClick.addEventListener('click',function(e){
    var dCard1 = document.querySelector(".dCard1");
    dCard1.src = 'cards/purple_back.jpg';

    var dCard2 = document.querySelector(".dCard2");
    dCard2.src = 'cards/10D.jpg';

    var pCard1 = document.querySelector(".pCard1");
    pCard1.src = 'cards/10D.jpg';

    var pCard2 = document.querySelector(".pCard2");
    pCard2.src = 'cards/10D.jpg';
})

//Hit

var hitClick = document.querySelector('#hit-button');

var hitClickCount = 0;
hitClick.addEventListener('click',function(e){
    if (hitClickCount == 0){
        var pCard3 = document.querySelector(".pCard3");
        pCard3.src = 'cards/10D.jpg';
        hitClickCount += 1;
    } else if (hitClickCount == 1){
        var pCard4 = document.querySelector(".pCard4");
        pCard4.src = 'cards/10D.jpg';
        hitClickCount += 1;
    } else if (hitClickCount == 2){
        var pCard5 = document.querySelector(".pCard5");
        pCard5.src = 'cards/10D.jpg';
        hitClickCount += 1;
    } else if (hitClickCount == 3){
        var pCard6 = document.querySelector(".pCard6");
        pCard6.src = 'cards/10D.jpg';
        hitClickCount += 1;
    }
})

