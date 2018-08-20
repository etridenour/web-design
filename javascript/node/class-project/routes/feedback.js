
var express = require('express');
var router = express.Router();


router.get('/feedback', (req, res) =>{
    let dataFile = req.app.get("appData");
    res.render('feedback',{
        'pageTitle': 'Feedback',
        'pageID': 'feedback',
        dataFile: dataFile
    });
})

// router.post('/submit', (req, res) =>{

//     res.send(`The header info: ${req.body.name} ${req.body.email}`)

// })

module.exports = router;