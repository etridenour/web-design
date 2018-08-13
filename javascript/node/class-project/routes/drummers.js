
let express = require('express');
let router = express.Router();

router.get('/drummers', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML;


    dataFile.drummers.forEach(function(item){
        myHTML += `
        <li>
            <h2>${item.name}</h2>
            <img src="/images/${item.shortname}.jpg" alt="">
            <p>${item.description}</p>
        </li>
        `;
    })
    

    res.send(`
        <h1>Drummers</h1>
        <ul>
            ${myHTML}
        </ul>
        `)
    })


router.get('/drummers/:drummerID', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML;

    let drummer = dataFile.drummers[req.params.drummerID];

    res.send(`
    
        <h2>${drummer.name}</h2>
        <img src="/images/speakers/${drummer.shortname}.jpg" alt="">
        <p>${drummer.summary}</p>
    `)
})

module.exports = router;