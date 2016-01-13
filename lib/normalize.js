
var dates = require('./dates');

function normalize(options) {
    var newoptions = { };
    
    for (var n in options)
        newoptions[n] = options[n];
        
    if (newoptions.starting)
        newoptions.starting = dates.toMilliseconds(newoptions.starting);

    if (newoptions.daily)
        newoptions.increment = 1000 * 60 * 60 * 24;
        
    return newoptions;
}

module.exports = normalize;

