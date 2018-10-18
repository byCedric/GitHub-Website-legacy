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
