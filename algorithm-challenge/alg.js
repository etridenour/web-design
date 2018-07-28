//Challenge 1



//Challenge 2
// for (x = 99; x > 0;x--){
//     if (x%7 == 0 && x%5 == 0){
//         console.log(`${x} bottles of Dogfishhead 90 Minute on the wall, ${x} bottles of Dogfishhead 90 Minute, you take one down, pass it around, ${x-1} bottles of Dogfishhead 90 Minute on the wall.`);
//     } else if (x%7 == 0){
//         console.log(`${x} bottles of Milwaukee's Best on the wall, ${x} bottles of Milwaukee's Best, you take one down, pass it around, ${x-1} bottles of Milwaukee's Best on the wall.`);
//     } else if (x%5 == 0){
//         console.log(`${x} bottles of Lite Beer on the wall, ${x} bottles of Lite Beer, you take one down, pass it around, ${x-1} bottles of Lite Beer on the wall.`);
//     } else {
//         console.log(`${x} bottles of beer on the wall, ${x} bottles of beer, you take one down, pass it around, ${x-1} bottles of beer on the wall.`);
//     }
// }

//Challenge 3

var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var moneyArray = [];
var weightArray = [];
var moneySum = 0;
var weightSum = 0;

function cakeFunc (){

    cakeTypes.forEach((e) => {
        var cakeRatio = (e['weight'] / e['value']);
        e['ratio'] = cakeRatio;
     })
}

function maxDuffelBagValue(cakeTypes, capacity){
    cakeFunc();

    cakeTypes.sort(function(a, b){
        return a.ratio - b.ratio;
    })

    while (weightSum < capacity){
            moneySum += cakeTypes[0]['value'];
            moneyArray.push(cakeTypes[0]['value']);
            weightSum += cakeTypes[0]['weight'];
            weightArray.push(cakeTypes[0]['weight']);

    }

    if (weightSum > capacity){
        moneyArray.pop();
        weightArray.pop();
        var newWeight = weightArray.reduce((a, b)=>a+b)
        if (newWeight < capacity){
            cakeTypes.forEach((e) => {
                if (e['weight'] == (capacity - newWeight)){
                    moneyArray.push(e['value']);
                    
                }
            })
        }
        var newMoney = moneyArray.reduce((a, b)=>a+b)
    }
    console.log(`Maximum duffel bag money: $${newMoney}`);    
}

maxDuffelBagValue(cakeTypes, 26);













