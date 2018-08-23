let express = require('express');
let app = express();
let axios = require('axios');

var urls = [ 'https://en.wikipedia.org/wiki/Futures_and_promises', 'https://en.wikipedia.org/wiki/Continuation-passing_style', 'https://en.wikipedia.org/wiki/JavaScript', 'https://en.wikipedia.org/wiki/Node.js', 'https://en.wikipedia.org/wiki/Google_Chrome' ];


urls.forEach(function(e){

    axios.get(e)
    .then(function(response){
        console.log(response)
    })
    .catch(function(){

    })

})

app.listen(3000);