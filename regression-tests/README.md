#Readme

To run test you need to install casperjs and phantomjs. The easiest way is to use homebrew for mac. See [here](http://docs.casperjs.org/en/latest/installation.html) for details.

To update screenshots over *all* blocks type

```bash
grunt regtest --update
```

To test screenshots over *all* blocks type

```bash
grunt regtest --diff
```

To test particular blocks cd to regression test directory and type

```bash
node run [diff|update] [block1, [...]]
```

For example to update button and select:

```bash
node run update button select
```

This will remove button.png and select.png from screenshots and insert new ones.

To diff them type:

```bash
node diff button select
```

This will create or replace *.diff* files and show print to console if any failures occured. Actual diff images located in faliures directory.

## Whats under the hood

The script does basically the following:
* iterates over all arguments you've passed (if no arguments passed iterates over all folder inside 'blocks' folder)
* During this iteration it checks if the testConfig.json exists and parses it. (see below for full description of config file).
* Takes template of each block with following priority: template from testConfig.json, [anything].test.yate, [anything].test.yate. If none of them are found proceed without processing current block.
* Renders taken template into index.yate.js (*via index.yate*)
* Runs casper which heads to localhost and does testing

** testConfig.json
{
    "states": ["pressed", "hovered"],
    "testFile": "filename.yate",
    "scenarioFile": "path to file relative to current directory"
}

**testFile** is the one that has highest priority in choosing template for testing as described above. Change it if you can't conform this convention: [name].test.yate

**scenarioFile** is the javascript module with following signature:
```javascript
module.exports = function (casper, phantomcss, blockName) {
	casper.then(function() {
	    phantomcss.screenshot('body', blockName);
	});
}
```

Instead of simply taking screenshot of body one may implement any scenario she wants. See [phantomcss docs](https://github.com/Huddle/PhantomCSS) for details. Please note that the naming convention for different scenarios is following: [state].[blockName]. The scenarion in file name should correspond to one in states from testConfig.json.

However, taking diff for differend scenarios is not implemented yet - stay tuned for upcoming versions.






