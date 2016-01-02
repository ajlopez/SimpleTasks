"use strict"

function toDate(text) {
    var parts = text.split('-');
    
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

function toNormalDateString(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    
    if (month < 10)
        month = "0" + month;
    if (day < 10)
        day = "0" + day;
        
    return year + "-" + month + "-" + day;
}

function toNormalDateTimeString(datetime) {
    var datestr = toNormalDateString(datetime);
    
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();
    
    if (hour < 10)
        hour = "0" + hour;
    if (minute < 10)
        minute = "0" + minute;
    if (second < 10)
        second = "0" + second;
        
    return datestr + " " + hour + ":" + minute + ":" + second;
}

function toMilliseconds(value) {
    if (value instanceof Date)
        return value.getTime();
        
    return (toDate(value)).getTime();
}

module.exports = {
    toNormalDateString: toNormalDateString,
    toNormalDateTimeString: toNormalDateTimeString,
    toMilliseconds: toMilliseconds,
    nowString: function () { return toNormalDateTimeString(new Date()); },
    todayString: function () { return toNormalDateString(new Date()); }
}



