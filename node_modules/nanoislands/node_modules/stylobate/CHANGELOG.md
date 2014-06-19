---
# Stylobate Changelog
---

## v0.24.3 (2014-06-18)

- Allow defining `rem` before including stylobate.

## v0.24.2 (2014-05-30)

- Fixes selector order problems in `icon` kind.

## v0.24.1 (2014-04-26)

- Removed cache from modal (CSS order issue).
- Updated utilus to 0.15.

## v0.24.0 (2014-04-24)

- Major breaking change: refactored Stylobate mixins to recieve Stylobate object as argument.
- New Stylobate object with collected params and other stuff.
- Added `stylobate_this` function to return empty `$this` to allow param getters in called functions.

## v0.23.2 (2014-03-31)

- Updated `if-ie.styl` to `0.5.0`.

## v0.23.1 (2014-03-26)

- Fixed vertical groups lol.

## v0.23.0 (2014-03-24)

- Added `justifier` kind.
- Added `vertical` param to groups.

## v0.22.5 (2014-02-26)

- Updated `if-ie.styl` to `0.4.0`.

## v0.22.4 (2014-02-26)

- Updated `if-ie.styl` to `0.3.1`.

## v0.22.3 (2014-02-22)

- Fixed error when default have no `called_from`.

## v0.22.2 (2014-02-22)

- Fixed different box-sizing at `button` and `a` buttons.
- Fixed unneeded `:focus` reset for disabled things without events.
- Updated utilus and if-ie deps.

## v0.22.1 (2014-01-23)

- Fixed bug with stylobate params equal to the functions.

## v0.22.0 (2014-01-23)

- Added way to cross-extend different stylobate namespaces.
- Added a way to redefine defaults on extending (far from ideal though).

## v0.21.0 (2014-01-21)

- Added `baseliner` kind.
- Added `ellipsis` kind.
- Added `disabled` kind.
- Rewrote `link` kind almost from scratch.
- Deprecated `ellipsis` param at `shrink` kind in favor of `ellipsis` kind.

## v0.20.0 (2014-01-09)

- Restructured code in repo.
- Added `pseudo-with-content` detail.
- Added `deprecate` detail.
- Refactored some skins to use defaults.
- Fixed empty defaults.
- Fixed parental subparams in defaults.
- Fixed default subitems of subitems.
- Removed and deprecated version checker.
- Removed unneeded `called_from` function.
- Replaced imports with requires.
- Updated deps.

## v0.19.3 (2013-11-14)

- Fixed input align in IE.

## v0.19.2 (2013-11-09)

- Fix for another IE bug in file inputs, #54.

## v0.19.1 (2013-11-06)

- Fix for IE bug in file inputs.

## v0.18.0 — v0.19.0 (2013-10-31)

- Using the latest Stylus with hashes.
- Caching grid results.
- Using hash for extends.
- Fixed namespace bug.

## v0.17.0 (2013-09-23)

- Added defaults setter.

## v0.16.0 (2013-09-23)

- Added extendability flag.
- Added extendable subitems.
- Extended items can be bodyless now.
- Allow non-existent modifiers.
- Proper modifiers for extended objects.

## v0.15.0 (2013-09-19)

- Added a way to add context (would work only with described elements atm).
- Stylobate now would throw an error when it won't find kind/skin/etc.
- Big renaming and moving and testing happened.
- Updated if-ie dep.

## v0.14.0 (2013-09-17)

- Added `stylobate_extends` function.
- Added `called_from` auto param to all the stylobates.
- Can now use existing classes for sub-elements/modifiers of extended things.
- First prototype for `kind-grid` (kinda slow, need refactoring?).

## v0.13.0 — v0.13.5

- Fixed the modifiers/subskins.
- Some refactoring for a lot of kinds.
- Fixed lonely items in `kind-group`.

## v0.12.0 — v0.12.1

- **New kind**: `kind-content`.
- Added first any-getter.

## v0.11.0

- Changed the name for the `kind-overlay`.

## 0.10.0

- Use params from the only-modifiers skin/kind call.
- `kind-icon` now accepts single number for `size` param.

## v0.9.0 — v0.9.1

- Added two ways of creating file inputs.

## v0.8.0 — v0.8.2

- Refactored kinds and skins, moving their code to the new detail, woohoo.
- Optimized selectors for checked and focus.
- Better margin for icons (better for sans-serifs).

## v0.7.0

- Added parent getters and test for all getters.

## v0.6.0

- **New feature**: call subkinds and subskins from kinds and skins.
- Prototype for `kind-list`.

## v0.5.0 — v0.5.2

- Added stylobate version checker for skins.

## v0.4.0

- Changed default vertical-align on `kind-button`.

## v0.3.0 — v0.3.9

- `kind-icon` now uses `size` instead of `w` and `h`.
- Some other improvements to the `kind-icon` (image and align params, autosize).
- Added some basic placeholder selectors.
- Refactored and tested some kinds.

## v0.2.0

- `kind-icon` now uses `w` and `h` params.

## v0.1.0 — v0.1.5

- Added [Travis CI](https://travis-ci.org/).
- Added namespace to utilus' functions.
- Some fixed to buttons in IE.
- Removed some obsolete stuff.

## Pre v0.1.0

_A lot of initial stuff_
