//Positive Numbers
var array = [1,-4, 5, -3, 2];
arr = [];
array.filter(function(index){
    if (index >= 0){
        arr.push(index);
    }
});
console.log(arr);

//Even Numbers
var array = [1,-4, 5, -3, 2];
arr1 = [];
array.forEach(function(index){
    if (index % 2 == 0 ){
        arr1.push(index);
    }
});
console.log(arr1);

// Square the Numbers
var squareTheNumbers = array.map(function(index){
    return index ** 2;
})
console.log(squareTheNumbers);

//Cities 1
var cities = [ { name: 'Los Angeles', temperature: 60.0}, { name: 'Atlanta', temperature: 52.0 }, { name: 'Detroit', temperature: 48.0 }, { name: 'New York', temperature: 80.0 } ];

var lowerCities = cities.filter(function(index){
     return index['temperature'] < 70;
});

console.log(lowerCities);

//Cities 2
var cityNames = cities.map(function(index){
    return index['name'];
})
console.log(cityNames);

//Good Job
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

var printName = people.forEach(function(index){
    console.log('Good job, ' + index + '!');
})
printName;

//Sort An Array
console.log(people.sort());

//Sort An Array 2
var peopleSort = people.sort(function(a, b){
    return a.length - b.length;
});
console.log(peopleSort);

//Sort An Array 3
var arr4 = [ [1, 3, 4], [2, 4, 6, 8], [3, 6] ];

// var arrSum = numbers.reduce(function(a, b) {
//         console.log(a+b);
//         return a + b;
//     });


//3 Times
function call3Times(fun) {
     fun();
     fun();
     fun(); 
}

function fun(word){
    console.log('Hello World!')
}
call3Times(fun);

console.log('==========================');

// n times
function callNTimes(times, fun){
    for (x = 0; x < times; x++){
        fun();
    }
}
callNTimes(5, fun);

//Sum an Array
var numbers = [65, 44, 12];

var getSum = numbers.reduce(function(total, num) {
    return total + num;
})

console.log(getSum);

//Acronym
acronym = ['very', 'important', 'person'];
fl = '';
var firstL = function(){
    for (x = 0; x < acronym.length; x++){
        fl += (acronym[x][0]);
    }
    console.log(fl.toUpperCase());
}

firstL();









