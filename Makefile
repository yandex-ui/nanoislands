NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

all: node_modules nanoislands.css nanoislands.ie.css nanoislands.js

nanoislands.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js > $@

nanoislands.ie.css: $(shell find . -name '*.styl') node_modules
	node build/build-styl.js ie > $@

nanoislands.js: $(CURDIR)/blocks/nanoislands.js $(shell find $(CURDIR)/blocks -name '*.js') node_modules
	$(NPM_BIN)/borschik --input=blocks/nanoislands.js --minimize=no --output=nanoislands.js

node_modules:
	npm install

clean:
	rm -rf nanoislands.css nanoislands.ie.css nanoislands.js

.PHONY: all clean
