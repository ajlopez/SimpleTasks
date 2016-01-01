
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

