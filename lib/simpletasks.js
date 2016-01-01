
"use strict";

function Engine() {
    var subscribers = {};    var posponed = [];    var stopped = false;        setTimeout(processPosponed, 1000);        function processPosponed() {        if (stopped)            return;                setTimeout(processPosponed, 1000);                var now = (new Date()).getTime();                for (var n in posponed)            if (posponed[n] && posponed[n].options.starting <= now) {                var task = posponed[n].task;                delete posponed[n];                setImmediate(function () { process(task); })            }    }
    
    this.post = function (task, options) {
        if (!task.type)
            return this.post(task.task, task.options);
        
        options = options || {};
        
        if (options.delay)
            setTimeout(function () { process(task); }, options.delay);        else if (options.starting) {            if (typeof options.starting === 'string')                options.starting = (new Date()).getTime();            posponed.push({ task: task, options: options });                    }        else
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