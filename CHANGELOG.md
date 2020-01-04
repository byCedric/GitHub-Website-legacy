# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.5.0](https://github.com/bycedric/github-website/compare/0.4.1...0.5.0) (2020-01-04)

### ⚠ BREAKING CHANGES

* rewrite everything in nextjs with expo ([#144](https://github.com/bycedric/github-website/issues/144)) ([0e51e15](https://github.com/bycedric/github-website/commit/0e51e154cf59fb7c442792cd7e0df9e4e6dc8f56))

### Features

* add standard version for easy releases ([#146](https://github.com/bycedric/github-website/issues/146)) ([96ccfc8](https://github.com/bycedric/github-website/commit/96ccfc8d90c25b4bf9319afa3299cfcb5e315f72))

### Bug Fixes

* run workflow when master is pushed ([f8a26fe](https://github.com/bycedric/github-website/commit/f8a26feb2bcdc7e5c284d77d812b288e4a089588))
* use proper links and references ([#145](https://github.com/bycedric/github-website/issues/145)) ([545be74](https://github.com/bycedric/github-website/commit/545be74ec1680f857eced362023138ba69d06e19))

### Code refactors

* rewrite everything in nextjs with expo ([#144](https://github.com/bycedric/github-website/issues/144)) ([0e51e15](https://github.com/bycedric/github-website/commit/0e51e154cf59fb7c442792cd7e0df9e4e6dc8f56))


## [0.4.1](https://github.com/bycedric/github-website/compare/0.4.0...0.4.1) (2019-02-04)


### Bug fixes

* origin validation issue in react-scripts ([#88](https://github.com/bycedric/github-website/issues/88)) ([c7aacb7](https://github.com/bycedric/github-website/commit/c7aacb7))


### Code refactors

* upgrade all dependencies ([#90](https://github.com/bycedric/github-website/issues/90)) ([5929577](https://github.com/bycedric/github-website/commit/5929577))
* upgrade all missed dependencies ([#91](https://github.com/bycedric/github-website/issues/91)) ([3468072](https://github.com/bycedric/github-website/commit/3468072))


### Other chores

* rebuild lock file from scratch ([#92](https://github.com/bycedric/github-website/issues/92)) ([ab66d29](https://github.com/bycedric/github-website/commit/ab66d29))

# [0.4.0](https://github.com/bycedric/github-website/compare/0.3.1...0.4.0) (2018-12-01)


### Code refactors

* move user description highlights to github user organism ([#68](https://github.com/bycedric/github-website/issues/68)) ([2575cec](https://github.com/bycedric/github-website/commit/2575cec))
* remove superseded github mentions ([#84](https://github.com/bycedric/github-website/issues/84)) ([5e9e513](https://github.com/bycedric/github-website/commit/5e9e513))
* upgrade now to version 12.0.0 ([#74](https://github.com/bycedric/github-website/issues/74)) ([3878702](https://github.com/bycedric/github-website/commit/3878702))
* upgrade react-scripts to version 2.1.0 ([#73](https://github.com/bycedric/github-website/issues/73)) ([74e8974](https://github.com/bycedric/github-website/commit/74e8974))
* user molecule layout to allow other content ([#63](https://github.com/bycedric/github-website/issues/63)) ([d1ad708](https://github.com/bycedric/github-website/commit/d1ad708))


### Documentation changes

* add notice about deployments with now v2 ([#83](https://github.com/bycedric/github-website/issues/83)) ([167a5f3](https://github.com/bycedric/github-website/commit/167a5f3))


### New features

* implement mention link in user molecule ([#65](https://github.com/bycedric/github-website/issues/65)) ([0a0cb92](https://github.com/bycedric/github-website/commit/0a0cb92))
* prototype github mentions support as a component ([#56](https://github.com/bycedric/github-website/issues/56)) ([1788b32](https://github.com/bycedric/github-website/commit/1788b32))
* upgrade to now version 2 ([#79](https://github.com/bycedric/github-website/issues/79)) ([f97f7ab](https://github.com/bycedric/github-website/commit/f97f7ab))


### Pipeline changes

* escape stylelint file glob ([#64](https://github.com/bycedric/github-website/issues/64)) ([0cc473f](https://github.com/bycedric/github-website/commit/0cc473f))
* limit node versions because of unexpected fetch behaviour ([#82](https://github.com/bycedric/github-website/issues/82)) ([eb50a5f](https://github.com/bycedric/github-website/commit/eb50a5f))
* test full build in travis to detect feature issues with cra ([#85](https://github.com/bycedric/github-website/issues/85)) ([5592f94](https://github.com/bycedric/github-website/commit/5592f94))
* upgrade travis with auto-release and security checks ([#81](https://github.com/bycedric/github-website/issues/81)) ([da79f78](https://github.com/bycedric/github-website/commit/da79f78))


### Testing updates

* add extra tests to atom components ([#67](https://github.com/bycedric/github-website/issues/67)) ([41d746c](https://github.com/bycedric/github-website/commit/41d746c))
* add extra tests to github provider ([#66](https://github.com/bycedric/github-website/issues/66)) ([14d6efa](https://github.com/bycedric/github-website/commit/14d6efa))
* add unit tests for github user organism ([#70](https://github.com/bycedric/github-website/issues/70)) ([4023dc1](https://github.com/bycedric/github-website/commit/4023dc1))
* add unit tests for user molecule ([#69](https://github.com/bycedric/github-website/issues/69)) ([84eb513](https://github.com/bycedric/github-website/commit/84eb513))
* clean up dirty tests and add app page component test ([#71](https://github.com/bycedric/github-website/issues/71)) ([addb123](https://github.com/bycedric/github-website/commit/addb123))

## [0.3.1](https://github.com/bycedric/github-website/compare/0.3.0...0.3.1) (2018-10-18)


### Bug fixes

* return empty array when no github keywords are found ([#62](https://github.com/bycedric/github-website/issues/62)) ([67bacbe](https://github.com/bycedric/github-website/commit/67bacbe))

# [0.3.0](https://github.com/bycedric/github-website/compare/0.2.1...0.3.0) (2018-10-18)


### Bug fixes

* add missing image open graph tags ([#53](https://github.com/bycedric/github-website/issues/53)) ([34686cd](https://github.com/bycedric/github-website/commit/34686cd))


### Code refactors

* upgrade styled-components to version 4.0.0 ([#51](https://github.com/bycedric/github-website/issues/51)) ([39311d0](https://github.com/bycedric/github-website/commit/39311d0))


### New features

* add highlights to user description ([#55](https://github.com/bycedric/github-website/issues/55)) ([f72a007](https://github.com/bycedric/github-website/commit/f72a007))
* add support for easy now deployments ([#61](https://github.com/bycedric/github-website/issues/61)) ([37d2dc4](https://github.com/bycedric/github-website/commit/37d2dc4))
* integrate open graph tags with helmet ([#52](https://github.com/bycedric/github-website/issues/52)) ([7b1a392](https://github.com/bycedric/github-website/commit/7b1a392))


### Other chores

* integrate styled components macro for easy debugging ([#57](https://github.com/bycedric/github-website/issues/57)) ([765c927](https://github.com/bycedric/github-website/commit/765c927))

## [0.2.1](https://github.com/bycedric/github-website/compare/0.2.0...0.2.1) (2018-10-14)


### Bug fixes

* center user full name for multiple lines ([#49](https://github.com/bycedric/github-website/issues/49)) ([7b3be87](https://github.com/bycedric/github-website/commit/7b3be87))


### Code refactors

* upgrade react-scripts to version 2.0.5 ([#44](https://github.com/bycedric/github-website/issues/44)) ([11ea017](https://github.com/bycedric/github-website/commit/11ea017))


### Other chores

* enable default test script ([#47](https://github.com/bycedric/github-website/issues/47)) ([2879210](https://github.com/bycedric/github-website/commit/2879210))


### Pipeline changes

* add build and staging deployments ([#41](https://github.com/bycedric/github-website/issues/41)) ([aaff84b](https://github.com/bycedric/github-website/commit/aaff84b))
* disable removal of old deployments ([#48](https://github.com/bycedric/github-website/issues/48)) ([70e18c8](https://github.com/bycedric/github-website/commit/70e18c8))
* move context to build folder to work around unexpected behaviour ([#45](https://github.com/bycedric/github-website/issues/45)) ([935ca46](https://github.com/bycedric/github-website/commit/935ca46))
* refactor to single-script command in deployment ([#42](https://github.com/bycedric/github-website/issues/42)) ([3d5777a](https://github.com/bycedric/github-website/commit/3d5777a))
* replace new lines in deployment script with spaces ([#43](https://github.com/bycedric/github-website/issues/43)) ([6252443](https://github.com/bycedric/github-website/commit/6252443))
* rewrite now deployment script with travis ([#46](https://github.com/bycedric/github-website/issues/46)) ([e68930e](https://github.com/bycedric/github-website/commit/e68930e))

# [0.2.0](https://github.com/bycedric/github-website/compare/0.1.0...0.2.0) (2018-10-14)


### Bug fixes

* align user description horizontally with small text ([#30](https://github.com/bycedric/github-website/issues/30)) ([6fb0e49](https://github.com/bycedric/github-website/commit/6fb0e49))
* avatar atom default props overwriting original proptypes ([#36](https://github.com/bycedric/github-website/issues/36)) ([4251cff](https://github.com/bycedric/github-website/commit/4251cff))
* prefix github username environment variable ([#31](https://github.com/bycedric/github-website/issues/31)) ([80a959a](https://github.com/bycedric/github-website/commit/80a959a))


### Code refactors

* disable manifest until names issue is resolved ([#34](https://github.com/bycedric/github-website/issues/34)) ([7a0b43d](https://github.com/bycedric/github-website/commit/7a0b43d)), closes [#33](https://github.com/bycedric/github-website/issues/33)
* replace static react title with github username ([#32](https://github.com/bycedric/github-website/issues/32)) ([f921faa](https://github.com/bycedric/github-website/commit/f921faa))


### New features

* add helmet for proper meta tags ([#37](https://github.com/bycedric/github-website/issues/37)) ([de10abc](https://github.com/bycedric/github-website/commit/de10abc))


### Pipeline changes

* disable windows builds due to issues with env vars ([#38](https://github.com/bycedric/github-website/issues/38)) ([67f48f0](https://github.com/bycedric/github-website/commit/67f48f0))
* enable linux macos and windows ([#35](https://github.com/bycedric/github-website/issues/35)) ([30480a3](https://github.com/bycedric/github-website/commit/30480a3))
* limit release scripts to linux only ([#40](https://github.com/bycedric/github-website/issues/40)) ([fbc1e73](https://github.com/bycedric/github-website/commit/fbc1e73))

# [0.1.0](https://github.com/bycedric/github-website/compare/0.0.0...0.1.0) (2018-10-13)


### Bug fixes

* allow package scope for greenkeeper only ([#24](https://github.com/bycedric/github-website/issues/24)) ([0623aa4](https://github.com/bycedric/github-website/commit/0623aa4))
* remove package lock file from project for greenkeeper ([#25](https://github.com/bycedric/github-website/issues/25)) ([5963734](https://github.com/bycedric/github-website/commit/5963734))


### Code refactors

* move app component to pages folder using atomic design ([52d5c8c](https://github.com/bycedric/github-website/commit/52d5c8c))
* move global styles to html template ([fa7911c](https://github.com/bycedric/github-website/commit/fa7911c))
* move logo to static assets folder ([b570b24](https://github.com/bycedric/github-website/commit/b570b24))
* move semantic release config to dedicated file ([#13](https://github.com/bycedric/github-website/issues/13)) ([4dc4eae](https://github.com/bycedric/github-website/commit/4dc4eae))
* rename service worker to use lower case for imports ([2341c0b](https://github.com/bycedric/github-website/commit/2341c0b))
* separate index to react and sw providers ([838e25c](https://github.com/bycedric/github-website/commit/838e25c))
* use absolute imports to make imports predictable ([#15](https://github.com/bycedric/github-website/issues/15)) ([d031a7c](https://github.com/bycedric/github-website/commit/d031a7c))
* use npm instead of yarn ([9d9f1a3](https://github.com/bycedric/github-website/commit/9d9f1a3))
* use tabs for indentation and spaces for alignment ([#23](https://github.com/bycedric/github-website/issues/23)) ([eecdb00](https://github.com/bycedric/github-website/commit/eecdb00))


### Documentation changes

* add greenkeeper badge ([#11](https://github.com/bycedric/github-website/issues/11)) ([09c94df](https://github.com/bycedric/github-website/commit/09c94df))
* emphasise on github showing your public events ([#26](https://github.com/bycedric/github-website/issues/26)) ([e169bd0](https://github.com/bycedric/github-website/commit/e169bd0))
* rewrite readme to match project ([#10](https://github.com/bycedric/github-website/issues/10)) ([34d6d9f](https://github.com/bycedric/github-website/commit/34d6d9f))
* use bright green color in greenkeeper badge ([4c3205c](https://github.com/bycedric/github-website/commit/4c3205c))


### New features

* add github user components ([#28](https://github.com/bycedric/github-website/issues/28)) ([94fd537](https://github.com/bycedric/github-website/commit/94fd537))


### Other chores

* add github templates for easy contributions ([#2](https://github.com/bycedric/github-website/issues/2)) ([c6724af](https://github.com/bycedric/github-website/commit/c6724af))
* add shared editor configuration ([0c23899](https://github.com/bycedric/github-website/commit/0c23899))


### Pipeline changes

* add codecov comments in pull requests ([#6](https://github.com/bycedric/github-website/issues/6)) ([821ead7](https://github.com/bycedric/github-website/commit/821ead7))
* add codecov to test coverages per pull request ([#4](https://github.com/bycedric/github-website/issues/4)) ([f2f1adf](https://github.com/bycedric/github-website/commit/f2f1adf))
* add commitlint to travis to make predictable releases ([#5](https://github.com/bycedric/github-website/issues/5)) ([1bbe228](https://github.com/bycedric/github-website/commit/1bbe228))
* add eslint to travis ci ([#7](https://github.com/bycedric/github-website/issues/7)) ([d4e90c7](https://github.com/bycedric/github-website/commit/d4e90c7))
* add flow to travis ci as replacement for proptypes ([#17](https://github.com/bycedric/github-website/issues/17)) ([584fe1d](https://github.com/bycedric/github-website/commit/584fe1d))
* add most basic travis configuration for ci ([#3](https://github.com/bycedric/github-website/issues/3)) ([7ed5796](https://github.com/bycedric/github-website/commit/7ed5796))
* add semantic release to travis for predictable releases ([#12](https://github.com/bycedric/github-website/issues/12)) ([c2c9b79](https://github.com/bycedric/github-website/commit/c2c9b79))
* add stylelint to help detecting bad usage ([#16](https://github.com/bycedric/github-website/issues/16)) ([bd32bc2](https://github.com/bycedric/github-website/commit/bd32bc2))
* configure greenkeeper to use conventions ([#8](https://github.com/bycedric/github-website/issues/8)) ([e6d6d7f](https://github.com/bycedric/github-website/commit/e6d6d7f))
* use simplified http repository url for travis and semantic release ([43e9937](https://github.com/bycedric/github-website/commit/43e9937))
