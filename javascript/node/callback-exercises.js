//Homework

function add(x, y, callback) {
    var result = x + y; 
    callback(result); 
} 

add(5, 6, function(result){
    console.log(result);
})


 
function subtract(x, y, callback) { 
    var result =  x - y; 
    callback(result);
} 
 
subtract(4, 1, function(e){
    console.log(e);
})

function greeting(person, callback) { 
    var message =  'Hola, ' + person + '!'; 
    callback(message);
} 

greeting('Bo Jackson', function(e){
    console.log(e);
})

function product(numbers, callback) { 
    var reduceNumbers =  numbers.reduce(function(a, b) { 
       return (a * b); 
    }, 1); 
    callback(reduceNumbers);
}
var myArray = [1, 2, 3, 4, 5, 6];

product(myArray, function(e){
    console.log(e);
})


// with timeout
function add2(x, y, callback) {

    setTimeout(function(){
        var result = x + y; 
        callback(result); 
    }, 1000);

} 

add2(3, 4, function(e){
    console.log(e);
})

function subtract2(x, y, callback) { 

    setTimeout(function(){
        var result =  x - y; 
        callback(result);
    }, 1000)
} 
 
subtract2(1, 3, function(e){
    console.log(e);
})

function greeting2(person, callback) {
    
    setTimeout(function(){
        var message =  'Hola, ' + person + '!'; 
        callback(message);
    }, 1000)
} 

greeting2('Bo Jackson', function(e){
    console.log(e);
})

function product2(numbers, callback) { 
    
    setTimeout(function(){
        var reduceNumbers =  numbers.reduce(function(a, b) { 
        return (a * b); 
        }, 1); 
        callback(reduceNumbers);
    }, 1000)
}
var myArray = [1, 2, 3, 4, 5, 6];

product2(myArray, function(e){
    console.log(e);
})