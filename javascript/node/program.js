// #1

// console.log('HELLO WORLD');


// #2

// function sumFunc(array){

//     var sum = 0;
//     for (x = 2; x < array.length; x++){
//         sum += parseInt(array[x]);
//     }
//     console.log(sum);
// }

// sumFunc(process.argv);


// #3

// var fs = require('fs');


// var str = (fs.readFileSync(process.argv[2]).toString());
    
// var strArray = str.split('\n');
// var num = strArray.length-1;
// console.log(num);

// #4

// var fs = require('fs');

// fs.readFile(process.argv[2], function(error, buffer){
//     var str = buffer.toString();
//     var strArray = str.split('\n');
//     var num = strArray.length-1;
//     console.log(num);
// })

// alternate option

// fs.readFile(process.argv[2], 'utf8', function(error, buffer){

//     var strArray = buffer.split('\n');
//     var num = strArray.length-1;
//     console.log(num);
// })

// #5
// var fs = require('fs');

// fs.readdir(process.argv[2], (error, data) => {
//     data.forEach(function(e){
//         if(e.includes('.' + process.argv[3])){
//             console.log(e);
//         }
//     })
// })


// #6

var mymodule = require('./module.js');
