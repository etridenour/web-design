
let express = require('express');
let router = express.Router();

router.get('/drummers', (req, res) => {

    let dataFile = req.app.get("appData");

        res.render('drummerList',{
            pageTitle: "Drummer List",
            pageID: 'Drum',
            dataFile: dataFile

        })
})



    


    // dataFile.drummers.forEach(function(item){
    //     myHTML += `
    //     <li>
    //         <h2>${item.name}</h2>
    //         <img src="/images/${item.shortname}.jpg" alt="">
    //         <p>${item.description}</p>
    //     </li>
    //     `;
    // })
    

    // res.send(`
    //     <h1>Drummers</h1>
    //     <img class='gif' src='/images/drum.gif'>
    //     <ul>
    //         ${myHTML}
    //     </ul>
    //     <link rel="stylesheet" href="/styles/styles.css">
    //     `)
    // })


// router.get('/drummers/:drummerID', (req, res) => {

//     let dataFile = req.app.get("appData");

//     let drummer = dataFile.drummers[req.params.drummerID];

//     res.send(`
    
//         <h2>${drummer.name}</h2>
//         <img src="/images/${drummer.shortname}.jpg" alt="">
//         <p>${drummer.description}</p>
//     `)
// })

module.exports = router;