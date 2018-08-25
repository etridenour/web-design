

let promise = require('bluebird')
const initOptions = {
    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise, 
};
const pgp = require('pg-promise')(initOptions);
var prompt = require('prompt-promise');


const config = {
    host: 'localhost',
    port: 5432,
    database: 'music_db',
    user: 'postgres'
};

// Create the database instance:
const db = pgp(config);

albumArray = [];

function albumName(){
    prompt('Album name? ')
    .then(function album(val) {
        albumArray.push(val);
        return prompt('Album year? ');
    })
    .then(function year(val) {
        albumArray.push(val);
        return prompt('Artist id? ');
    })
    .then(function id(val) {
        albumArray.push(val);
        console.log(albumArray);
        prompt.done();
        db.result(`INSERT INTO album \
        VALUES (Default, '${albumArray[0]}', '${albumArray[1]}', '${albumArray[2]}')`)
        .then(function (result) {
            console.log(result);
        });
    })
    .catch(function rejected(err) {
    console.log('error:', err.stack);
    prompt.finish();
    });
};


artistArray = [];

function newArtist(){
    prompt('Artist name? ')
    .then(function artist(val) {
        artistArray.push(val);
        console.log(artistArray);
        db.result(`INSERT INTO artist VALUES (Default, '${artistArray[0]}')`)
        .then(function (result) {
            console.log(result);
        })
        .catch(function (err) {
            console.log('error:', err.stack);
        });
        prompt.done();
    })
    
    .catch(function rejected(err) {
    console.log('error:', err.stack);
    prompt.finish();
    });
};

trackArray = [];

function createTrack(){
    prompt('Track name? ')
    .then(function track(val) {
        trackArray.push(val);
        return prompt('Track Duration? ');
    })
    .then(function duration(val) {
        trackArray.push(val);
        return prompt('Album ID? ');
    })
    .then(function id(val) {
        trackArray.push(val);
        console.log(trackArray);
        prompt.done();
        db.result(`INSERT INTO track VALUES (Default, '${trackArray[0]}', '${trackArray[1]}', ${trackArray[2]})`)
        .then(function (result) {
            console.log(result);
        });
    })
    .catch(function rejected(err) {
    console.log('error:', err.stack);
    prompt.finish();
    });
};

db.query(`select id from ${table} order by id desc limit 1`)
.then(function(index){
    console.log(`created ${table} with id 4{index[0].id.`);
})

// albumName();

// newArtist();

createTrack();







