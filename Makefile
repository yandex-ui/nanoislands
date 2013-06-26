NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

all: nanoislands.css nanoislands.yate.js nanoislands.js

nanoislands.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js > $@

nanoislands.yate.js: $(shell find . -name '*.yate') node_modules
	$(NPM_BIN)/yate demo/nanoislands.yate > $@

nanoislands.js: blocks/nanoislands.js node_modules
	$(NPM_BIN)/borschik --input=blocks/nanoislands.js --minimize=no --output=nanoislands.js

node_modules: package.json
	npm install
	touch node_modules

clean:
	rm -rf nanoislands.css nanoislands.yate.js nanoislands.js

.PHONY: all clean
