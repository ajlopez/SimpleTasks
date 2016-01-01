
var st = require('..');

exports['post and subscribe task'] = function (test) {
    test.async();
    
    var engine = st.engine();
    
    engine.post({ type: 'process', options: { value: 42 } });
    
    engine.subscribe('process', function (task) {
        test.ok(task);
        test.equal(task.type, 'process');
        test.ok(task.options);
        test.equal(task.options.value, 42);
        
        test.done();
    });
}

exports['post and subscribe three tasks'] = function (test) {
    test.async();
    
    var engine = st.engine();
    
    engine.post({ type: 'process', options: { value: 1 } });
    engine.post({ type: 'process', options: { value: 2 } });
    engine.post({ type: 'process', options: { value: 3 } });
    
    var counter = 0;
    
    engine.subscribe('process', function (task) {
        counter++;
        test.ok(task);
        test.equal(task.type, 'process');
        test.ok(task.options);
        test.equal(task.options.value, counter);
        
        if (counter == 3)
            test.done();
    });
}

exports['post and subscribe task with delay option'] = function (test) {
    test.async();
    
    var engine = st.engine();
    
    var start = (new Date()).getTime();
    
    engine.post({ type: 'process', options: { value: 42 } }, { delay: 1000 });
    
    engine.subscribe('process', function (task) {
        var now = (new Date()).getTime();

        test.ok(task);
        test.equal(task.type, 'process');
        test.ok(task.options);
        test.equal(task.options.value, 42);

        test.ok(now > start);
        test.ok(now > start + 800);
        test.ok(now < start + 1500);
        
        test.done();
    });
}

