
let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    let dataFile = req.app.get("appData");

    res.render('index',{
        pageTitle: "Drummers",
        pageID: 'Home',
        dataFile: dataFile,
    })
})

module.exports = router;