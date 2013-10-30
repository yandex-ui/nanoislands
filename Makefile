NPM_BIN=$(CURDIR)/node_modules/.bin
export NPM_BIN

MAKEFLAGS+=-j 4

all: nanoislands-demo.yate.js

nanoislands-demo.yate.js: $(shell find . -name '*.yate')
	$(NPM_BIN)/yate $(CURDIR)/src/nanoislands.yate > $@

clean:
	rm -rf nanoislands-demo.yate.js

.PHONY: all clean
