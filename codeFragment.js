// example.js
var x = 5;
var addX = function(value) {
    return value + x;
};
module.exports.x = x;
module.exports.addX = addX;

// main.js
var example = require('./example.js');

console.log(example.x); // 5
console.log(example.addX(1));   //6

// module_x.js
function f1(){
    // ...
}
function f2(){
    // ...
}

var module1 = new Object({
    _count: 0,
    f1: function(){
        //...
    },
    f2: function(){
        //...
    }
});

var module1 = (function(){
    var _count = 0;
    var f1 = function(){
        //...
    };
    var f2 = function(){
        //...
    };
    return {
        f1: f1,
        f2: f2
    };
})();
var module1 = (function(mod){
    mod.f3 = function(){
        //...
    };
    return mod;
})(module1);
var module1 = (function(mod){
    //...
    return mod;
})(window.module1 || {})

var module1 = (function($, YAHOO){
    //...
})(jQuery, YAHOO);

var math = require('math');
math.add(2,3);

require([module], callback);

require(['math'], function(math){
    math.add(2,3);
});