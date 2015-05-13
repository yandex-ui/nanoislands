---
# Stylobate-islands Changelog
---

## v1.0.0 (in development)

- Added islands-v3 switch.

- Added islands-v3 input, with a lot of upgrades from the v2 one (except for the overall wrote-from-scratching):

    - `large` and `extra-large` sizes, with aliases for all of them.
    - Complex input made into a skin, triggered by having `__controller` element defined.

- Added islands-v3 button, with a lot of upgrades from the v2 one (except for the overall wrote-from-scratching):

    - Added `extra-large` button size.
    - Added `dark` and `pseudo-dark` button types.
    - Added shortcut aliases for button sizes (`s`, `xl` etc.).
    - Added button using two elements (when using `content` element).
    - Added `shape` modifier to button.

- Changed line-height on body to unitless.
- Changed `rem` to `px` for standalone variant.
- Added `$islands_px` for modifying variables using the same unit that is used for other variables, if necessary.
- Changed notation for elements from `foo-element` to `foo__element`.
- Removed all the deprecated code.
- Removed `tail` param from arrow in favor of `__helper`.
- Using Stylobate 1.0.0

## v0.28.0 (2014-07-03)

- Updated Stylobate and Stylus deps.

## v0.27.5 (2014-06-18)

- Updated Stylobate dep, fixes rem problem.

## v0.27.4 (2014-05-30)

- Updated Stylobate dep, fixes icon problems.

## v0.27.3 (2014-05-30)

- Fixed clean-css issue in promo-button, #74.
- Updated dev deps and fixed Travis issue.

## v0.27.2 (2014-04-26)

- Fixed broken `init_islands_root`.
- Updated Stylobate to v0.24.1.

## v0.27.1 (2014-04-24)

- Fixed a few left issues: links and form.

## v0.27.0 (2014-04-24)

- Applied latest Stylobate, some API changes, caching and other stuff.

## v0.26.1 (2014-04-17)

- Fixed rgba to rgba-ie in border-color values, #70.

## v0.26.0 (2014-04-10)

- Added a way to configure border-alpha of pseudo-buttons.
- Added a way to center the content of simple inputs.
- Fixed the difference in box-shadow for promo-buttons.
- Changed default text color to black, #67.
- Updated Stylus to `0.43` and tests for it.

## v0.25.1 (2014-03-31)

- Updated `if-ie.styl` to `0.5.0`.

## v0.25.0 (2014-03-26)

- Added vertical groups.
- Refactored groups to have placeholders.

## v0.24.1 (2014-03-06)

- Made inverted pseudo-button slightly brighter.
- Fixed bounding box of check icon.
- Added way to make a small placeholder.
- Refactored and tested variables.

## v0.24.0 (2014-03-06)

- Added `_inverted` modifier to pseudo-button.

- Added ie fallback for arrow skin

## v0.23.3 (2014-02-26)

- Updated Stylobate to `0.22.5`.

## v0.23.2 (2014-02-26)

- Fixed incorrect call of button skin in checkbox.

## v0.23.1 (2014-02-26)

- Updated Stylobate to `0.22.4`.

## v0.23.0 (2014-02-22)

- Added offset arguments for arrow icon.
- Removed disabled guards, as it is now have no events.
- Using stylobate's disabled kind for disabled skin.
- Fixed selectors for file inputs a bit.
- Updated deps.

## v0.22.0 (2014-02-11)

- Added arrow icon skin.

## v0.21.1 (2014-01-23)

- Updated Stylobate.

## v0.21.0 (2014-01-20)

- Updated Stylobate.
- Translated links to the new Stylobate.

## v0.20.0 (2014-01-17)

- Added placeholder for fields.
- Updated tests with proper content (after new CSSComb and Autoprefixer).

## v0.19.1–v0.19.2 (2014-01-10)

- Some minor hotfixes.

## v0.19.0 (2014-01-10)

- Now using require instead of import.
- Refactored some skins using the latest Stylobate features.
- Updated deps.

