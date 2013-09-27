NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

all: nanoislands.css nanoislands.yate.js nanoislands.ie.css nanoislands.js

nanoislands.css: $(shell find . -name '*.styl')
	node build/build-styl.js > $@

nanoislands.ie.css: $(shell find . -name '*.styl')
	node build/build-styl.js ie > $@

nanoislands.yate.js: $(shell find . -name '*.yate')
	$(NPM_BIN)/yate demo/nanoislands.yate > $@

nanoislands.js: blocks/nanoislands.js $(shell find blocks -name '*.js') node_modules
	$(NPM_BIN)/borschik --input=blocks/nanoislands.js --minimize=no --output=nanoislands.js

clean:
	rm -rf nanoislands.css nanoislands.ie.css nanoislands.yate.js nanoislands.js

.PHONY: all clean
