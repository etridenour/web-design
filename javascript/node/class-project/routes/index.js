
let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    res.send(`
        <h1>Drummers</h1>
        <img src="/images/bozzio_kit.jpg" style="height: 90%;" >
    `)
})

module.exports = router;