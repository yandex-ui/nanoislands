module.exports = function (casper, phantomcss, blockName) {
	casper.then(function() {
	    phantomcss.screenshot('body', blockName);
	});
}