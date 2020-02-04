var TODD_UTILITY = (function(){
    var _trace = function(functionName, arg){
            console.log(functionName, arg);
    };

    return{
        trace: _trace
    }
})();