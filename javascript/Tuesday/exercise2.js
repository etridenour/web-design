
// Madlib
function madlib(name, subject) {
    return name + '\'s favorite subject in school is ' + subject + '.';
}
console.log(madlib('bill', 'art'))

// Tip Calculator
function tipAmount(bill, service) {
    if (service == 'good') {
        tip = bill * .2;
    } else if (service == 'fair'){
        tip = bill * .15;
    } else if (service == 'poor') {
        tip = bill * .1;
    } else {
        console.log('That just ain\'t right!')
    }
    return tip;
}
console.log(tipAmount(10, 'fair'));

// Tip Calculator 2
function totalAmount(bill, service){
    return bill + tipAmount(bill, service);
}
console.log(totalAmount(100, 'good'))

// Print Numbers
function printNumbers(start, end) {
    for (var x = start; x <= end; x++){
        console.log(x);
    }
}
printNumbers(2,8);

function printNumbers1(start, end) {
    while (end > start) {
        console.log(start);
        start++;
    }
}
printNumbers1(4,10);

// Print a Square
function printSquare(num) {
    var a = '';
    for (var x = 0; num > x; x++){
        for (var y = 0; num > y; y++){
            a+='*';
            }
        console.log(a)
        a='';
    }
}
printSquare(8)

// Print a Box
function printBox (width, height){
    var a = '';
    for (x = 1; x <= height; x++){
        for (y = 1; y <= width; y++){
            if ((y == 1) || (x == height) || (x == 1) || (y == width)) {
                a += '*';
            } else {
                a += ' ';
            }
            
        }
        console.log(a);
        a = '';
    }
}

printBox(10, 20);

//Print a Banner
function printBanner(string){
    var len = string.length;
    var a = '';
    for (var x = 0; len + 4 > x; x++){
        a += '*';
        
    }
    console.log(a);
    console.log('* ' + string + ' *');
    console.log(a);
}
printBanner('Welcome to Digital Crafts');

//Leetspeak
function leetspeak(str){
    var newString = '';
    for (var x = 0; x < str.length; x++){
        if (str[x] == 'a') {
            newString += 4;
        } else if (str[x] == 'e') {
            newString += 3;
        } else if (str[x] == 'g') {
            newString += 6;
        } else if (str[x] == 'i') {
            newString += 1;
        } else if (str[x] == 'o') {
            newString += 0;
        } else if (str[x] == 's') {
            newString += 5;
        } else if (str[x] == 't') {
            newString += 7;
        }
        else {
            newString += str[x];
        }
    } console.log(newString);
}

leetspeak('this took me way longer than it should have');

// Long-long vowels
function long(str){
    var vString = '';
    for (x = 0; x < str.length; x++){
        if (str[x] == str[x+1]){
            vString += str[x];
            vString += str[x];
            vString += str[x];
            vString += str[x];
        } else{
            vString += str[x];
        }
    }
    console.log(vString);
}

long('Cheese');

//Just the positives
function positiveNumbers(array){
    var arr = [];
    for (x = 0; x < array.length; x++){
        if (array[x] >= 0){
            arr.push(array[x]);
        }
    }
    console.log(arr);
}

positiveNumbers([1, 3, -56, 34, -45, -2, -7, 3])





