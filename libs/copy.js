var ncp = require('ncp').ncp;
const moment = require('moment');

// current date
var currentDate = moment().format("YYYYMMDDHH");

var sourcePaths = [
    'build/'+currentDate+'/html'
];

ncp.limit = 16;

for (var i in sourcePaths) {
    var source = sourcePaths[i];
    var destination = 'apps/';
    ncp(source, destination, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log('done!');
    });
}


