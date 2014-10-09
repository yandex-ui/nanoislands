var capture = require.bind(require, './capture');
var diff = require.bind(require, './diff');
var exec = require('child_process').exec;

if(require.main === module) {
	var len = process.argv.length;
	if (len <= 2) return console.log('not enough params');

	run(process.argv[2], process.argv.slice(3));

} else {
	module.exports = run;
}

function run (operation, blocks) {
    blocks = blocks || [];

    var filenames;
    if (blocks.length === 0) {
    	filenames = '*';
    	blocks = require('fs').readdirSync('../blocks');
    }
	else {
		filenames = blocks.map(function (b) {
	    	return b + '\.*.png'
	    }).join(' ');
	}

    switch (operation) {
	    case 'update':
	    	exec('cd screenshots && rm ' + filenames,
	    		capture().bind(null, blocks));
		    break;
		case 'diff':
			exec('cd failures && rm ' + filenames.replace('.png', '.fail.png'),
				capture().bind(null, blocks.slice(), diff().bind(null, blocks)));
			break;
		default:
			console.log('invalid argument');
    }
}