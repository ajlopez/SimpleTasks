
var dates = require('./dates');

function normalize(options) {
    var newoptions = { };
    
    for (var n in options)
        newoptions[n] = options[n];
        
    if (newoptions.starting)
        newoptions.starting = dates.toMilliseconds(newoptions.starting);
        
    return newoptions;
}

module.exports = normalize;

