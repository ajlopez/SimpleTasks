
"use strict";

function Engine() {
    var subscribers = {};    var posponed = [];    var stopped = false;        setTimeout(processPosponed, 1000);        function processPosponed() {        if (stopped)            return;                setTimeout(processPosponed, 1000);    }
    
    this.post = function (task, options) {
        if (!task.type)
            return this.post(task.task, task.options);
        
        options = options || {};
        
        if (options.delay)
            setTimeout(function () { process(task); }, options.delay);
        else
            setImmediate(function () { process(task); });
    };
    
    this.subscribe = function (type, fn) {
        if (!subscribers[type])
            subscribers[type] = [];
            
        subscribers[type].push(fn);
    };        this.stop = function () { stopped = true; }
    
    function process(task) {        if (stopped)            return;        
        var subs = subscribers[task.type];
        
        if (!subs)
            return;
            
        var sub = subs[Math.floor(Math.random() * subs.length)];
        
        sub(task);
    }
}

function createEngine() {
    return new Engine();
}

module.exports = {
    engine: createEngine
};