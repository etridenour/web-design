
var express = require('express');
var router = express.Router();

router.get('/chat', function(req, res){
   let dataFile = req.app.get("appData");
  res.render('socket',{
      'pageTitle': 'Chat',
      dataFile: dataFile
  })
});

module.exports = router;