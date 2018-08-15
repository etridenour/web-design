
var express = require('express');
var app = express();
var data = require('./data/data.json');

app.set('appData', data);
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/drummers'));


app.listen(3000, ()=>{
    console.log("listening on port 3000");

})

