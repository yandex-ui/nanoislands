
var plugin = function(){
    return function(style){
        var nodes = this.nodes;
        var semver = require('semver');
        var stylobateVersion = require('../../package').version
        style.define('_check_stylobate_version', function(version) {
            if (semver.satisfies(stylobateVersion, version.val)) {
                return [ new nodes.Boolean(true), new nodes.String(stylobateVersion) ];
            } else {
                return [ new nodes.Boolean(false), new nodes.String(stylobateVersion) ];
            }
        });
  
    };
};
module.exports = plugin;
