//setup routes for signing in signing out 

let express = require('express');
let router = express.Router();
const jwt = require('jwt-simple');
const config = require('../config');
let db = require('../models');
let bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
let passport = require('passport');

const passportService = require('../config/passAuth');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


//session default is true, so you have to set to false
const requireSignin = passport.authenticate('local', {session: false});
const requireAuth = passport.authenticate('jwt', {session: false});


function tokenForUser(user){
    //current date and time to be passed as iat
    const timestamp = new Date().getTime();

    //jwt.encode method in jwt object - takes 2 args - payload and secret
    return jwt.encode({sub: user.id, iat: timestamp}, 
                        config.secret)
}

router.get('/protected', requireAuth, (req, res) => {

    console.log("protect route");
    res.send('you\'re in.')

})


router.post('/signin', requireSignin, (req, res) =>{
    console.log('inside signin')
    res.json({token: tokenForUser(req.user)})
})


//register - take info and store in db
router.post('/signup', (req, res) => {

    //db create stuff in here
    let email = req.body.email;
    //encrypt password
    let password = bcrypt.hashSync(req.body.password, 8);

    //check to see if email already exists
    db.user.findAll({where: {email: email}})
    .then( results => {
        //if there are no results (if they are = 0)
        if(results.length === 0){
            db.user.create({email:email, password: password })
            .then((user) => {
                return res.json({token: tokenForUser(user)})
            })
        }
        else{
            return res.status(422).send({error: "Email already exits"});
        }
    })

})


module.exports = router;
