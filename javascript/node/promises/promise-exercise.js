let express = require('express');
let app = express();
let axios = require('axios');
var rp = require('request-promise');
var fs = require('fs-extra');

//Web Scraping

var urls = [ 'https://en.wikipedia.org/wiki/Futures_and_promises', 'https://en.wikipedia.org/wiki/Continuation-passing_style', 'https://en.wikipedia.org/wiki/JavaScript', 'https://en.wikipedia.org/wiki/Node.js', 'https://en.wikipedia.org/wiki/Google_Chrome' ];
responseArray = [];

p1 = axios.get(urls[0])
.then(function(response){
    responseArray[0] = response;
})
.catch(function(){

})

p2 = axios.get(urls[1])
.then(function(response){
    responseArray[1] = response;
})
.catch(function(){

})

p3 = axios.get(urls[2])
.then(function(response){
    responseArray[2] = response;
})
.catch(function(){

})

p4 = axios.get(urls[3])
.then(function(response){
    responseArray[3] = response;
})
.catch(function(){

})

p5 = axios.get(urls[4])
.then(function(response){
    responseArray[4] = response;
})
.catch(function(){

})

Promise.all([p1, p2, p3, p4, p5])
.then(function(response){
    console.log(responseArray.length);
})


// request-promise method - this doesn't work properly

Promise.all(urls).then(function(e){
    e.forEach(function(a){
        rp(a)
        .then(function (htmlString) {
            console.log(htmlString);
        // Process html...
        })
        .catch(function (err) {
        // Crawling failed...
        });
    })
})

// Chaining

// function saveWebPage(url, fileName){

//     var fileName = ('healthhitters.txt');

//     rp(url).then(function (htmlString) {
//         return htmlString;
//     })
//     .then(function (htmlString){
//         fs.outputFile(fileName, htmlString, function(err){
//             console.log(err);
//         })
//     })
//     .catch(function (err) {
//         console.log('error');
//     });

// }

// saveWebPage('https://healthhitters.com/', 'health_hitters')


// CAT 2 files

// fs.outputFile('file1.txt', 'What up big worm?', function(err){
//     console.log(err);
// })

// fs.outputFile('file2.txt', 'Gonna get after it.', function(err){
//     console.log(err);
// })

// function cat2(file1, file2, outputFile){
//     var p1 = new Promise(function(resolve, reject){
//         fs.readFile(file1, 'utf8', function(err, data1) {
//             if (err){
//                 reject(err)
//             } else{
//                 resolve(data1)
//             }
//         })
//     })
    
//     var p2 = new Promise(function(resolve, reject){
//         fs.readFile(file2, 'utf8', function(err, data2) {
//             if (err){
//                 reject(err)
//             } else{
//                 resolve(data2)
//             }
//         })
//     })

    
//     Promise.all([p1, p2]).then(function(response){
//        console.log(response);
//        fs.outputFile(outputFile, response[0] + response[1], function(err){
//         console.log(err);
//     })
//     })
    
// }

// cat2('file1.txt', 'file2.txt', 'outputfile.txt')


// Resolve, Reject


// function addNumbers(x, y){
//     var p = new Promise(function(resolve, reject){
//         if(Number.isInteger(x) && Number.isInteger(y)){
//             resolve(x + y);
//         } else {
//             reject('error');
//         }
//     })
//     return p;
// }

// addNumbers(3, 5).then(function(answer){
//     console.log(answer);
// })
// .catch(function(error){
//     console.log(error);
// })

// addNumbers(3, 'v').then(function(answer){
//     console.log(answer);
// })
// .catch(function(error){r
//     console.log(error);
// })




