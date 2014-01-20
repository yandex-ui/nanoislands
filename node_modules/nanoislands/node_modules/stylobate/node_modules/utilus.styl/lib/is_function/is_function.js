var plugin = function(){
    return function(style){
        var nodes = this.nodes;
        style.define('_utilus_is_function', function(function_name) {
            return new nodes.Boolean(~Object.keys(this.global._scope.locals).indexOf(function_name.name || function_name.val));
        });
  
    };
};
module.exports = plugin;
