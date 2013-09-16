commit?=origin/master

CMD_YATE=../node_modules/yate/yate
CMD_SCREENSHOT=tools/screenshot
CMD_MAKE_HTML=tools/htmls

TPL_REPORT=tools/report.yate
HTML_REPORT=report.html

FILE_TESTS_JSON=tests.json
FILES_TESTS=$(shell find blocks -name '**.test.js')

FILE_RESULT=report.json

DIR_SCREENSHOTS=screenshots
DIR_ORIGIN=origin
DIR_HTMLS=html


default:
	@echo "Usage: make test [commit=<commit_ref>|origin/master]"

clean:
	rm -rf \
	$(FILE_TESTS_JSON) \
	$(DIR_SCREENSHOTS) \
	$(DIR_HTMLS) \
	$(DIR_ORIGIN) \
	$(HTML_REPORT) \
	$(FILE_TESTS_JSON) \
	$(FILE_RESULT) \

screenshots: $(FILE_TESTS_JSON)
	rm -rf $(DIR_SCREENSHOTS)
	find html -name '**.html' | $(CMD_SCREENSHOT) --local --workers=4

test: $(FILE_RESULT)
	$(CMD_YATE) $(TPL_REPORT) $(FILE_RESULT) > $(HTML_REPORT)

$(FILE_RESULT): screenshots compare
	./tools/report --tests=$(FILE_TESTS_JSON) --output=$@

$(FILE_TESTS_JSON): origin $(FILES_TESTS)
	mkdir -p $(DIR_HTMLS)
	$(CMD_MAKE_HTML) --files="$(FILES_TESTS)" --json=$(FILE_TESTS_JSON)

origin:
	(cd .. && rm -rf test/$(DIR_ORIGIN) && git archive --prefix=test/$(DIR_ORIGIN)/ $(commit) | tar x)

compare:
	$(MAKE) $(subst origin,diff,$(wildcard $(DIR_SCREENSHOTS)/*.origin.html.png))

%.diff.html.png: %.origin.html.png %.html.png
	compare $^ $@

