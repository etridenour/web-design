// passport configuration
var passport = require('passport');
var config = require('../config');
var db = require('../models');
var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');


//pasport auto setting is email, so to change:
const localOptions = {
    usernameField: 'email'
}

//create local strategy
//arguments are received from req.body
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {

    db.user.findAll({where: {email: email}})
    .then( results => {
        if(results != null){
            //something in the db
            const user = results[0];
            console.log("userName: " + user.email);
            bcrypt.compare(password, user.password, (err, isMatch) =>{
                if(err){
                    return done(err)
                }
                if(!isMatch){
                    return done(null, false)
                }
                return(null, user);
            })
        } else {
            //nothing found
            done(null, false);
        }
    })
})

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {

    //playload.sub from other file
    db.user.findById(payload.sub)
    .then((foundUser) =>{
        console.log("inside jwt strategy")
        if(foundUser){
            done(null, foundUser)
        } else {
            done(null, false)
        }
    })
    .catch((err) => {
        return(err, false)
    })

})



passport.use(jwtLogin);
passport.use(localLogin);