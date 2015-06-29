NPM_BIN=$(CURDIR)/node_modules/.bin
NPM=$(CURDIR)/node_modules/
export NPM_BIN
export NPM

MAKEFLAGS+=-j 4

all: node_modules demo/demo.yate.js nanoislands.css nanoislands.ie.css nanoislands.js unittests/tests.yate.js docs react.nanoislands.yate.js react.nanoislands.min.js

nanoislands.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js > $@

demo/demo.yate.js: $(shell find . -name '*.yate') node_modules
	$(NPM_BIN)/yate $(CURDIR)/demo/nanoislands.yate > $@

react.nanoislands.yate.js: react.nanoislands.yate node_modules
	$(NPM_BIN)/yate $(CURDIR)/react.nanoislands.yate > $@

unittests/tests.yate.js: $(shell find $(CURDIR)/unittests -name '*.yate') node_modules
	$(NPM_BIN)/yate $(CURDIR)/unittests/tests.yate > $@

nanoislands.ie.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js ie > $@

nanoislands.js: $(CURDIR)/blocks/nanoislands.js $(shell find $(CURDIR)/blocks -name '*.js') node_modules
	$(NPM_BIN)/borschik --input=blocks/nanoislands.js --minimize=no --output=nanoislands.js

react.nanoislands.min.js: react.nanoislands.js nanoislands.js externals.yate.js react.nanoislands.yate.js node_modules
	$(NPM_BIN)/borschik --input=react.nanoislands.js --minimize=no --output=react.nanoislands.min.js

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
