(function(w){
    var timeOld = 0,
        timeNow = 0,
        lg = console.log;
    var J = {
        lg: lg,
        showTime: function(){
            timeOld = timeNow;
            timeNow = Date.now(); 
            lg('现在时间是' + timeNow + ',距离上次看表' + (!!timeOld ? (timeNow - timeOld) : 0) + 'ms' );
        },
        countScript: function(){
            var scripts = document.getElementsByTagName('script'),
                len = scripts.length,
                i;
            lg('现在文档中'+ len +'有个script标签');
            if(len > 0){
                lg('这些标签的src属性分别是：')
            }
            for(i = 0; i < len; i++){
                if(!!scripts[i].src){
                    lg(scripts[i].src);
                }else{
                    lg('NO SRC PROPERTY');
                }
            }
        },
        show: function(){
            this.showTime();
            this.countScript();
        }
    };

    if(typeof module ===  'object' && typeof module.exports === 'object'){
        module.exports = J;
    }else if(typeof define === 'function' && !!define.amd){
        define([], function(){
            return J;
        });
    }else {
        // if neither of amd and commonjs is supported,
        // just assign J as a global variable
        w.J = J;
    }
})(window);