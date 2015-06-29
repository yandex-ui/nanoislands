NPM_BIN=$(CURDIR)/node_modules/.bin
NPM=$(CURDIR)/node_modules/
export NPM_BIN
export NPM

MAKEFLAGS+=-j 4

all: node_modules demo/demo.yate.js nanoislands.css nanoislands.ie.css nanoislands.js unittests/tests.yate.js docs ni.yate.js ni.min.js

nanoislands.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js > $@

demo/demo.yate.js: $(shell find . -name '*.yate') node_modules
	$(NPM_BIN)/yate $(CURDIR)/demo/nanoislands.yate > $@

ni.yate.js: ni.yate node_modules
	$(NPM_BIN)/yate $(CURDIR)/ni.yate > $@

unittests/tests.yate.js: $(shell find $(CURDIR)/unittests -name '*.yate') node_modules
	$(NPM_BIN)/yate $(CURDIR)/unittests/tests.yate > $@

nanoislands.ie.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js ie > $@

nanoislands.js: $(CURDIR)/blocks/nanoislands.js $(shell find $(CURDIR)/blocks -name '*.js') node_modules
	$(NPM_BIN)/borschik --input=blocks/nanoislands.js --minimize=no --output=nanoislands.js

ni.min.js: ni.js nanoislands.js externals.yate.js ni.yate.js node_modules
	$(NPM_BIN)/borschik --input=ni.js --minimize=no --output=ni.min.js

docs/js/_data.json: $(shell find $(CURDIR)/blocks -name '*.js') $(shell find $(CURDIR)/blocks -name '*.md') node_modules
	node build/build-doc.js > docs/js/_data.json

docs/js/docs.yate.js: docs/docs.yate docs/js/_data.json $(shell find $(CURDIR)/blocks -name '*.js') $(shell find $(CURDIR)/blocks -name '*.yate') $(shell find $(CURDIR)/blocks -name '*.md') node_modules
	$(NPM_BIN)/yate $(CURDIR)/docs/docs.yate > $(CURDIR)/docs/js/docs.yate.js

docs: docs/js/_data.json docs/js/docs.yate.js

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

clean-docs:
	rm -rf docs/js/_data.json docs/js/docs.yate.js

clean-tests:
	rm -rf unittests/tests.yate.js

clean-js:
	rm -rf nanoislands.js

clean-css:
	rm -rf nanoislands.css nanoislands.ie.css

clean-demo:
	rm -rf demo/demo.yate.js

clean: clean-demo clean-css clean-js clean-tests clean-docs

.PHONY: all publish clean watch docs clean-docs clean-tests clean-js clean-css clean-demo
