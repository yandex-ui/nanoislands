var path = require('path'),
	fs = require('fs');

var html = '';

fs.createReadStream('node_modules/nanoislands/docs/index.html', {autoClose: true})
	.on('data', function (data) {
		
		html+=data
	})
	.on('end', function () {
		html = html.replace(/(href|src)\s*=\s*"([^"]*)/g, function (attr) {
			return attr.replace(/"([^"]*)$/, function (str, link) {
				return '"' + path.resolve('node_modules/nanoislands/docs', link)
							.replace(/^.*node_modules\/nanoislands/i, 'node_modules/nanoislands')
			})
		})
path.resolve('../../')
console.log(html)
		// fs.writeFileSync('index.html', html)
	}).setEncoding('utf8')



