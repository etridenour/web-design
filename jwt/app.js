
var express = require("express");
var app = express();

app.use(require("./routes/authentication"));





app.listen(3001);
