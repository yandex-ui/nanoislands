/**
 * Module dependencies.
 */

var stylus = require('stylus');
var fs = require('fs');
var csso = require('csso');
var autoprefixer = require('autoprefixer');
var glob = require('glob');
var Comb = require('csscomb');
var whatToTest = process.env.npm_package_config_whatToTest || '**';
var comb = new Comb();
comb.configure(require('./.csscomb.json'));

// test cases

glob.sync("./*/" + whatToTest + "/tests/*.styl").forEach(function(test){
  var name = test.replace(/\.?[\/]/g, ' ').replace(' tests',':').replace('.styl','');

  it(name, function(){
    var css = fs.readFileSync(test.replace('.styl', '.css'), 'utf8').replace(/\r/g, '').trim();
    var style = stylus('@import "index.styl"; @import "' + test + '"');

    style.render(function(err, actual){
      if (err) throw err;
      // Change the order of csso and autoprefixer when
      // we would able to set selector list code style
      actual = csso.justDoIt(actual);
      actual = autoprefixer.compile(actual);
      actual = comb.processString(actual);

      // Remove those hardfixes when there would be a way to do this in csscomb
      actual = actual.replace(/([^\+>])([\+>])\./g,'$1 $2 .');
      actual = actual.replace(/\)(,?)([^:\)\s,;])/g,')$1 $2');
      actual = actual.replace(/,sans-serif/g,', sans-serif');
      actual = actual.replace(/,#/g,', #');
      actual = actual.replace(/,red/g,', red');
      actual = actual.replace(/,transparent/g,', transparent');
      actual = actual.replace(/background: 0 0/g,'background: transparent');
      actual = actual.replace(/font-weight: 700/g,'font-weight: bold');
      actual = actual.replace(/([^ ])!important/g,'$1 !important');
      actual = actual.replace(/inset,([^ ])/g,'inset, $1');
      actual = actual.replace(/\)rgba/g,') rgba');

      // CSSO strips ie9 hack, should replace with smth else
      actual = actual.replace(/color: #333 \\0\/;/g,'color: transparent;\n  color: #333 \\0/;');

      actual.trim().should.equal(css);
    });
  })
});

