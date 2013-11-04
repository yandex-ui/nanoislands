---
# Stylobate Changelog
---

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
