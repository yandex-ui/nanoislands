NPM_BIN=$(CURDIR)/node_modules/.bin
NPM=$(CURDIR)/node_modules/
export NPM_BIN
export NPM

MAKEFLAGS+=-j 4

all: node_modules demo/demo.yate.js nanoislands.css nanoislands.ie.css nanoislands.js unittests/tests.yate.js

nanoislands.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js > $@

demo/demo.yate.js: $(shell find . -name '*.yate') node_modules
	$(NPM_BIN)/yate $(CURDIR)/demo/nanoislands.yate > $@

unittests/tests.yate.js: $(shell find $(CURDIR)/unittests -name '*.yate') node_modules
	$(NPM_BIN)/yate $(CURDIR)/unittests/tests.yate > $@

nanoislands.ie.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js ie > $@

nanoislands.js: $(CURDIR)/blocks/nanoislands.js $(shell find $(CURDIR)/blocks -name '*.js') node_modules
	$(NPM_BIN)/borschik --input=blocks/nanoislands.js --minimize=no --output=nanoislands.js

docs: $(shell find $(CURDIR)/blocks -name '*.js') docs/templates/index.yate
	node build/build-doc.js > docs/_data.json
	$(NPM_BIN)/yate docs/templates/index.yate docs/_data.json docs/templates/externals.js > docs/index.html

node_modules:
	npm install

watch: node_modules
	$(NPM)/grunt-cli/bin/grunt watch_make

publish:
	rm -rf node_modules
	npm install
	make clean
	make
	npm test
	npm publish

grunt: node_modules
	$(NPM_BIN)/grunt

clean:
	rm -rf demo/demo.yate.js nanoislands.css nanoislands.ie.css nanoislands.js unittests/tests.yate.js grunt

.PHONY: all publish clean watch
