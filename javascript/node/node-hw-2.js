// Read a file

// var readline = require('readline');
// var fs = require('fs');

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
// rl.question("What da file?", function(answer) {
//     fs.readFile(answer, function (error, buffer) {
//         if (error) {
//             console.error(error.message);
//         return;
//         }
//         console.log('File Data: ', buffer.toString().toUpperCase());
//     });

//     rl.close();
// });


// DNS lookup


// var readline = require('readline');
// const dns = require('dns');

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// rl.question("What da domain name?", function(answer) {

//     dns.lookup(answer.toString(), (err, address, family) =>
//         console.log('address: %j family: IPv%s', address, family));


//     rl.close();
// });



