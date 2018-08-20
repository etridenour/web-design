
var express = require('express');
var app = express();
var data = require('./data/data.json');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('appData', data);
app.set('view engine', 'ejs');
app.use('/socket-io',express.static('node_modules/socket.io-client/dist'));

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/drummers'));
// app.use(require('./routes/form'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/wacko'));
app.use(require('./routes/socket'));


io.on('connection', function(socket){
    console.log('a user connected');
  });
  
  http.listen(3000, function(){
    console.log('listening on 3000');
  });

