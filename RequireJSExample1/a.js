(function(w){
    var a = [1,2];

    if(typeof module ===  'object' && typeof module.exports === 'object'){
        module.exports = a;
    }else if(typeof define === 'function' && !!define.amd){
        define([], function(){
            return a;
        });
    }else {
        w.a = a;
    }
})(window);