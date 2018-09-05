let db = require('./models');
let sequelize = require('sequelize');


//create stuff in tables
// db.user.create({firstName: 'Eric', lastName: 'Siegel', email: 'bigswanky@aol.com'})
// .then(function(user){
    
// })

// db.user.create({firstName:'Dweezil', lastName: 'Zappa', email: 'me@me.com'})
// .then(function(user){
    
// });

// db.user.create({firstName:'Moonuint', lastName: 'Zappa', email: 'me@me.com'})
// .then(function(user){
    
// });

// db.user.create({firstName:'Chet', lastName: 'Zappa', email: 'me@me.com'})
// .then(function(user){
    
// });

//querying stuff

// db.user.findAll()
// .then(function(results){
//     results.forEach(function(r){
//         console.log(r.firstName);
//     })
// })

// db.user.findById(1)
// .then(function(record){
//     console.log(record.email);
// })

// db.user.findAll({where: {lastName: 'Zappa'}})
// .then(function(r){
//     r.forEach(function(record){
//         console.log(record.firstName);
//     })
// })


//delete things from table
// db.user.destroy({where: {id:1}})
// .then(function(rowDeleted){
//     if(rowDeleted===1){
//         console.log('success')
//     }
// });



// doesn't work, check slides
// db.sequelize.query('SELECT * FROM users', { model: user }).then(results => {
//     // Each record will now be a instance of Project
//     results.forEach(function(r){
//         console.log(r.firstName);
//     })
// });

// change table info
// let myInstance;
// db.user.findById(6)
// .then(function(r){
//     console.log(r.firstName);
//     myInstance = r;

//     myInstance.firstName = 'Eric';
//     myInstance.save().then(()=>{
//     console.log('success');
//     })
// })





