
var dates = require('../lib/dates');

exports['to normal date string'] = function (test) {
    var date = new Date(2015,11,10);
    var result = dates.toNormalDateString(date);
    
    test.ok(result);
    test.equal(result, "2015-12-10");
};

exports['to normal date time string'] = function (test) {
    var date = new Date(2015,11,10,2,3,4);
    var result = dates.toNormalDateTimeString(date);
    
    test.ok(result);
    test.equal(result, "2015-12-10 02:03:04");
};
