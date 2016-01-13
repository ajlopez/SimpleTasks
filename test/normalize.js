
var normalize = require('../lib/normalize');
var dates = require('../lib/dates');

exports['normalize starting date'] = function (test) {
    var options = { starting: '2016-01-12' };

    var result = normalize(options);
    
    test.equal(options.starting, '2016-01-12');
    
    test.ok(result);
    test.equal(result.starting, dates.toMilliseconds('2016-01-12'));
};

exports['normalize daily option'] = function (test) {
    var options = { daily: true };

    var result = normalize(options);
    
    test.equal(options.daily, true);
    
    test.ok(result);
    test.equal(result.increment, 1000 * 60 * 60 * 24);
};

