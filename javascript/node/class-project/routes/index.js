
let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    res.render('index',{
        pageTitle: "Drummers",
        pageID: 'Home',
    })
})

module.exports = router;