NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

all: node_modules demo/demo.yate.js nanoislands.css nanoislands.ie.css nanoislands.js

nanoislands.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js > $@

demo/demo.yate.js: $(shell find . -name '*.yate') node_modules
	$(NPM_BIN)/yate $(CURDIR)/demo/nanoislands.yate > $@

nanoislands.ie.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js ie > $@

nanoislands.js: $(CURDIR)/blocks/nanoislands.js $(shell find $(CURDIR)/blocks -name '*.js') node_modules
	$(NPM_BIN)/borschik --input=blocks/nanoislands.js --minimize=no --output=nanoislands.js

node_modules:
	npm install

publish:
	rm -rf node_modules
	make clean
	make all
	npm publish

clean:
	rm -rf demo/demo.yate.js nanoislands.css nanoislands.ie.css nanoislands.js

.PHONY: all publish clean
