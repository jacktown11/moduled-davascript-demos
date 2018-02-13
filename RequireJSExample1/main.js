require.config({
    paths: {
        'jquery': ['https://cdn.bootcss.com/jquery/3.3.1/jquery', './jquery'],
        'a': 'a',
        'b': 'b'
    }
});

J.lg('window.J is:');
J.lg(window.J);
J.show();

require(['jquery', 'a'], function($){
    J.lg('\n\njquery and a loaded');
    J.lg('window.a is ' + window.a);
    J.show();
    require(['a'], function(a) {
        J.lg('\n\na loaded');
        J.show();
        require(['b'], function(b) {
            J.lg('\n\nb loaded');
            J.lg('window.b is ' + window.b);
            J.show();
        });
    });
});

J.lg('\n\nmain.js finish excution');
J.show();
