(function(w){
    var b = [1,2];

    if(typeof module ===  'object' && typeof module.exports === 'object'){
        module.exports = b;
    }else if(typeof define === 'function' && !!define.amd){
        define([], function(){
            return b;
        });
    }else {
        w.a = b;
    }
})(window);