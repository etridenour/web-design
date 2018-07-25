var arr = [1,-4, 5, -3, 2];
arr2 = [];
arr.forEach(function(index){
    if(index > 0){
        arr2.push(index);
        
    }
});
console.log(arr2);

arr3 = [];
arr.forEach(function(index){
    if(index % 2 == 0){
        arr3.push(index);
        
    }
});
console.log(arr3);

// with .map you can change values
var newArray = arr.map(function(e){
    return e + 6;
})
console.log(newArray);

// .filter will filter sutff out, you can't change values
var newArray = arr.filter(function(e){
    if (e> 0){
        return e;
    }

})
console.log(newArray);

var bool = arr.some(function(e){
    return e > 5;
})
console.log(bool);
console.log(arr);