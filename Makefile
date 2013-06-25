NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

all: nanoislands.css demo/nanoislands.js

nanoislands.css: $(shell find . -name '*.styl') node_modules
	node ./build-styl.js > $@

demo/nanoislands.js: $(shell find . -name '*.yate') node_modules
	$(NPM_BIN)/yate demo/nanoislands.yate > $@

node_modules: package.json
	npm install
	touch package.json

clean:
	rm -rf nanoislands.css demo/nanoislands.js

.PHONY: all clean
