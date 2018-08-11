
var fs = require('fs');

module.exports = fs.readdir(process.argv[2], (error, data, callback) => {
                    data.forEach(function(e){
                        if(e.includes('.' + process.argv[3])){
                            console.log(e);
                        }
                    })
                })
