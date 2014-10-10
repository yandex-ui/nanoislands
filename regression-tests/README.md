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

To test particular blocks type

```bash
grunt --[diff|update]=block1,[...]
```

For example to update button and select:

```bash
grunt regtest --update=button,select
```

This will remove button.[some-fancy-state].png and select.[some-fancy-state].png from screenshots and insert new ones.

To diff them type:

```bash
grunt regtest --diff=button,select
```

This will create or replace button.[some-fancy-state].diff.png and select.[some-fancy-state].png files and print to console if any failures occured. Actual diff images located in failures directory.

For verbose mode use -e or -explain key at the end of statement like so:

```bash
grunt regtest --diff=button,select -e
```

## Whats under the hood

The script does basically the following:
* iterates over all arguments you've passed (if no arguments passed iterates over all folder inside 'blocks' folder)
* During this iteration it checks if the testConfig.json exists and parses it (see below for full description of config file).
* Takes template of each block with following priority: template from testConfig.json, [anything].test.yate, [anything].test.yate. If none of them are found proceed without processing current block.
* Renders taken template into index.yate.js (*via index.yate*)
* Runs casper which heads to localhost and does testing
* requires scenario from testFile or rtest.js if it exists. If none of this is present only default state will be captured.

** testConfig.json
```json
{
    "testFile": "filename.yate",
    "scenarioFile": "path to file relative to current directory" (default "rtest.js")
}
```
**testFile** is the one that has highest priority in choosing template for testing and requiring scenario file as described above. Change it if you can't conform this convention: [name].test.yate

Instead of simply taking screenshot of body one may implement any scenario she wants by referencing testFile in testConfig.json. See [phantomcss docs](https://github.com/Huddle/PhantomCSS) for details. Please note that scenarios are not executed in node but rather in casperjs environment. Thus there are some picularities:
* All vars defined in phantom-capture.js are global for scenario file. Therefore you can reference phantomcss, args, blockName, etc.
* Use globally defined util tom simplify writing tests. Please note that almost all methods of util return functions. You can execute them immediately or pass as array to util.sequence which is better since it utilises casper's .then method. In most cases, this is the correct way to use tests.
* Once again, scenario is not executed in standard node environment. So don't expect node standard modules to behave normally (e.g. fs).






