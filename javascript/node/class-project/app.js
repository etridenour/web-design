
var express = require('express');
var app = express();
var data = require('./data/data.json');

app.set('appData', data);
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/drummers'));
app.use(require('./routes/form'));
// app.use(require('./routes/feedback'));
// app.use(require('./routes/api'));


app.listen(5000, ()=>{
    console.log("listening on port 5000");

})