## v0.18.2 (2013-12-12)

- Some enhancements for menu-item (ellipsis param, `wsnw`, no user select, separate size).

## v0.18.1 (2013-12-11)

- Added menu-separator.
- Fixed the naming for the menu-item_hover.

## v0.18.0 (2013-12-11)

- Added menu skin.
- Added check icon (and reused it in the checkbox).

## v0.17.0 (2013-11-21)

- Added promo-button, #43.
- Added basic domik.

## v0.16.9 (2013-11-18)

- Fixed background for inputs in IE.

## v0.16.8 (2013-11-14)

- Fixed more IE valign problems.

## v0.16.7 (2013-11-14)

- In IE fallback to browser radios too.

## v0.16.6 (2013-11-14)

- Workaround for CSSO/IE error.
- In IE fallback to browser checkboxes.

## v0.16.5 (2013-11-13)

- Fixed rem on font problem in IE.

## v0.16.4 (2013-11-12)

- Fixed baseline problems with button in IE.

## v0.16.3 (2013-11-11)

- Fixed inputs' borders in IE, #42.

## v0.16.2 (2013-11-09)

- Fixed hardcoded disabled state for inputs.
- Fixed dropdown icon's padding, #41.
- Stylobate up.

## v0.16.1 (2013-11-06)

- Stylobate and Stylus deps up.

## v0.16.0 (2013-10-31)

- Updated Stylobate to the latest version.
- Moved variables to hashes.
- Added header text sizes.
- Fixed appearance of inputs, #38.

## v0.15.1 (2013-10-28)

- More shortcuts for variables in a standalone version.

- Shortcuts for variables are now lazy, so they won't break anything on include.

## v0.15.0 (2013-10-28)

- Better project structure, #37.
- `standalone.styl`, #37.
- Better keyword for atomic tests: `make test=button`.

## v0.14.4 (2013-10-22)

- Fixed search input appearance.

## v0.14.2-v0.14.3 (2013-09-25)

- Fixed namespace problems in popup and select.
- Updated Stylobate dep.

## v0.14.1 (2013-09-19)

- Updated Stylobate dep.

## v0.14.0

- Added new color and shadow variables.
- Refactored focus styles.
- Added input error style.

## v0.13.0 — v0.13.1

- Updated Stylobate dep.

## v0.12.0

- Now docstests are using CSSO and csscomb.js for pretier code.
- Changelog added.

## v0.11.0 — v0.11.4

- A lot of doctests added, some in-place refactoring.
- Added variables for simple backgrounds.
- Made misc color a bit brighter.
- Make the tail selectors less specific.

## v0.10.0 — v0.10.4

- Started to add proper doctests and Travis CI.
- Added selecty modifier to `icon dropdown`.
- Some refactoring and fixes for a lot of things.

## v0.9.0

- Added tail element for popup.

## v0.8.0 — v0.8.1

- Refactored popup.

## v0.7.0

- Changed the name for the overlay.

## v0.6.0 — v0.6.3

- **New skin**: `userpic`.
- **New skin**: `icon notification`.

## v0.5.0 — v0.5.2

- Some refactoring for button states, also example of file-input
- Made better selectors for file inputs.

## v0.4.0 — v0.4.4

- Refactored checkboxes and radios a bit.
- Better selectors for checked and focus for button skin.
- Some fixes for radios and checkboxes.

## v0.3.0 — v0.3.1

- Improved the arrow skin.
- Some fixes for IE and input groups.

## v0.2.0 — v0.2.4

- Checking the Stylobate version on compile.
- Refactoring for some kinds.
- Added `user-select: none` for a bunch of stuff.
- **New skin:** `icon remove`.

## v0.1.0 — v0.1.3

- Added `package.json`.
- Removed unneeded prefixes.
- Fixed buttons in IE.
- Added skin for groups.
- Emulating arrow in IE if it's made with an external tail.

## Pre v0.1.0

_A lot of initial stuff_
