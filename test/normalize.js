
var normalize = require('../lib/normalize');
var dates = require('../lib/dates');

exports['normalize starting date'] = function (test) {
    var options = { starting: '2016-01-12' };

    var result = normalize(options);
    
    test.equal(options.starting, '2016-01-12');
    
    test.ok(result);
    test.equal(result.starting, dates.toMilliseconds('2016-01-12'));
};