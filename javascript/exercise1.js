

function lvl1exercise1() {
    var bob;
    return bob;

}
lvl1exercise1();

function lvl1exercise2() {
    var x = 1;
    return x;

}
console.log(lvl1exercise2());

function lvl1exercise3() {
    var y = 1.2;
    return y;

}
console.log(lvl1exercise3());

function lvl1exercise4() {
    var str = 'Hello World';
    return str;

}
console.log(lvl1exercise4())

function lvl1exercise5() {
	// Declare and instantiate an array containing the string "Hello World!" and the number 4 and return it
    var arr = ['Hello World', 4]
    return arr;
}
console.log(lvl1exercise5());

function lvl1exercise6() {
	// Declare and instantiate an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it
    var obj = {
        key1 : "Hello World!",
        key2 : 4
    }
    return obj;
}
console.log(lvl1exercise6());

function lvl1exercise7() {
	// Declare and instantiate a boolean value 'false' and return it
    var e = false;
    return e;
}
console.log(lvl1exercise7());

function lvl2exercise1(num1, num2) {
	// Return the sum of num1 and num2

}

function lvl2exercise2(num1, num2) {
	// Return the difference of num1 and num2
    return num1 - num2;
}


function lvl2exercise3(num1, num2) {
	// Return the multiplication of num1 and num 2
    return num1 * num2;
}

function lvl2exercise4(num1, num2) {
	// Return the division of num1 and num2
    return num1 / num2;
}

function lvl2exercise5(num1) {
	// Add 2 to num1 using += and return it
	return num1 += 2;
}

function lvl3exercise1() {
	// Create a "hello" and a "world", return the concatenation of the two
    var x = 'Hello';
    var y = ' World';
    return x + y;
}

function lvl3exercise2() {
	// Create a "hello" and a 12, return the concatenation of the two
    var x = 'hello';
    var y = 12;
    return x + y;
}

function lvl3exercise3() {
	// Create a variable that equals 12 and convert it to a string with concatenation. Return it.
    var x = 12;
    var y = ''
    return x + y;
}

function lvl3exercise4() {
	// Create a "hello world!" string. Return the length of the string
    var x = 'hello world';
    return x.length;
}

function lvl3exercise5() {
	// Create a "hello world!" string. Return the index of the word "world".
    var x = 'hello world';
    return x.indexOf('world')
}


function lvl4exercise1() {
	// Return the boolean value "true"
	return true;
}

function lvl4exercise2() {
	// Return the boolean value "false"
    return false;
}

function lvl4exercise3(bool) {
	// Return the opposite of the input boolean value
    return !bool;
}

function lvl4exercise4(bool1, bool2) {
	// Return the logical "and" of the input boolean values
    return bool1 && bool2;
}

function lvl4exercise5(bool1, bool2) {
	// Return the logical "or" of the input boolean values
    return bool1 || bool2;
}

function lvl4exercise6(bool1, bool2) {
	// Return the logical "equivalence" of the input boolean values
	return bool1 == bool2;
}


function lvl5exercise1() {
	// Push the string "hello" into the array and return it.
	var array = [1, "adam"];
    array.push('hello');
    return array;
}
console.log(lvl5exercise1());

function lvl5exercise2() {
	// Remove the last element from the array and return it
	var array = [1, "adam"];
    return array.pop();
}

function lvl5exercise3() {
	// Return the length of the array
	var array = [1, "adam"];
    return array.length;
}

function lvl5exercise4() {
	// Return the index of "adam" in the array
	var array = [1, "adam"];
    return array.adam;
}
console.log(lvl5exercise4());

function lvl6exercise1(num) {
	// Return 'hello' if num is 1, 'world' if num is 2, otherwise return'bye'
	if (num == 1){
        return 'hello';
    } else if (num == 2) {
        return 'world';
    } else {
        return 'bye'
    }
}
console.log(lvl6exercise1(2));

function lvl6exercise2() {
	// Push 10 "hello" strings into the array using a for loop, then return it
    var array = [];
    for (x = 0; x<10; x++){
         array.push('hello');
         
    }
    return array;
}
console.log(lvl6exercise2());


function lvl6exercise3() {
	// Empty this array using a while loop and return it
	var array = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"];
    while (array.length>0){
        array.pop();
    }
    return array;
}
console.log(lvl6exercise3());


// Write a function that takes a number as an input. 
// Have it create an empty array and then push a string into the array as many 
// times as the input number
//
// Name the function "finalFunction"

function finalFunction(num) {
    array = [];
    for (x=0; num>x; x++) {
        array.push('blah');
    }
    return array;
}
console.log(finalFunction(6));
