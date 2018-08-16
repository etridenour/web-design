
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/form', (req, res) =>{
    let dataFile = req.app.get("appData");
    res.render('form',{
        dataFile: dataFile
    });
})

router.post('/submit', (req, res) =>{

    res.send(`The header info: ${req.body.email} ${req.body.password}`)

})

module.exports = router;