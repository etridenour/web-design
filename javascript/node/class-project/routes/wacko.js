
let express = require('express');
let router = express.Router();

router.get('/wacko', (req, res) => {

    let dataFile = req.app.get("appData");

        res.render('wacko',{
            pageTitle: "Wacko",
            pageID: 'wack',
            dataFile: dataFile

        })
})

router.get('/nodemon', (req, res) => {

    let dataFile = req.app.get("appData");

        res.render('nodemon',{
            pageTitle: "Nodemon",
            pageID: 'nodemon',
            dataFile: dataFile

        })
})

module.exports = router;