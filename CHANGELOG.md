# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- Example:

## [1.8.0](https://github.com/rudderlabs/code-server/compare/v1.7.2...v1.8.0) (2026-02-16)


### Features

* move to restricted terminal ([#126](https://github.com/rudderlabs/code-server/issues/126)) ([62b2f98](https://github.com/rudderlabs/code-server/commit/62b2f98263955e4b6d915b6cbc3948a8d84b5579))


### Miscellaneous Chores

* update Cline to 6.10.0 ([#128](https://github.com/rudderlabs/code-server/issues/128)) ([ecdd5d7](https://github.com/rudderlabs/code-server/commit/ecdd5d74cfe4b28cec8351a4c6a0c02f93f7019e))

## [1.7.2](https://github.com/rudderlabs/code-server/compare/v1.7.1...v1.7.2) (2026-02-09)


### Miscellaneous Chores

* update Cline to 6.9.0 ([#125](https://github.com/rudderlabs/code-server/issues/125)) ([0d456b4](https://github.com/rudderlabs/code-server/commit/0d456b4ad4d90f9e3951d8c7fb8622ac4c83d0e6))

## [1.7.1](https://github.com/rudderlabs/code-server/compare/v1.7.0...v1.7.1) (2026-02-05)


### Bug Fixes

* wrong token usage in release please ([b583883](https://github.com/rudderlabs/code-server/commit/b583883dc50a32da925eedd61e160ab747f3f60c))

## [1.7.0](https://github.com/rudderlabs/code-server/compare/v1.6.0...v1.7.0) (2026-02-05)


### Features

* add autologin for codeserver ([#79](https://github.com/rudderlabs/code-server/issues/79)) ([e01807e](https://github.com/rudderlabs/code-server/commit/e01807e273d337779cba9d00fe265270b1169be9))
* add comprehensive terminal logging to .bashrc ([#60](https://github.com/rudderlabs/code-server/issues/60)) ([bb840da](https://github.com/rudderlabs/code-server/commit/bb840da032352ccef5ebebfa8dba1870063f9605))
* add context file detection and workspace trust for code-server ([#100](https://github.com/rudderlabs/code-server/issues/100)) ([c7720d2](https://github.com/rudderlabs/code-server/commit/c7720d2d9776bdc6be41452be0063731ea069d09))
* add patch for CTA update ([#107](https://github.com/rudderlabs/code-server/issues/107)) ([917292c](https://github.com/rudderlabs/code-server/commit/917292c8cbfd0438903da3e42cbdce70c7643815))
* add theme color customizations via separate settings file ([#112](https://github.com/rudderlabs/code-server/issues/112)) ([c54d979](https://github.com/rudderlabs/code-server/commit/c54d9791883f580ee2462b7924723aecf0c570d5))
* automate release process with release-please ([#119](https://github.com/rudderlabs/code-server/issues/119)) ([e51b68b](https://github.com/rudderlabs/code-server/commit/e51b68b1f01675857fa11e4c0793e7007a93966b))
* automatic cline upgrade ([#67](https://github.com/rudderlabs/code-server/issues/67)) ([82f3320](https://github.com/rudderlabs/code-server/commit/82f3320ded20af4acb397e01fa2e1b5e4ece8d18))
* automatically send CTA prompts ([#66](https://github.com/rudderlabs/code-server/issues/66)) ([29ac348](https://github.com/rudderlabs/code-server/commit/29ac34834ba37efffbba526f33911721fffe1c4e))
* copilot welcome screen ([#53](https://github.com/rudderlabs/code-server/issues/53)) ([2a3f209](https://github.com/rudderlabs/code-server/commit/2a3f209e55c0e78c489b988b575729263bcb6d5c))
* **helm:** Don't create Secret if existingSecret is provided ([#6397](https://github.com/rudderlabs/code-server/issues/6397)) ([eb8099f](https://github.com/rudderlabs/code-server/commit/eb8099ff89eaca72cc9051f440d817cfd0e24084))
* **lang:** Add Urdu Locale ([#6444](https://github.com/rudderlabs/code-server/issues/6444)) ([5428442](https://github.com/rudderlabs/code-server/commit/54284426286994cb5c7700ecb2aa330db4bcf77e))
* migrate Docker build workflow to ECR ([#87](https://github.com/rudderlabs/code-server/issues/87)) ([7f8cdf0](https://github.com/rudderlabs/code-server/commit/7f8cdf098c52920ae1ef9c9b1bf9aef077495c26))
* move Rudder AI to right secondary sidebar by default ([#103](https://github.com/rudderlabs/code-server/issues/103)) ([07ad4f5](https://github.com/rudderlabs/code-server/commit/07ad4f57cf987ea9a1575f3059886a4de82bd258))
* revise CTA messages to 3 buttons with hover tooltips ([#75](https://github.com/rudderlabs/code-server/issues/75)) ([ec6a610](https://github.com/rudderlabs/code-server/commit/ec6a61064f59fc30ef2f6c528cb16a1bb694f025))
* rudderstack-profiles actions in vscode sidebar ([382a51d](https://github.com/rudderlabs/code-server/commit/382a51df34923e120c646ffb701cf2a362014300))
* update Profiles MCP Server to 1.2.0 ([#114](https://github.com/rudderlabs/code-server/issues/114)) ([d9ac697](https://github.com/rudderlabs/code-server/commit/d9ac697b86a7d48cbc6e8f8d1734ab626dcbf92b))
* use Databricks enabled MCP ([#80](https://github.com/rudderlabs/code-server/issues/80)) ([077b962](https://github.com/rudderlabs/code-server/commit/077b962d64fd601739b4c25ebdb8b9030563a796))


### Bug Fixes

* allow session cookies in cross-origin iframes ([#111](https://github.com/rudderlabs/code-server/issues/111)) ([8458251](https://github.com/rudderlabs/code-server/commit/845825132797d92573f7d6bb1160de31498d6d16))
* docker build fails ([#55](https://github.com/rudderlabs/code-server/issues/55)) ([bd571e2](https://github.com/rudderlabs/code-server/commit/bd571e2a562682281b96dfa2889f1f44ae795261))
* failing vscode build ([#7](https://github.com/rudderlabs/code-server/issues/7)) ([251a663](https://github.com/rudderlabs/code-server/commit/251a66324029933bcd9c119b564cfffdd1551988))
* incorrect secrets in actions ([#6](https://github.com/rudderlabs/code-server/issues/6)) ([f139994](https://github.com/rudderlabs/code-server/commit/f139994f88f377e8e4828dfda469a438d6657989))
* invalid ESM module path on Windows ([#7162](https://github.com/rudderlabs/code-server/issues/7162)) ([18cd97d](https://github.com/rudderlabs/code-server/commit/18cd97dc12747ec20ce1b33d373f3c1e7dbcb96a))
* multi arch build ([#4](https://github.com/rudderlabs/code-server/issues/4)) ([3ab6fc2](https://github.com/rudderlabs/code-server/commit/3ab6fc267a3ab13adbd65a4eb9a7faf23889a2a6))
* parse part in path proxy ([#7337](https://github.com/rudderlabs/code-server/issues/7337)) ([47d6d3a](https://github.com/rudderlabs/code-server/commit/47d6d3ada5aadef6d221f3d612401eb3dad9299e))
* prettier cline rules ([bf69b6a](https://github.com/rudderlabs/code-server/commit/bf69b6a4427304e777dbf7274fdfcccf9324b4cf))
* retrigger build ([#14](https://github.com/rudderlabs/code-server/issues/14)) ([e48f18c](https://github.com/rudderlabs/code-server/commit/e48f18c35aeaf1465d79dff1c3d353821e0d2ed2))
* rs icon missing ([#11](https://github.com/rudderlabs/code-server/issues/11)) ([e930816](https://github.com/rudderlabs/code-server/commit/e9308161938e710c2cc64e55383e1ccc3abfe884))
* update GitHub Actions Runner images ([#7379](https://github.com/rudderlabs/code-server/issues/7379)) ([6e26dad](https://github.com/rudderlabs/code-server/commit/6e26dad1b17d5f7c160281c6ca6cf6ee65c401ed))
* use rootEndpoint for copilot-welcome.html path with path-based routing ([#109](https://github.com/rudderlabs/code-server/issues/109)) ([f60ed5d](https://github.com/rudderlabs/code-server/commit/f60ed5df50c5d008176db9c205f3ee26c86cae38))
* wrong release please version ([#120](https://github.com/rudderlabs/code-server/issues/120)) ([30df33e](https://github.com/rudderlabs/code-server/commit/30df33e4e9bdcb2ef059face22ab307e17ffccee))


### Miscellaneous Chores

* action for dockerising WIP ([#3](https://github.com/rudderlabs/code-server/issues/3)) ([fb04d77](https://github.com/rudderlabs/code-server/commit/fb04d77df3985c5f260a3e0b1941be8e80a9c5cf))
* apply security best practices from step security ([#74](https://github.com/rudderlabs/code-server/issues/74)) ([a216d6b](https://github.com/rudderlabs/code-server/commit/a216d6b63fc99739cd7e84f1a0e0805c489aeba5))
* bump @babel/runtime from 7.25.7 to 7.27.0 ([#7312](https://github.com/rudderlabs/code-server/issues/7312)) ([3b7634c](https://github.com/rudderlabs/code-server/commit/3b7634c578124ec707a5d78a2acb74dc6ede003c))
* bump @babel/traverse from 7.16.8 to 7.23.2 in /test ([#6495](https://github.com/rudderlabs/code-server/issues/6495)) ([53d856d](https://github.com/rudderlabs/code-server/commit/53d856d3c621d24343a0c84360b63dd33bed749f))
* bump @eslint/eslintrc from 3.1.0 to 3.2.0 ([#7100](https://github.com/rudderlabs/code-server/issues/7100)) ([1c3fcf2](https://github.com/rudderlabs/code-server/commit/1c3fcf2a838e2bdb05c0cc63db5ccb8a0d2f1373))
* bump @eslint/eslintrc from 3.2.0 to 3.3.1 ([#7292](https://github.com/rudderlabs/code-server/issues/7292)) ([7eb8f4b](https://github.com/rudderlabs/code-server/commit/7eb8f4be8781b7a9e114c931fd0efa8227b1ca2b))
* bump @types/compression from 1.7.5 to 1.8.0 ([#7364](https://github.com/rudderlabs/code-server/issues/7364)) ([3669c96](https://github.com/rudderlabs/code-server/commit/3669c96c9c00b51a1ad07fc62949e097d39dfa97))
* bump @types/node from 18.17.18 to 18.18.1 ([#6467](https://github.com/rudderlabs/code-server/issues/6467)) ([262f66a](https://github.com/rudderlabs/code-server/commit/262f66abf6a5d96b2e50c5681baabbf18d6dfa38))
* bump @types/node from 18.18.1 to 18.19.4 ([#6613](https://github.com/rudderlabs/code-server/issues/6613)) ([749e105](https://github.com/rudderlabs/code-server/commit/749e105cd9665269d7bb12318752d3455b1edec8))
* bump @types/node from 20.14.2 to 20.16.10 ([#7020](https://github.com/rudderlabs/code-server/issues/7020)) ([13d4cd6](https://github.com/rudderlabs/code-server/commit/13d4cd6489486369df006f2ca905b46dc115b73f))
* bump @types/node from 20.16.10 to 20.17.17 ([#7201](https://github.com/rudderlabs/code-server/issues/7201)) ([626d2cf](https://github.com/rudderlabs/code-server/commit/626d2cf1c389b6fdb0166a5e7cb47fed2348eb06))
* bump @types/semver from 7.5.8 to 7.7.0 ([e5b8d44](https://github.com/rudderlabs/code-server/commit/e5b8d447e5a8b948650e0b9e7fd0496015b79b48))
* bump @typescript-eslint/eslint-plugin from 5.59.1 to 5.62.0 ([#6327](https://github.com/rudderlabs/code-server/issues/6327)) ([ea3c79f](https://github.com/rudderlabs/code-server/commit/ea3c79ffd11637adf3fc9176d1546f13cdd3a7c9))
* bump @typescript-eslint/eslint-plugin from 6.11.0 to 6.16.0 ([#6617](https://github.com/rudderlabs/code-server/issues/6617)) ([a143dcf](https://github.com/rudderlabs/code-server/commit/a143dcf11195752a544918a0c19f144b98ff80eb))
* bump @typescript-eslint/eslint-plugin from 6.16.0 to 6.20.0 ([#6646](https://github.com/rudderlabs/code-server/issues/6646)) ([6adbfc4](https://github.com/rudderlabs/code-server/commit/6adbfc461b4b464b7b510e02489969daab17bf2a))
* bump @typescript-eslint/eslint-plugin from 6.20.0 to 6.21.0 ([#6701](https://github.com/rudderlabs/code-server/issues/6701)) ([f9c0624](https://github.com/rudderlabs/code-server/commit/f9c0624f85b2340a79041ca5b38725bcfe00a2ee))
* bump @typescript-eslint/eslint-plugin from 6.21.0 to 7.0.0 ([#6818](https://github.com/rudderlabs/code-server/issues/6818)) ([479eb5b](https://github.com/rudderlabs/code-server/commit/479eb5bfa5db98c5c6d5f0a521458b607466f18d))
* bump @typescript-eslint/eslint-plugin from 6.7.2 to 6.11.0 ([#6533](https://github.com/rudderlabs/code-server/issues/6533)) ([239df56](https://github.com/rudderlabs/code-server/commit/239df566341e7aaf8a11587b02582f6348da2ebb))
* bump @typescript-eslint/parser from 5.57.1 to 5.59.11 ([#6262](https://github.com/rudderlabs/code-server/issues/6262)) ([40ff2e6](https://github.com/rudderlabs/code-server/commit/40ff2e604949156f536bb2a56c14a6de1371b660))
* bump @typescript-eslint/parser from 5.59.11 to 5.61.0 ([#6312](https://github.com/rudderlabs/code-server/issues/6312)) ([7fb5407](https://github.com/rudderlabs/code-server/commit/7fb54073db2e4c20239d0ab2105ed42c62f446c4))
* bump @typescript-eslint/parser from 5.61.0 to 5.62.0 ([#6328](https://github.com/rudderlabs/code-server/issues/6328)) ([d27cd43](https://github.com/rudderlabs/code-server/commit/d27cd43dceb890edc83492ad01aa6f4946e422bf))
* bump @typescript-eslint/parser from 6.17.0 to 6.21.0 ([#6703](https://github.com/rudderlabs/code-server/issues/6703)) ([66c7f7d](https://github.com/rudderlabs/code-server/commit/66c7f7d8b1a59df662b10232090608f04f2cc29a))
* bump @typescript-eslint/parser from 6.7.2 to 6.9.1 ([#6511](https://github.com/rudderlabs/code-server/issues/6511)) ([cbc1751](https://github.com/rudderlabs/code-server/commit/cbc17516fd93875acc0b78c298bce4f2a973f895))
* bump @typescript-eslint/parser from 6.9.1 to 6.16.0 ([#6614](https://github.com/rudderlabs/code-server/issues/6614)) ([2cabe79](https://github.com/rudderlabs/code-server/commit/2cabe799e2246dfa1a1a718408c8bcc347dbc97b))
* bump @typescript-eslint/parser from 6.9.1 to 6.17.0 ([#6622](https://github.com/rudderlabs/code-server/issues/6622)) ([cc68c0f](https://github.com/rudderlabs/code-server/commit/cc68c0fb0f031865c6a78c5f2f21e0c65c566570))
* bump actions/cache from 3 to 4 ([#6650](https://github.com/rudderlabs/code-server/issues/6650)) ([ab17495](https://github.com/rudderlabs/code-server/commit/ab17495e3a6113cf2771cba30bd8c315a92f09ad))
* bump actions/checkout from 3 to 4 ([#6462](https://github.com/rudderlabs/code-server/issues/6462)) ([80dfb2b](https://github.com/rudderlabs/code-server/commit/80dfb2b2a9ef36c527e12d2aa0ecf80edfe928fa))
* bump actions/download-artifact from 3 to 4 ([#6609](https://github.com/rudderlabs/code-server/issues/6609)) ([94f759a](https://github.com/rudderlabs/code-server/commit/94f759a53ce496a433221ba063cb52d3e5cf117b))
* bump actions/setup-node from 3 to 4 ([#6512](https://github.com/rudderlabs/code-server/issues/6512)) ([c4efcaf](https://github.com/rudderlabs/code-server/commit/c4efcaf079970ae2d49462c7c2709924fc1a4532))
* bump actions/upload-artifact from 3 to 4 ([#6610](https://github.com/rudderlabs/code-server/issues/6610)) ([2786f60](https://github.com/rudderlabs/code-server/commit/2786f6075245949bc562ce56a9301de1acb99110))
* bump aquasecurity/trivy-action from 0.10.0 to 0.11.2 ([#6303](https://github.com/rudderlabs/code-server/issues/6303)) ([e72e8bb](https://github.com/rudderlabs/code-server/commit/e72e8bb6b5c83b141a5e059ee6d78e67234e7fc2))
* bump aquasecurity/trivy-action from 0.11.2 to 0.12.0 ([#6461](https://github.com/rudderlabs/code-server/issues/6461)) ([8ee4568](https://github.com/rudderlabs/code-server/commit/8ee45686b0f8a6b8a2e906b86db2be63f4557583))
* bump aquasecurity/trivy-action from 0.12.0 to 0.13.1 ([#6514](https://github.com/rudderlabs/code-server/issues/6514)) ([3fc30ca](https://github.com/rudderlabs/code-server/commit/3fc30cae3eb395ea8a724a4a1ba94d8432aef700))
* bump aquasecurity/trivy-action from 0.13.1 to 0.14.0 ([#6530](https://github.com/rudderlabs/code-server/issues/6530)) ([ae75f76](https://github.com/rudderlabs/code-server/commit/ae75f76e304ccb4eece12625b971f5d1cf85fc03))
* bump aquasecurity/trivy-action from 0.14.0 to 0.16.1 ([#6621](https://github.com/rudderlabs/code-server/issues/6621)) ([21e798c](https://github.com/rudderlabs/code-server/commit/21e798ccdff6ac9c08515a783fcba3accb5d99b0))
* bump aquasecurity/trivy-action from 0.16.1 to 0.18.0 ([#6705](https://github.com/rudderlabs/code-server/issues/6705)) ([5453d02](https://github.com/rudderlabs/code-server/commit/5453d0287238e73e7c8b595c34e57838e99fce65))
* bump aquasecurity/trivy-action from 0.18.0 to 0.19.0 ([#6739](https://github.com/rudderlabs/code-server/issues/6739)) ([ebd79ed](https://github.com/rudderlabs/code-server/commit/ebd79ed958ca862c019de5952b271ffcde802d7f))
* bump aquasecurity/trivy-action from 0.19.0 to 0.21.0 ([#6819](https://github.com/rudderlabs/code-server/issues/6819)) ([fc47b4f](https://github.com/rudderlabs/code-server/commit/fc47b4f1c5be9a62a5324df62170744f23cc2a61))
* bump aquasecurity/trivy-action from 0.21.0 to 0.24.0 ([#6894](https://github.com/rudderlabs/code-server/issues/6894)) ([2b33ca8](https://github.com/rudderlabs/code-server/commit/2b33ca8a3f5b453a571a2d0d1f8ddeb08655613c))
* bump aquasecurity/trivy-action from 0.24.0 to 0.28.0 ([#7060](https://github.com/rudderlabs/code-server/issues/7060)) ([fc97e24](https://github.com/rudderlabs/code-server/commit/fc97e248c354be27a054c182669a6984dd73cd41))
* bump aquasecurity/trivy-action from 0.28.0 to 0.29.0 ([#7097](https://github.com/rudderlabs/code-server/issues/7097)) ([96800cc](https://github.com/rudderlabs/code-server/commit/96800cc52126ed8e8420169cea1ff8684d87c36b))
* bump aquasecurity/trivy-action from 0.29.0 to 0.30.0 ([#7288](https://github.com/rudderlabs/code-server/issues/7288)) ([b07335a](https://github.com/rudderlabs/code-server/commit/b07335a0f1fdf5df7144b134be4cf9e72caa9dcf))
* bump aquasecurity/trivy-action from 0.30.0 to 0.31.0 ([#7408](https://github.com/rudderlabs/code-server/issues/7408)) ([740a2d3](https://github.com/rudderlabs/code-server/commit/740a2d3aa31e1434550b55dba160a28db02a93d9))
* bump argon2 from 0.30.3 to 0.31.0 ([#6415](https://github.com/rudderlabs/code-server/issues/6415)) ([331a017](https://github.com/rudderlabs/code-server/commit/331a017309b57d6b43f152a076a0b7063a1f367c))
* bump azure/setup-helm from 3.5 to 4 ([#6780](https://github.com/rudderlabs/code-server/issues/6780)) ([1a7265b](https://github.com/rudderlabs/code-server/commit/1a7265b39245db475e415627ee56ca1e1e90238e))
* bump braces from 3.0.2 to 3.0.3 ([#6843](https://github.com/rudderlabs/code-server/issues/6843)) ([250281d](https://github.com/rudderlabs/code-server/commit/250281d0717753147470243b1d582690d0dfa9eb))
* bump braces from 3.0.2 to 3.0.3 in /test ([#6844](https://github.com/rudderlabs/code-server/issues/6844)) ([d449729](https://github.com/rudderlabs/code-server/commit/d449729e18ed7d6cb00d36d2edf4dc31357774a2))
* bump codecov/codecov-action from 3 to 4 ([#6652](https://github.com/rudderlabs/code-server/issues/6652)) ([63beaaa](https://github.com/rudderlabs/code-server/commit/63beaaabd73e4a9bc509be97a0366302d7f38b69))
* bump codecov/codecov-action from 3 to 4 ([#6706](https://github.com/rudderlabs/code-server/issues/6706)) ([107a3fd](https://github.com/rudderlabs/code-server/commit/107a3fd4100b75637c2c773c83e5c2329c58bcc7))
* bump codecov/codecov-action from 4 to 5 ([#7096](https://github.com/rudderlabs/code-server/issues/7096)) ([0b7c044](https://github.com/rudderlabs/code-server/commit/0b7c04485715756aa87fddfc6487b2c328945798))
* bump compression from 1.7.4 to 1.8.0 ([#7236](https://github.com/rudderlabs/code-server/issues/7236)) ([6117986](https://github.com/rudderlabs/code-server/commit/611798650f3e83c068d1d0bbf80357b51184bdf8))
* bump dawidd6/action-download-artifact from 2 to 3 ([#6612](https://github.com/rudderlabs/code-server/issues/6612)) ([aea28cb](https://github.com/rudderlabs/code-server/commit/aea28cb499811670c44b1533cb40aa55cdc651ae))
* bump dawidd6/action-download-artifact from 3 to 6 ([#6876](https://github.com/rudderlabs/code-server/issues/6876)) ([c86c4e8](https://github.com/rudderlabs/code-server/commit/c86c4e8bb6f738990de117ce2183f3dbdb2643c2))
* bump dawidd6/action-download-artifact from 6 to 8 ([#7191](https://github.com/rudderlabs/code-server/issues/7191)) ([ebf2df6](https://github.com/rudderlabs/code-server/commit/ebf2df63f5f4af4b6e2680118ad12f319592709b))
* bump dawidd6/action-download-artifact from 8 to 9 ([#7241](https://github.com/rudderlabs/code-server/issues/7241)) ([db5f99d](https://github.com/rudderlabs/code-server/commit/db5f99dc7820590e94053be5ce48a3a07fdeb61c))
* bump dawidd6/action-download-artifact from 9 to 10 ([#7361](https://github.com/rudderlabs/code-server/issues/7361)) ([05d8904](https://github.com/rudderlabs/code-server/commit/05d8904ec521dfdfd237ee8441dd2ae13f667f7d))
* bump docker/login-action from 2 to 3 ([#6513](https://github.com/rudderlabs/code-server/issues/6513)) ([f44b573](https://github.com/rudderlabs/code-server/commit/f44b57393cca62515e554d5146a283cf3821880f))
* bump docker/setup-buildx-action from 2 to 3 ([#6463](https://github.com/rudderlabs/code-server/issues/6463)) ([9fec2d7](https://github.com/rudderlabs/code-server/commit/9fec2d7cad745f11e72aaf1c0ba8371c626d7eee))
* bump docker/setup-qemu-action from 2 to 3 ([#6464](https://github.com/rudderlabs/code-server/issues/6464)) ([4e4d510](https://github.com/rudderlabs/code-server/commit/4e4d510238f46dbbea0413b5fec5dc2c20c0aa41))
* bump dockerfile version ([#110](https://github.com/rudderlabs/code-server/issues/110)) ([cf555b3](https://github.com/rudderlabs/code-server/commit/cf555b3c83691efee754cff3dbd253144d1cf9e5))
* bump eslint from 8.39.0 to 8.44.0 ([#6299](https://github.com/rudderlabs/code-server/issues/6299)) ([4118465](https://github.com/rudderlabs/code-server/commit/411846528b2befa8d62835c4e4d2ebedc60b4b48))
* bump eslint from 8.44.0 to 8.48.0 ([#6414](https://github.com/rudderlabs/code-server/issues/6414)) ([f915d1e](https://github.com/rudderlabs/code-server/commit/f915d1e2c894205c4b6cc7fe5efdce4e6ee78449))
* bump eslint from 8.49.0 to 8.53.0 ([#6532](https://github.com/rudderlabs/code-server/issues/6532)) ([c285b99](https://github.com/rudderlabs/code-server/commit/c285b99c74fef6b675a2d6dbd78718b49794fff1))
* bump eslint from 8.53.0 to 8.57.0 ([#6776](https://github.com/rudderlabs/code-server/issues/6776)) ([264e023](https://github.com/rudderlabs/code-server/commit/264e023ab83c639dfd2128807668a0c04cfbda05))
* bump eslint from 9.12.0 to 9.13.0 ([#7063](https://github.com/rudderlabs/code-server/issues/7063)) ([2ade2af](https://github.com/rudderlabs/code-server/commit/2ade2afdc75fe6cae32d00915786b4d003a940ae))
* bump eslint from 9.13.0 to 9.23.0 ([#7291](https://github.com/rudderlabs/code-server/issues/7291)) ([cd4d1b6](https://github.com/rudderlabs/code-server/commit/cd4d1b614d0f9c478e9d70709346101593971a7a))
* bump eslint from 9.23.0 to 9.25.1 ([#7332](https://github.com/rudderlabs/code-server/issues/7332)) ([8b55b50](https://github.com/rudderlabs/code-server/commit/8b55b5003dc79dcefc679878d647606c8575cd84))
* bump eslint-config-prettier from 9.0.0 to 9.1.0 ([#6648](https://github.com/rudderlabs/code-server/issues/6648)) ([84ca272](https://github.com/rudderlabs/code-server/commit/84ca27278b68150e22d25ec9183a4835239b6e44))
* bump eslint-import-resolver-typescript from 3.6.3 to 3.8.3 ([#7240](https://github.com/rudderlabs/code-server/issues/7240)) ([fd761b4](https://github.com/rudderlabs/code-server/commit/fd761b4e8bbaf7da21221bf1df61089617ca9ad6))
* bump eslint-plugin-import from 2.27.5 to 2.28.0 ([#6363](https://github.com/rudderlabs/code-server/issues/6363)) ([97aeb77](https://github.com/rudderlabs/code-server/commit/97aeb77abe3afa186ba5eba2b220a44ba113cdb6))
* bump eslint-plugin-import from 2.28.1 to 2.29.0 ([#6507](https://github.com/rudderlabs/code-server/issues/6507)) ([22c54c3](https://github.com/rudderlabs/code-server/commit/22c54c3b2e37edf5d5908f5816fd035c807a7eaf))
* bump eslint-plugin-prettier from 5.0.0 to 5.1.3 ([#6649](https://github.com/rudderlabs/code-server/issues/6649)) ([b63fda4](https://github.com/rudderlabs/code-server/commit/b63fda4bf79a14be909083cce9b4c47de73eff47))
* bump eslint-plugin-prettier from 5.1.3 to 5.2.1 ([#6927](https://github.com/rudderlabs/code-server/issues/6927)) ([639a005](https://github.com/rudderlabs/code-server/commit/639a0058678dafa41183ac42a86ffed6db7eccc0))
* bump follow-redirects from 1.15.3 to 1.15.4 ([#6624](https://github.com/rudderlabs/code-server/issues/6624)) ([e87499c](https://github.com/rudderlabs/code-server/commit/e87499c301edc82b4cfe8818509ee0258b194f77))
* bump follow-redirects from 1.15.4 to 1.15.6 ([#6725](https://github.com/rudderlabs/code-server/issues/6725)) ([30d343c](https://github.com/rudderlabs/code-server/commit/30d343c0bd10587de6d59ce72a1f37dd1a9d91d8))
* bump github/codeql-action from 2 to 3 ([#6653](https://github.com/rudderlabs/code-server/issues/6653)) ([2db0184](https://github.com/rudderlabs/code-server/commit/2db0184c4a2d8123df73a29cc50740feed914668))
* bump globals from 15.10.0 to 15.14.0 ([#7146](https://github.com/rudderlabs/code-server/issues/7146)) ([ef713bd](https://github.com/rudderlabs/code-server/commit/ef713bde58bb1df096220158091211e9e839484b))
* bump globals from 15.14.0 to 16.0.0 ([#7333](https://github.com/rudderlabs/code-server/issues/7333)) ([35e78fe](https://github.com/rudderlabs/code-server/commit/35e78fe35b61dc9965305ccf19566aed426521ed))
* bump heyhusen/archlinux-package-action from 2.2.1 to 2.4.0 ([#7362](https://github.com/rudderlabs/code-server/issues/7362)) ([a56769b](https://github.com/rudderlabs/code-server/commit/a56769b2c3f8d8af5ba7cf4c83284b66951c22e7))
* bump i18next from 22.4.6 to 22.5.1 ([#6261](https://github.com/rudderlabs/code-server/issues/6261)) ([73d42f7](https://github.com/rudderlabs/code-server/commit/73d42f7ea06275f5c587578b65d9e9a870f1bdd9))
* bump i18next from 22.5.1 to 23.2.11 ([#6326](https://github.com/rudderlabs/code-server/issues/6326)) ([daac46b](https://github.com/rudderlabs/code-server/commit/daac46b3cf5901466410ec7df4eabfb0d9ab384a))
* bump i18next from 23.10.1 to 23.11.3 ([#6778](https://github.com/rudderlabs/code-server/issues/6778)) ([6757907](https://github.com/rudderlabs/code-server/commit/6757907c8ba1840e9df3d91718e871de22c7602e))
* bump i18next from 23.11.3 to 23.12.2 ([#6926](https://github.com/rudderlabs/code-server/issues/6926)) ([907e583](https://github.com/rudderlabs/code-server/commit/907e58330982a8c8d0cb42b76e67a1623614ad6d))
* bump i18next from 23.12.2 to 23.14.0 ([#6974](https://github.com/rudderlabs/code-server/issues/6974)) ([8dbfe22](https://github.com/rudderlabs/code-server/commit/8dbfe2273b8d3e15d483f6d6041e5961b97198bd))
* bump i18next from 23.14.0 to 23.15.1 ([#7019](https://github.com/rudderlabs/code-server/issues/7019)) ([aea7ba2](https://github.com/rudderlabs/code-server/commit/aea7ba2a510c673a77b4e72743598cb7b48e4fac))
* bump i18next from 23.15.1 to 23.16.4 ([#7061](https://github.com/rudderlabs/code-server/issues/7061)) ([b7398ba](https://github.com/rudderlabs/code-server/commit/b7398bad112626f4dd0a476b61a1b1406b931494))
* bump i18next from 23.16.4 to 25.3.0 ([#7406](https://github.com/rudderlabs/code-server/issues/7406)) ([bbe1b7f](https://github.com/rudderlabs/code-server/commit/bbe1b7fecbca6f3ed2401d3b10232f9c0cf340a0))
* bump i18next from 23.2.11 to 23.4.1 ([#6362](https://github.com/rudderlabs/code-server/issues/6362)) ([291682e](https://github.com/rudderlabs/code-server/commit/291682e1c0ef545e89945741f7f05953bd83e9d9))
* bump i18next from 23.5.1 to 23.6.0 ([#6508](https://github.com/rudderlabs/code-server/issues/6508)) ([3a0f4a2](https://github.com/rudderlabs/code-server/commit/3a0f4a277363180aa069bcd511a5050e7780cda9))
* bump i18next from 23.5.1 to 23.7.6 ([#6531](https://github.com/rudderlabs/code-server/issues/6531)) ([f64bc02](https://github.com/rudderlabs/code-server/commit/f64bc022e9bb2a4e41c35e5ee87251bc86f2410a))
* bump i18next from 23.7.6 to 23.8.2 ([#6645](https://github.com/rudderlabs/code-server/issues/6645)) ([1471a15](https://github.com/rudderlabs/code-server/commit/1471a152ffe395e63da1001fa7b47e16e3a2f376))
* bump i18next from 23.8.2 to 23.10.1 ([#6738](https://github.com/rudderlabs/code-server/issues/6738)) ([93f9dfc](https://github.com/rudderlabs/code-server/commit/93f9dfcb1d5579c22467f72da07073437d8284c8))
* bump ip from 1.1.5 to 1.1.9 in /test ([#6682](https://github.com/rudderlabs/code-server/issues/6682)) ([7561141](https://github.com/rudderlabs/code-server/commit/75611411b45f25f2b15e9e0986a71e645a147dfd))
* bump ip from 1.1.8 to 1.1.9 ([#6681](https://github.com/rudderlabs/code-server/issues/6681)) ([1e5666b](https://github.com/rudderlabs/code-server/commit/1e5666b68eb6017fae2c181d882daa86b14f34ef))
* bump mcp 0.6.0 ([#38](https://github.com/rudderlabs/code-server/issues/38)) ([3bd6f60](https://github.com/rudderlabs/code-server/commit/3bd6f60a3bc89afcfd773bfc62326be02167dcae))
* bump micromatch from 4.0.4 to 4.0.8 in /test ([#6963](https://github.com/rudderlabs/code-server/issues/6963)) ([50c6abf](https://github.com/rudderlabs/code-server/commit/50c6abf3a882e35ca96b954f4e6ed8c26f41a024))
* bump micromatch from 4.0.5 to 4.0.8 ([#6962](https://github.com/rudderlabs/code-server/issues/6962)) ([534a186](https://github.com/rudderlabs/code-server/commit/534a1866e5a0a550bf529bf58fc3cba5fdf1dcc1))
* bump prettier from 3.0.3 to 3.1.1 ([#6615](https://github.com/rudderlabs/code-server/issues/6615)) ([c1be39a](https://github.com/rudderlabs/code-server/commit/c1be39abc76b532dc9474d54246d8c7e0a284204))
* bump prettier from 3.1.1 to 3.2.4 ([#6647](https://github.com/rudderlabs/code-server/issues/6647)) ([2a55212](https://github.com/rudderlabs/code-server/commit/2a55212027a12d3d0089c92b5efa9e7e26a3c4a6))
* bump prettier from 3.2.4 to 3.3.2 ([#6878](https://github.com/rudderlabs/code-server/issues/6878)) ([8accfcc](https://github.com/rudderlabs/code-server/commit/8accfcc8ecdeda3697fe2832e84c2458b43df6b7))
* bump prettier-plugin-sh from 0.13.1 to 0.14.0 ([#6700](https://github.com/rudderlabs/code-server/issues/6700)) ([9f2c776](https://github.com/rudderlabs/code-server/commit/9f2c776a7799eb5d0443a6c33bb1878895edaa43))
* bump profiles mcp to 0.2.0 ([#19](https://github.com/rudderlabs/code-server/issues/19)) ([8d3dbf4](https://github.com/rudderlabs/code-server/commit/8d3dbf40308556e2799f20853c4227b8d27d24d5))
* bump profiles mcp to 0.9.0 ([#104](https://github.com/rudderlabs/code-server/issues/104)) ([be6d402](https://github.com/rudderlabs/code-server/commit/be6d402fa752ac5ed1f519626891786103355dc8))
* bump proxy-agent from 5.0.0 to 6.2.1 ([#6247](https://github.com/rudderlabs/code-server/issues/6247)) ([fdeaba9](https://github.com/rudderlabs/code-server/commit/fdeaba9581dd42ff3720dbf11153a3b33e78a028))
* bump proxy-agent from 6.2.1 to 6.3.0 ([#6361](https://github.com/rudderlabs/code-server/issues/6361)) ([76fd238](https://github.com/rudderlabs/code-server/commit/76fd2389e470876cf207557a023bdc5a4f7b8fb8))
* bump proxy-agent from 6.3.1 to 6.4.0 ([#6702](https://github.com/rudderlabs/code-server/issues/6702)) ([4c4c566](https://github.com/rudderlabs/code-server/commit/4c4c566d86f02440a80459d2f5c088827a932d2b))
* bump proxy-agent from 6.4.0 to 6.5.0 ([#7294](https://github.com/rudderlabs/code-server/issues/7294)) ([cb29e65](https://github.com/rudderlabs/code-server/commit/cb29e6598244a571fbae22c9d6cdbf6933ab16b2))
* bump qs from 6.12.1 to 6.13.0 ([#6973](https://github.com/rudderlabs/code-server/issues/6973)) ([e05a3f4](https://github.com/rudderlabs/code-server/commit/e05a3f4ce23fbf2fa81e7ad3a888e53dbda0cc26))
* bump qs from 6.13.0 to 6.14.0 ([#7363](https://github.com/rudderlabs/code-server/issues/7363)) ([74cc50d](https://github.com/rudderlabs/code-server/commit/74cc50d5e6b6a15d4a6037035f348c9ddb991d1b))
* bump robinraju/release-downloader from 1.10 to 1.11 ([#6875](https://github.com/rudderlabs/code-server/issues/6875)) ([97bcc3b](https://github.com/rudderlabs/code-server/commit/97bcc3b9347d77849fa3d405d106b624d8689719))
* bump robinraju/release-downloader from 1.11 to 1.12 ([#7289](https://github.com/rudderlabs/code-server/issues/7289)) ([9045919](https://github.com/rudderlabs/code-server/commit/9045919d2b7bf1e577fe1180a6c99366b722a0da))
* bump robinraju/release-downloader from 1.8 to 1.9 ([#6651](https://github.com/rudderlabs/code-server/issues/6651)) ([53b0fda](https://github.com/rudderlabs/code-server/commit/53b0fda5107e18a546372ae2d70fc066df020b92))
* bump robinraju/release-downloader from 1.9 to 1.10 ([#6779](https://github.com/rudderlabs/code-server/issues/6779)) ([2adb215](https://github.com/rudderlabs/code-server/commit/2adb215d03bf19532724408f95e95a8267897264))
* bump rotating-file-stream from 3.1.1 to 3.2.1 ([#6704](https://github.com/rudderlabs/code-server/issues/6704)) ([720d14d](https://github.com/rudderlabs/code-server/commit/720d14db3e5f531c902f12f2bb874caa8d0c39ab))
* bump semver and @types/semver ([#6777](https://github.com/rudderlabs/code-server/issues/6777)) ([ea815df](https://github.com/rudderlabs/code-server/commit/ea815df22dc98720e8b8aca0db156d8cfddca31f))
* bump semver from 6.3.0 to 6.3.1 in /test ([#6320](https://github.com/rudderlabs/code-server/issues/6320)) ([070a5a3](https://github.com/rudderlabs/code-server/commit/070a5a3179fe8213102854bcb37607bda690358f))
* bump semver from 7.3.8 to 7.5.2 ([#6287](https://github.com/rudderlabs/code-server/issues/6287)) ([90a4147](https://github.com/rudderlabs/code-server/commit/90a41473810d4ce93461ea2a681309f6da27bced))
* bump semver from 7.6.3 to 7.7.1 ([#7238](https://github.com/rudderlabs/code-server/issues/7238)) ([0db3cbe](https://github.com/rudderlabs/code-server/commit/0db3cbe4e7c25915b449029d589aed07844dbe9f))
* bump softprops/action-gh-release from 1 to 2 ([#6740](https://github.com/rudderlabs/code-server/issues/6740)) ([1abb2ee](https://github.com/rudderlabs/code-server/commit/1abb2ee567d8081d9e8935e1193b2e31f0d8e834))
* bump tar from 6.1.11 to 6.2.1 in /test ([#6752](https://github.com/rudderlabs/code-server/issues/6752)) ([4bc9956](https://github.com/rudderlabs/code-server/commit/4bc9956537f5f381bfff74ba23e920f5520ec847))
* bump tar from 6.2.0 to 6.2.1 ([#6753](https://github.com/rudderlabs/code-server/issues/6753)) ([f81fe30](https://github.com/rudderlabs/code-server/commit/f81fe3030a1020a8de503c123215f0d941d9c177))
* bump tj-actions/changed-files from 36 to 37 ([#6302](https://github.com/rudderlabs/code-server/issues/6302)) ([2617623](https://github.com/rudderlabs/code-server/commit/2617623ed6149aaa9beae10959f7d510af5103f7))
* bump tj-actions/changed-files from 37 to 38 ([#6417](https://github.com/rudderlabs/code-server/issues/6417)) ([2e29c23](https://github.com/rudderlabs/code-server/commit/2e29c233ea8a6b5cda9f26a134fbcb8dcff31da9))
* bump tj-actions/changed-files from 38 to 39 ([#6460](https://github.com/rudderlabs/code-server/issues/6460)) ([512d97f](https://github.com/rudderlabs/code-server/commit/512d97f22fa3329c1edbdc1b3c9f893795564093))
* bump tj-actions/changed-files from 39 to 40 ([#6515](https://github.com/rudderlabs/code-server/issues/6515)) ([91f8ec6](https://github.com/rudderlabs/code-server/commit/91f8ec629553f82918e0499beacc9b2d2cf3116f))
* bump tj-actions/changed-files from 40 to 41 in /.github/workflows ([#6618](https://github.com/rudderlabs/code-server/issues/6618)) ([5214555](https://github.com/rudderlabs/code-server/commit/5214555683f5f3eb50cbe009613be8d99d0f1981))
* bump tj-actions/changed-files from 41 to 42 ([#6654](https://github.com/rudderlabs/code-server/issues/6654)) ([dd9cefa](https://github.com/rudderlabs/code-server/commit/dd9cefab664ae1b03385e73033ada72c0d583f23))
* bump tj-actions/changed-files from 42 to 44 ([#6741](https://github.com/rudderlabs/code-server/issues/6741)) ([1c5bfee](https://github.com/rudderlabs/code-server/commit/1c5bfeeb99743a98507a0b9c837b8f735994c341))
* bump tj-actions/changed-files from 44 to 45 ([#6972](https://github.com/rudderlabs/code-server/issues/6972)) ([90f8135](https://github.com/rudderlabs/code-server/commit/90f8135c689a481f7def9c59318a6f938576ee20))
* bump tough-cookie from 4.0.0 to 4.1.3 in /test ([#6318](https://github.com/rudderlabs/code-server/issues/6318)) ([7926647](https://github.com/rudderlabs/code-server/commit/79266470587d2a2299c8765a211ab90705623389))
* bump typescript from 5.0.4 to 5.1.6 ([#6297](https://github.com/rudderlabs/code-server/issues/6297)) ([7f024ed](https://github.com/rudderlabs/code-server/commit/7f024eda6e1fee5310c702bc1a8a7eda3edc192a))
* bump typescript from 5.2.2 to 5.3.3 ([#6616](https://github.com/rudderlabs/code-server/issues/6616)) ([871030e](https://github.com/rudderlabs/code-server/commit/871030e9978a1042d7e96203680952dcbe09601c))
* bump typescript from 5.3.3 to 5.4.3 ([#6736](https://github.com/rudderlabs/code-server/issues/6736)) ([71780f6](https://github.com/rudderlabs/code-server/commit/71780f6f00ebf611fa6b3a8d49f0cab3041fdc62))
* bump typescript from 5.4.3 to 5.5.2 ([#6873](https://github.com/rudderlabs/code-server/issues/6873)) ([2e098a2](https://github.com/rudderlabs/code-server/commit/2e098a2b901f8603e70613b1af62c5a0875f5894))
* bump typescript from 5.5.2 to 5.6.2 ([#7021](https://github.com/rudderlabs/code-server/issues/7021)) ([a0c2780](https://github.com/rudderlabs/code-server/commit/a0c2780c50f5bb08eb03ed24a80c7f9ee514fa63))
* bump typescript from 5.6.2 to 5.8.3 ([#7335](https://github.com/rudderlabs/code-server/issues/7335)) ([85ee441](https://github.com/rudderlabs/code-server/commit/85ee441006cb5557965be7d348d39d2a3a76bd54))
* bump typescript-eslint from 8.12.2 to 8.29.0 ([#7290](https://github.com/rudderlabs/code-server/issues/7290)) ([5051c0f](https://github.com/rudderlabs/code-server/commit/5051c0f9e4ed3cd243299278d57ba852af57872b))
* bump typescript-eslint from 8.29.0 to 8.33.0 ([#7365](https://github.com/rudderlabs/code-server/issues/7365)) ([37357b0](https://github.com/rudderlabs/code-server/commit/37357b014235eb4d1b45df60f34eb81a66896d7a))
* bump typescript-eslint from 8.8.0 to 8.12.2 ([#7062](https://github.com/rudderlabs/code-server/issues/7062)) ([8194dbf](https://github.com/rudderlabs/code-server/commit/8194dbf5bc46ef50da7b7458f3dfef416a2f0370))
* bump word-wrap from 1.2.3 to 1.2.4 ([#6342](https://github.com/rudderlabs/code-server/issues/6342)) ([1befd37](https://github.com/rudderlabs/code-server/commit/1befd373100dc36722eac6c62b3b1c62c5ea2c55))
* bump word-wrap from 1.2.3 to 1.2.4 in /test ([#6343](https://github.com/rudderlabs/code-server/issues/6343)) ([2b3b5e7](https://github.com/rudderlabs/code-server/commit/2b3b5e70513a728bab941832f584be3302990705))
* bump ws and @types/ws ([#6775](https://github.com/rudderlabs/code-server/issues/6775)) ([b8cdab2](https://github.com/rudderlabs/code-server/commit/b8cdab2184998f47a7cff3623443ef74976678e9))
* bump ws and @types/ws ([#6925](https://github.com/rudderlabs/code-server/issues/6925)) ([e05d880](https://github.com/rudderlabs/code-server/commit/e05d88007f0d8a8a14a371d070c5dd3b29582137))
* bump ws from 7.5.6 to 7.5.10 in /test ([#6845](https://github.com/rudderlabs/code-server/issues/6845)) ([93f31e6](https://github.com/rudderlabs/code-server/commit/93f31e6a74a43e39bd45fb4477dbda54f8c440d8))
* bump ws from 8.17.0 to 8.17.1 ([#6851](https://github.com/rudderlabs/code-server/issues/6851)) ([603e467](https://github.com/rudderlabs/code-server/commit/603e467f3815999b0a26600222c399b325593faf))
* change runner ([#83](https://github.com/rudderlabs/code-server/issues/83)) ([36a650e](https://github.com/rudderlabs/code-server/commit/36a650e831128a6913fbb3df71b2e8dd777a9e9c))
* claude 4 5 1m default model ([#36](https://github.com/rudderlabs/code-server/issues/36)) ([8067c0d](https://github.com/rudderlabs/code-server/commit/8067c0db78bdfad65740dd210073fc783222282b))
* cleanup ([1584051](https://github.com/rudderlabs/code-server/commit/158405194372d2dca604f7dd3ebee65daaa2f983))
* cline ux improv1 ([#42](https://github.com/rudderlabs/code-server/issues/42)) ([257074f](https://github.com/rudderlabs/code-server/commit/257074f2b92d35e3d1619a43bb30d8f6930e254f))
* cline with bedrock support ([#56](https://github.com/rudderlabs/code-server/issues/56)) ([ee1108d](https://github.com/rudderlabs/code-server/commit/ee1108d45e5154f434c14f2dc9208322e69a3ee0))
* clinerule to avoid directory creation ([#18](https://github.com/rudderlabs/code-server/issues/18)) ([5816ab2](https://github.com/rudderlabs/code-server/commit/5816ab2c16c2b69ac1881130813cc04353036001))
* consolidate Python dependencies into requirements.txt ([#46](https://github.com/rudderlabs/code-server/issues/46)) ([0a21720](https://github.com/rudderlabs/code-server/commit/0a21720ad5f1114e71985b4e3998473e1438257b))
* disable welcome screen ([#43](https://github.com/rudderlabs/code-server/issues/43)) ([7b83dda](https://github.com/rudderlabs/code-server/commit/7b83dda3a5a4b758e3a802b8f25f66fd37b5b296))
* docker build ([#9](https://github.com/rudderlabs/code-server/issues/9)) ([8931e12](https://github.com/rudderlabs/code-server/commit/8931e12deebe75ec5508d199c23a7d6fd2391a1b))
* format code to prettier 3.4.2 ([9b0340a](https://github.com/rudderlabs/code-server/commit/9b0340a09276f93c054d705d1b9a5f24cc5dbc97))
* hide old rudderstack plugin ([#86](https://github.com/rudderlabs/code-server/issues/86)) ([28750d5](https://github.com/rudderlabs/code-server/commit/28750d57be9d1920a539622298fa4613c9b3b428))
* hide welcome msgs 1 ([#37](https://github.com/rudderlabs/code-server/issues/37)) ([48d5979](https://github.com/rudderlabs/code-server/commit/48d59792aaf077e332ec96974f139b79c8860b52))
* ignore prettier 3.4.2 code format commit ([8f00c2e](https://github.com/rudderlabs/code-server/commit/8f00c2e2893a770c3c2983efe244b5abcccddf9e))
* improve communication style in clinerules.md ([92e440f](https://github.com/rudderlabs/code-server/commit/92e440f1daf4b7598e400b2fc6cc4373d05b7dd5))
* improve communication style in clinerules.md ([7a7f093](https://github.com/rudderlabs/code-server/commit/7a7f093c766047807e8617657df0d325d8a90775))
* introduce versioning for images ([#20](https://github.com/rudderlabs/code-server/issues/20)) ([2a36d57](https://github.com/rudderlabs/code-server/commit/2a36d57efed2a40f7550bd1453acc96622c1c579))
* multi-arch docker build ([b9bbcd0](https://github.com/rudderlabs/code-server/commit/b9bbcd0160bba683365cfc2b316ed2e8987de637))
* pin gha versions ([#2](https://github.com/rudderlabs/code-server/issues/2)) ([57a8af8](https://github.com/rudderlabs/code-server/commit/57a8af8b4c69dca10d7c4c64014a9114d93c2385))
* pin peter-evans/create-pull-request to v5.0.3 ([#69](https://github.com/rudderlabs/code-server/issues/69)) ([755ce91](https://github.com/rudderlabs/code-server/commit/755ce9111384bfdadf60e32ac01cce604ef1cbb0))
* pin prettier to version 3.4.2 ([99e1f63](https://github.com/rudderlabs/code-server/commit/99e1f63d76d124abd04d0af2e83423d24452ea4b))
* pin profiles mcp version to v0.1.0 ([#15](https://github.com/rudderlabs/code-server/issues/15)) ([9510ea6](https://github.com/rudderlabs/code-server/commit/9510ea6d80973c4d9590fda52327230612e67de3))
* prevent cline from reading siteconfig ([#17](https://github.com/rudderlabs/code-server/issues/17)) ([e429ed5](https://github.com/rudderlabs/code-server/commit/e429ed5f53c1d42a4751218923d6704c5d4249d3))
* profiles-mcp-bump-0-3-0 ([#22](https://github.com/rudderlabs/code-server/issues/22)) ([d0734f7](https://github.com/rudderlabs/code-server/commit/d0734f7c830fdc1ce97f98f5bea196b2d87573da))
* profiles-mcp-bump-0-4-0 ([#23](https://github.com/rudderlabs/code-server/issues/23)) ([a955478](https://github.com/rudderlabs/code-server/commit/a9554789b4025e4e1bfc1aa5dc329f8349cf3664))
* release 1.4.0 ([#113](https://github.com/rudderlabs/code-server/issues/113)) ([ac22fa7](https://github.com/rudderlabs/code-server/commit/ac22fa73c8602586fddcf5b039e3a8625b632e29))
* remove account icon ([#65](https://github.com/rudderlabs/code-server/issues/65)) ([8c88456](https://github.com/rudderlabs/code-server/commit/8c884568aef8245265416d2659e9819b92e5c14e))
* remove check updates ([#51](https://github.com/rudderlabs/code-server/issues/51)) ([cabda6b](https://github.com/rudderlabs/code-server/commit/cabda6b98c735a79981f9c89b1d9c3a43b3893ba))
* remove coder references ([#12](https://github.com/rudderlabs/code-server/issues/12)) ([4445c62](https://github.com/rudderlabs/code-server/commit/4445c620dda16846fb0776f314fc52328da79bb8))
* remove run debug icons ([#57](https://github.com/rudderlabs/code-server/issues/57)) ([614b471](https://github.com/rudderlabs/code-server/commit/614b471143d3851527c72f79d2ebffa0236d5a44))
* remove VSIX verification step from update workflow ([#70](https://github.com/rudderlabs/code-server/issues/70)) ([c7b6a4e](https://github.com/rudderlabs/code-server/commit/c7b6a4e7fac96c75880d372b3b9093df2def8068))
* rename build docker legacy action name ([#89](https://github.com/rudderlabs/code-server/issues/89)) ([1584051](https://github.com/rudderlabs/code-server/commit/158405194372d2dca604f7dd3ebee65daaa2f983))
* replace GITHUB_TOKEN with PAT ([#8](https://github.com/rudderlabs/code-server/issues/8)) ([dc75cf3](https://github.com/rudderlabs/code-server/commit/dc75cf33393b3720a0b0e27e33ddeea0abbdc649))
* trigger build ([#10](https://github.com/rudderlabs/code-server/issues/10)) ([6bb0229](https://github.com/rudderlabs/code-server/commit/6bb02297194290b6b6a8a81251e85dd12c92dd1e))
* typo ([#84](https://github.com/rudderlabs/code-server/issues/84)) ([57aa214](https://github.com/rudderlabs/code-server/commit/57aa21441f24f20b860479eeccce2996b06216b2))
* update .dockerignore ([#48](https://github.com/rudderlabs/code-server/issues/48)) ([244415e](https://github.com/rudderlabs/code-server/commit/244415e98cebcec521604ef1ff73c1e895632b25))
* update .env file to include IS_CLOUD_BASED variable ([#16](https://github.com/rudderlabs/code-server/issues/16)) ([8ea64a4](https://github.com/rudderlabs/code-server/commit/8ea64a4c5d0ed29bf1b1b0cb6a24b1fbf0b843e9))
* update and fixed prettier to 3.4.2 ([ccded68](https://github.com/rudderlabs/code-server/commit/ccded68cd4d4e111b0685b50fc24aec36a4b09d3))
* update Cline to 6.0.6 ([#73](https://github.com/rudderlabs/code-server/issues/73)) ([a82660e](https://github.com/rudderlabs/code-server/commit/a82660e8e386a807614bf15b96c559cd485dec99))
* update Cline to 6.1.1 ([#78](https://github.com/rudderlabs/code-server/issues/78)) ([957c19a](https://github.com/rudderlabs/code-server/commit/957c19aa317ecb11093c8e5206777c5a2a6496e5))
* update Cline to 6.2.0 ([#90](https://github.com/rudderlabs/code-server/issues/90)) ([19d423a](https://github.com/rudderlabs/code-server/commit/19d423ad1805ee349d7ed44fc7d1d4b0ab7b3e86))
* update Cline to 6.3.0 ([#92](https://github.com/rudderlabs/code-server/issues/92)) ([ceedd02](https://github.com/rudderlabs/code-server/commit/ceedd02f3e8fad1fb168d4e3ec2dcf3b99b28dd9))
* update Cline to 6.4.0 ([#96](https://github.com/rudderlabs/code-server/issues/96)) ([559ed88](https://github.com/rudderlabs/code-server/commit/559ed8888be3d22987ff0b3bf2788b06dd015985))
* update Cline to 6.5.0 ([#98](https://github.com/rudderlabs/code-server/issues/98)) ([d62399f](https://github.com/rudderlabs/code-server/commit/d62399fb1e2194c3f574cbfa0abb7aeb63834de9))
* update Cline to 6.6.0 ([#101](https://github.com/rudderlabs/code-server/issues/101)) ([2ebb130](https://github.com/rudderlabs/code-server/commit/2ebb130fcba1d810ec711bccd6b8e05a8f73db7d))
* update Cline to 6.7.0 ([#105](https://github.com/rudderlabs/code-server/issues/105)) ([6a29c05](https://github.com/rudderlabs/code-server/commit/6a29c057cb61f33a0df873d05d0587c129c03945))
* update Cline to 6.7.1 ([#116](https://github.com/rudderlabs/code-server/issues/116)) ([b648f90](https://github.com/rudderlabs/code-server/commit/b648f909a62c5517e351c2012d639d2f2b44e793))
* update Cline to 6.8.0 ([#117](https://github.com/rudderlabs/code-server/issues/117)) ([e2825a0](https://github.com/rudderlabs/code-server/commit/e2825a0b9f80807db66d293c68ae31a0e935037c))
* update code server image to 0.7.0 ([#95](https://github.com/rudderlabs/code-server/issues/95)) ([7a26ad8](https://github.com/rudderlabs/code-server/commit/7a26ad8960a141eb3bd8194fcd95e209990f347c))
* update code-server installation to version 1.0.0 ([#102](https://github.com/rudderlabs/code-server/issues/102)) ([da66af4](https://github.com/rudderlabs/code-server/commit/da66af43288cab842db855c8e700b1459b423b22))
* update code-server version to 0.5.0 ([#68](https://github.com/rudderlabs/code-server/issues/68)) ([14d27f4](https://github.com/rudderlabs/code-server/commit/14d27f4f825c2c05abdb293763678640ef7e3782))
* update deb package versions ([#76](https://github.com/rudderlabs/code-server/issues/76)) ([8e89a72](https://github.com/rudderlabs/code-server/commit/8e89a72ec9883971c60fd7f88acb4721b8e586dc))
* update docker version ([#108](https://github.com/rudderlabs/code-server/issues/108)) ([ee3a204](https://github.com/rudderlabs/code-server/commit/ee3a2040a0668cdd372f60599676e6d2167d82af))
* update dockerfile - code-server 0.4.0 ([#63](https://github.com/rudderlabs/code-server/issues/63)) ([9c2679a](https://github.com/rudderlabs/code-server/commit/9c2679a0516ec6e6a60ef44c863ff12ef063c904))
* update mcp config ([#118](https://github.com/rudderlabs/code-server/issues/118)) ([da83fa3](https://github.com/rudderlabs/code-server/commit/da83fa331eafe3d1967bcc6a4abfa9278ca1d75f))
* update profiles-mcp to 0.8.0 ([#93](https://github.com/rudderlabs/code-server/issues/93)) ([19fd5e2](https://github.com/rudderlabs/code-server/commit/19fd5e27b8733cde9f2b8b1df697b6c3751aeb88))
* update release runid ([#94](https://github.com/rudderlabs/code-server/issues/94)) ([325073e](https://github.com/rudderlabs/code-server/commit/325073e19bd0f7d851290d1d11692230e6a28c71))
* update run-id v0.4.0 ([#62](https://github.com/rudderlabs/code-server/issues/62)) ([03907a7](https://github.com/rudderlabs/code-server/commit/03907a7faed8d90dc78e51b0659c2baba7c20bc2))
* update runid ([#81](https://github.com/rudderlabs/code-server/issues/81)) ([8d3b769](https://github.com/rudderlabs/code-server/commit/8d3b769040c57d145211c965ad0d62043e24b28a))
* update runid ([#82](https://github.com/rudderlabs/code-server/issues/82)) ([18351f9](https://github.com/rudderlabs/code-server/commit/18351f9ade0e4f3abbdb37924208f617d8374759))
* update runids 1.2.0 ([#106](https://github.com/rudderlabs/code-server/issues/106)) ([c7af130](https://github.com/rudderlabs/code-server/commit/c7af1304d22323dd66e61f52b7673bc91cc57055))
* vsix bedrock ([#61](https://github.com/rudderlabs/code-server/issues/61)) ([01cace4](https://github.com/rudderlabs/code-server/commit/01cace48745d6dac546639a6f4749c3c59f36c82))

## [9.99.999] - 9090-09-09

Code v99.99.999

### Changed
### Added
### Deprecated
### Removed
### Fixed
### Security

-->

## Unreleased

## [4.102.1](https://github.com/coder/code-server/releases/tag/v4.102.1) - 2025-07-17

Code v1.102.1

### Changed

- Update to Code 1.102.1.

## [4.102.0](https://github.com/coder/code-server/releases/tag/v4.102.0) - 2025-07-16

Code v1.102.0

### Changed

- Update to Code 1.102.0.

### Added

- Custom strings can be configured using the `--i18n` flag set to a JSON
  file. This can be used for either translation (and can be used alongside
  `--locale`) or for customizing the strings. See
  [./src/node/i18n/locales/en.json](./src/node/i18n/locales/en.json) for the
  available keys.

## [4.101.2](https://github.com/coder/code-server/releases/tag/v4.101.2) - 2025-06-25

Code v1.101.2

### Changed

- Update to Code 1.101.2.

### Fixed

- Fix web views not loading due to 401 when requesting the service worker.

## [4.101.1](https://github.com/coder/code-server/releases/tag/v4.101.1) - 2025-06-20

Code v1.101.1

### Changed

- Update to Code 1.101.1.

## [4.101.0](https://github.com/coder/code-server/releases/tag/v4.101.0) - 2025-06-20

Code v1.101.0

### Changed

- Update to Code 1.101.0.

## [4.100.3](https://github.com/coder/code-server/releases/tag/v4.100.3) - 2025-06-03

Code v1.100.3

### Changed

- Update to Code 1.100.3.

## [4.100.2](https://github.com/coder/code-server/releases/tag/v4.100.2) - 2025-05-15

Code v1.100.2

### Changed

- Update to Code 1.100.2.

## [4.100.1](https://github.com/coder/code-server/releases/tag/v4.100.1) - 2025-05-13

Code v1.100.1

### Changed

- Update to Code 1.100.1.

## [4.100.0](https://github.com/coder/code-server/releases/tag/v4.100.0) - 2025-05-12

Code v1.100.0

### Added

- Trusted domains for links can now be set at run-time by configuring
  `linkProtectionTrustedDomains` in the `lib/vscode/product.json` file or via
  the `--link-protection-trusted-domains` flag.

### Changed

- Update to Code 1.100.0.
- Disable extension signature verification, which previously was skipped by
  default (the package used for verification is not available to OSS builds of
  VS Code) but now reportedly throws hard errors making it impossible to install
  extensions.

### Fixed

- Flags with repeatable options now work via the config file.

## [4.99.4](https://github.com/coder/code-server/releases/tag/v4.99.4) - 2025-05-02

Code v1.99.3

### Security

- Validate that ports in the path proxy are numbers, to prevent proxying to
  arbitrary domains.

## [4.99.3](https://github.com/coder/code-server/releases/tag/v4.99.3) - 2025-04-17

Code v1.99.3

### Added

- Added `--skip-auth-preflight` flag to let preflight requests through the
  proxy.

### Changed

- Update to Code 1.99.3.

## [4.99.2](https://github.com/coder/code-server/releases/tag/v4.99.2) - 2025-04-10

Code v1.99.2

### Changed

- Update to Code 1.99.2.

## [4.99.1](https://github.com/coder/code-server/releases/tag/v4.99.1) - 2025-04-08

Code v1.99.1

### Changed

- Update to Code 1.99.1.

## [4.99.0](https://github.com/coder/code-server/releases/tag/v4.99.0) - 2025-04-07

Code v1.99.0

### Changed

- Update to Code 1.99.0.

## [4.98.0](https://github.com/coder/code-server/releases/tag/v4.98.0) - 2025-03-07

Code v1.98.0

### Changed

- Update to Code 1.98.0.

## [4.97.2](https://github.com/coder/code-server/releases/tag/v4.96.4) - 2025-02-18

Code v1.97.2

### Added

- Added back macOS amd64 builds.

### Changed

- Update to Code 1.97.2.
- Softened dark mode login page colors.

## [4.96.4](https://github.com/coder/code-server/releases/tag/v4.96.4) - 2025-01-20

Code v1.96.4

### Changed

- Update to Code 1.96.4.

## [4.96.2](https://github.com/coder/code-server/releases/tag/v4.96.2) - 2024-12-20

Code v1.96.2

### Changed

- Update to Code 1.96.2.

## [4.96.1](https://github.com/coder/code-server/releases/tag/v4.96.1) - 2024-12-18

Code v1.96.1

### Added

- Dark color scheme for login and error pages.

### Changed

- Update to Code 1.96.1.

## [4.95.3](https://github.com/coder/code-server/releases/tag/v4.95.3) - 2024-11-18

Code v1.95.3

### Changed

- Update to Code 1.95.3.

## [4.95.2](https://github.com/coder/code-server/releases/tag/v4.95.2) - 2024-11-12

Code v1.95.2

### Changed

- Update to Code 1.95.2.

## [4.95.1](https://github.com/coder/code-server/releases/tag/v4.95.1) - 2024-11-06

Code v1.95.1

### Changed

- Update to Code 1.95.1.

## [4.93.1](https://github.com/coder/code-server/releases/tag/v4.93.1) - 2024-09-23

Code v1.93.1

### Changed

- Updated to Code 1.93.1.

### Added

- Added `--abs-proxy-base-path` flag for when code-server is not at the root.

## [4.92.2](https://github.com/coder/code-server/releases/tag/v4.92.2) - 2024-08-19

Code v1.92.2

### Breaking changes

- Dropped a patch that changed the compile target from es2022 to es2020 because
  it no longer works with the way VS Code uses static properties. This may break
  older browsers, so those browsers will either have to be updated or use an
  older version of code-server.

### Changed

- Updated to Code 1.92.2.

## [4.91.0](https://github.com/coder/code-server/releases/tag/v4.91.0) - 2024-07-10

Code v1.91.0

### Changed

- Updated to Code 1.91.0.

## [4.90.3](https://github.com/coder/code-server/releases/tag/v4.90.3) - 2024-06-21

Code v1.90.2

### Changed

- Updated to Code 1.90.2.

### Fixed

- When the log gets rotated it will no longer incorrectly be moved to a new
  directory created in the current working directory named with a date.
  Instead, the file itself is prepended with the date and kept in the same
  directory, as originally intended.

## [4.90.2](https://github.com/coder/code-server/releases/tag/v4.90.2) - 2024-06-14

Code v1.90.1

### Changed

- Updated to Code 1.90.1.

## [4.90.1](https://github.com/coder/code-server/releases/tag/v4.90.1) - 2024-06-12

Code v1.90.0

### Fixed

- Cache a call to get CPU information used in telemetry that could result in a
  lack responsiveness if it was particularly slow.

## [4.90.0](https://github.com/coder/code-server/releases/tag/v4.90.0) - 2024-06-11

Code v1.90.0

### Changed

- Updated to Code 1.90.0.
- Updated Node to 20.11.1.

### Added

- Send contents to the clipboard in the integrated terminal by piping to
  `code-server --stdin-to-clipboard` or `code-server -c`.

  You may want to make this an alias:

  ```
  alias xclip="code-server --stdin-to-clipboard"
  echo -n "hello world" | xclip
  ```

## [4.89.1](https://github.com/coder/code-server/releases/tag/v4.89.1) - 2024-04-14

Code v1.89.1

### Changed

- Updated to Code 1.89.1.

## [4.89.0](https://github.com/coder/code-server/releases/tag/v4.89.0) - 2024-04-08

Code v1.89.0

### Changed

- Updated to Code 1.89.0.

## [4.23.1](https://github.com/coder/code-server/releases/tag/v4.23.1) - 2024-04-15

Code v1.88.1

### Changed

- Updated to Code 1.88.1.

## [4.23.0](https://github.com/coder/code-server/releases/tag/v4.23.0) - 2024-04-08

Code v1.88.0

### Changed

- Updated to Code 1.88.0.
- Updated Node to 18.18.2.

### Fixed

- Fix masking the exit code when failing to install extensions on the command
  line outside the integrated terminal. Installing extensions inside the
  integrated terminal still masks the exit code and is an upstream bug.

## [4.22.1](https://github.com/coder/code-server/releases/tag/v4.22.1) - 2024-03-14

Code v1.87.2

### Changed

- Updated to Code 1.87.2.
- Enable keep-alive for proxy agent.

## [4.22.0](https://github.com/coder/code-server/releases/tag/v4.22.0) - 2024-03-03

Code v1.87.0

### Changed

- Updated to Code 1.87.0.

## [4.21.2](https://github.com/coder/code-server/releases/tag/v4.21.2) - 2024-02-28

Code v1.86.2

### Changed

- Updated to Code 1.86.2.

## [4.21.1](https://github.com/coder/code-server/releases/tag/v4.21.1) - 2024-02-09

Code v1.86.1

### Changed

- Updated to Code 1.86.1.
- Updated to Node 18.17.1.

### Added

- Docker images for Fedora and openSUSE.

## [4.21.0](https://github.com/coder/code-server/releases/tag/v4.21.0) - 2024-02-05

Code v1.86.0

### Changed

- Updated to Code 1.86.0.

## [4.20.1](https://github.com/coder/code-server/releases/tag/v4.20.1) - 2024-01-22

Code v1.85.2

### Changed

- Updated to Code 1.85.2.

### Fixed

- Query variables are no longer double-encoded when going over the path proxy.

## [4.20.0](https://github.com/coder/code-server/releases/tag/v4.20.0) - 2023-12-21

Code v1.85.1

### Added

- New flag `--disable-file-uploads` to disable uploading files to the remote by
  drag and drop and to disable opening local files via the "show local" button
  in the file open prompt. Note that you can still open local files by drag and
  dropping the file onto the editor pane.
- Added `wget` to the release image.

### Changed

- Updated to Code 1.85.1.
- The `--disable-file-downloads` flag will now disable the "show local" button
  in the file save prompt as well.
- Debian release image updated to use Bookworm.

## [4.19.1](https://github.com/coder/code-server/releases/tag/v4.19.1) - 2023-11-29

Code v1.84.2

### Fixed

- Fixed an issue where parts of the editor would not load (like the file
  explorer, source control, etc) when using a workspace file.

## [4.19.0](https://github.com/coder/code-server/releases/tag/v4.19.0) - 2023-11-18

Code v1.84.2

### Changed

- Updated to Code 1.84.2.

## [4.18.0](https://github.com/coder/code-server/releases/tag/v4.18.0) - 2023-10-20

Code v1.83.1

### Changed

- Updated to Code 1.83.1.

## [4.17.1](https://github.com/coder/code-server/releases/tag/v4.17.1) - 2023-09-29

Code v1.82.2

### Fixed

- Make secret storage persistent. For example, logging in with GitHub should
  persist between browser refreshes and code-server restarts.
- Issues with argon2 on arm builds should be fixed now.

## [4.17.0](https://github.com/coder/code-server/releases/tag/v4.17.0) - 2023-09-22

Code v1.82.2

### Added

- Japanese locale.
- `CODE_SERVER_HOST` environment variable.

### Changed

- Update to Code 1.82.2. This includes an update to Node 18, which also means
  that the minimum glibc is now 2.28. If you need to maintain a lower glibc then
  you can take a version of Node 18 that is compiled with a lower glibc and use
  that to build code-server (or at a minimum rebuild the native modules).
- Display paths to config files in full rather than abbreviated. If you have
  trouble with the password not working please update and make sure the
  displayed config paths are what you expect.

### Fixed

- Fix some dependency issues for the standalone arm64 and armv7l releases. If
  you had issues with missing or failing modules please try these new builds.

## [4.16.1](https://github.com/coder/code-server/releases/tag/v4.16.1) - 2023-07-31

Code v1.80.2

### Changed

- Updated to Code 1.80.2.

## [4.16.0](https://github.com/coder/code-server/releases/tag/v4.16.0) - 2023-07-28

Code v1.80.1

### Added

- `--disable-proxy` flag. This disables the domain and path proxies but it does
  not disable the ports panel in Code. That can be disabled by using
  `remote.autoForwardPorts=false` in your settings.

## [4.15.0](https://github.com/coder/code-server/releases/tag/v4.15.0) - 2023-07-21

Code v1.80.1

### Changed

- Updated to Code 1.80.1.

### Added

- `--trusted-origin` flag for specifying origins that you trust but do not
  control (for example a reverse proxy).

Code v1.79.2

## [4.14.1](https://github.com/coder/code-server/releases/tag/v4.14.1) - 2023-06-26

Code v1.79.2

### Security

- Remove extra write permissions on the Node binary bundled with the linux-amd64
  tarball. If you extract the tar without a umask this could mean the Node
  binary would be unexpectedly writable.

### Fixed

- Inability to launch multiple instances of code-server for different users.

### Added

- `--session-socket` CLI flag to configure the location of the session socket.
  By default it will be placed in `<user data dir>/code-server-ipc.sock`.

## [4.14.0](https://github.com/coder/code-server/releases/tag/v4.14.0) - 2023-06-16

Code v1.79.2

### Added

- `--domain-proxy` now supports `{{port}}` and `{{host}}` template variables.

### Changed

- Updated to Code 1.79.2
- Files opened from an external terminal will now open in the most closely
  related window rather than in the last opened window.

## [4.13.0](https://github.com/coder/code-server/releases/tag/v4.13.0) - 2023-05-19

Code v1.78.2

### Changed

- Updated to Code 1.78.2.

### Fixed

- Proxying files that contain non-ASCII characters.
- Origin check when X-Forwarded-Host contains comma-separated hosts.

## [4.12.0](https://github.com/coder/code-server/releases/tag/v4.12.0) - 2023-04-21

Code v1.77.3

### Changed

- Updated to Code 1.77.3
- Ports panel will use domain-based proxy (instead of the default path-based
  proxy) when set via --proxy-domain.
- Apply --app-name to the PWA title.

### Added

- Thai translation for login page.
- Debug logs around the origin security check. If you are getting forbidden
  errors on web sockets please run code-server with `--log debug` to see why the
  requests are being blocked.

## [4.11.0](https://github.com/coder/code-server/releases/tag/v4.11.0) - 2023-03-16

Code v1.76.1

### Changed

- Updated to Code 1.76.1

## [4.10.1](https://github.com/coder/code-server/releases/tag/v4.10.1) - 2023-03-04

Code v1.75.1

### Security

Added an origin check to web sockets to prevent cross-site hijacking attacks on
users using older or niche browser that do not support SameSite cookies and
attacks across sub-domains that share the same root domain.

The check requires the host header to be set so if you use a reverse proxy
ensure it forwards that information otherwise web sockets will be blocked.

## [4.10.0](https://github.com/coder/code-server/releases/tag/v4.10.0) - 2023-02-15

Code v1.75.1

### Changed

- Updated to Code 1.75.1

### Removed

- Removed `--link` (was deprecated over thirteen months ago in 4.0.1).

## [4.9.1](https://github.com/coder/code-server/releases/tag/v4.9.1) - 2022-12-15

Code v1.73.1

### Changed

- Updated a couple steps in the build and release process to ensure we're using
  `npm` and `yarn` consistently depending on the step.

### Fixed

- Fixed an issue with code-server version not displaying in the Help > About window.
- Fixed terminal not loading on macOS clients.

## [4.9.0](https://github.com/coder/code-server/releases/tag/v4.9.0) - 2022-12-06

Code v1.73.1

### Changed

- Upgraded to Code 1.73.1

### Added

- `/security.txt` added as a route with info on our security policy information thanks to @ghuntley

### Fixed

- Installing on majaro images should now work thanks to @MrPeacockNLB for
  adding the `--noconfirm` flag in `install.sh`

### Known Issues

- `--cert` on Ubuntu 22.04: OpenSSL v3 is used which breaks `pem` meaning the
  `--cert` feature will not work. [Reference](https://github.com/adobe/fetch/pull/318#issuecomment-1306070259)

## [4.8.3](https://github.com/coder/code-server/releases/tag/v4.8.3) - 2022-11-07

Code v1.72.1

### Added

- install script now supports arch-like (i.e. manjaro, endeavourous, etc.)
  architectures

### Changed

- Updated text in the Getting Started page.

## [4.8.2](https://github.com/coder/code-server/releases/tag/v4.8.2) - 2022-11-02

Code v1.72.1

### Added

- New text in the Getting Started page with info about
  `coder/coder`. This is enabled by default but can be disabled by passing the CLI
  flag `--disable-getting-started-override` or setting
  `CS_DISABLE_GETTING_STARTED_OVERRIDE=1` or
  `CS_DISABLE_GETTING_STARTED_OVERRIDE=true`.

## [4.8.1](https://github.com/coder/code-server/releases/tag/v4.8.1) - 2022-10-28

Code v1.72.1

### Fixed

- Fixed CSP error introduced in 4.8.0 that caused issues with webviews and most
  extensions.

## [4.8.0](https://github.com/coder/code-server/releases/tag/v4.8.0) - 2022-10-24

Code v1.72.1

### Added

- Support for the Ports panel which leverages code-server's built-in proxy. It
  also uses `VSCODE_PROXY_URI` where `{{port}}` is replace when forwarding a port.
  Example: `VSCODE_PROXY_URI=https://{{port}}.kyle.dev` would forward an
  application running on localhost:3000 to https://3000.kyle.dev
- Support for `--disable-workspace-trust` CLI flag
- Support for `--goto` flag to open file @ line:column
- Added Ubuntu-based images for Docker releases. If you run into issues with
  `PATH` being overwritten in Docker please try the Ubuntu image as this is a
  problem in the Debian base image.

### Changed

- Updated Code to 1.72.1

### Fixed

- Enabled `BROWSER` environment variable
- Patched `asExternalUri` to work so now extensions run inside code-server can use it

## [4.7.1](https://github.com/coder/code-server/releases/tag/v4.7.1) - 2022-09-30

Code v1.71.2

### Changed

- Updated Code to 1.71.2

### Fixed

- Fixed install script not upgrading code-server when already installed on RPM-based machines
- Fixed install script failing to gain root permissions on FreeBSD

## [4.7.0](https://github.com/coder/code-server/releases/tag/v4.7.0) - 2022-09-09

Code v1.71.0

### Changed

- Updated Code to 1.71.0

### Removed

- Dropped heartbeat patch because it was implemented upstream

### Fixed

- Add flags --unsafe-perm --legacy-peer-deps in `npm-postinstall.sh` which ensures installing with npm works correctly

## [4.6.1](https://github.com/coder/code-server/releases/tag/v4.6.1) - 2022-09-31

Code v1.70.2

### Changed

- Updated Code to 1.70.2
- Updated `argon2` to 0.29.0 which should fix issues on FreeBSD
- Updated docs to suggest using `npm` instead of `yarn`

### Removed

- Dropped database migration patch affected to 4.0.2 versions and earlier.

### Fixed

- Fixed preservation of `process.execArgv` which means you can pass `--prof` to profile code-server

## [4.6.0](https://github.com/coder/code-server/releases/tag/v4.6.0) - 2022-08-17

Code v1.70.1

### Changed

- Updated Code to 1.70.1.

### Added

- Added a heartbeat to sockets. This should prevent them from getting closed by
  reverse proxy timeouts when idle like NGINX's default 60-second timeout.

### Fixed

- Fixed logout option appearing even when authentication is disabled.

## [4.5.2](https://github.com/coder/code-server/releases/tag/v4.5.2) - 2022-08-15

Code v1.68.1

### Security

- Fixed the proxy route not performing authentication. For example if you were
  to run a development HTTP server using `python -m http.server 8000` then it
  would be accessible at `my.domain/proxy/8000/` without any authentication.

  If all of the following apply to you please update as soon as possible:

  - You run code-server with the built-in password authentication.
  - You run unprotected HTTP services on ports accessible by code-server.

### Changed

- Invoking `code-server` in the integrated terminal will now use the script that
  comes with upstream Code. This means flags like `--wait` will be
  automatically supported now. However the upstream script only has the ability
  to interact with the running code-server and cannot spawn new instances. If
  you need to spawn a new code-server from the integrated terminal please
  specify the full path to code-server's usual script (for example
  `/usr/bin/code-server`).

### Fixed

- Invoking `code-server` in the integrated terminal will now work instead of
  erroring about not finding Node.

## [4.5.1](https://github.com/coder/code-server/releases/tag/v4.5.1) - 2022-07-18

Code v1.68.1

### Changed

- We now use `release/v<0.0.0>` for the release branch name so it doesn't
  conflict with the tag name
- Added `.prettierignore` to ignore formatting files in `lib/vscode`

### Added

- Allow more comprehensive affinity config in Helm chart
- Added custom message in Homebrew PR to make sure code-server maintainers are
  tagged
- Allow setting `priorityClassName` via Helm chart
- Added troubleshooting docs to `CONTRIBUTING.md`

### Fixed

- Removed default memory limit which was set via `NODE_OPTIONS`
- Changed output in pipe to make it easier to debug code-server when doing live
  edits
- Fixed display-language patch to use correct path which broke in 4.5.0
- Fixed multiple code-server windows opening when using the code-server CLI in
  the Integrated Terminal
- Fixed Integrated Terminal not working when web base was not the root path

### Security

- Updated `glob-parent` version in dependencies

## [4.5.0](https://github.com/coder/code-server/releases/tag/v4.5.0) - 2022-06-29

Code v1.68.1

### Changed

- Updated codecov to use codecov uploader
- Moved integration tests to Jest
- Fixed docker release to only download .deb
- Upgraded to Code 1.68.1
- Install `nfpm` from GitHub
- Upgraded to TypeScript 4.6

### Added

- Added tests for `open`, `isWsl`, `handlePasswordValidation`
- Provided alternate image registry to dockerhub
- Allowed users to have scripts run on container with `ENTRYPOINTD` environment
  variable

### Fixed

- Fixed open CLI command to work on macOS

## [4.4.0](https://github.com/coder/code-server/releases/tag/v4.4.0) - 2022-05-06

Code v1.66.2

### Changed

- Refactored methods in `Heart` class and made `Heart.beat()` async to make
  testing easier.
- Upgraded to Code 1.66.2.

### Added

- Added back telemetry patch which was removed in the Code reachitecture.
- Added support to use `true` for `CS_DISABLE_FILE_DOWNLOADS` environment
  variable. This means you can disable file downloads by setting
  `CS_DISABLE_FILE_DOWNLOADS` to `true` or `1`.
- Added tests for `Heart` class.

### Fixed

- Fixed installation issue in AUR after LICENSE rename.
- Fixed issue with listening on IPv6 addresses.
- Fixed issue with Docker publish action not being able to find artifacts. Now
  it downloads the release assets from the release.

## [4.3.0](https://github.com/coder/code-server/releases/tag/v4.3.0) - 2022-04-14

Code v1.65.2

### Changed

- Excluded .deb files from release Docker image which drops the compressed and
  uncompressed size by 58% and 34%.
- Upgraded to Code 1.65.2.

### Added

- Added a new CLI flag called `--disable-file-downloads` which allows you to
  disable the "Download..." option that shows in the UI when right-clicking on a
  file. This can also set by running `CS_DISABLE_FILE_DOWNLOADS=1`.
- Aligned the dependencies for binary and npm release artifacts.

### Fixed

- Fixed the code-server version from not displaying in the Help > About dialog.
- Fixed issues with the TypeScript and JavaScript Language Features Extension
  failing to activate.
- Fixed missing files in ipynb extension.
- Fixed the homebrew release workflow.
- Fixed the Docker release workflow from not always publishing version tags.

## [4.2.0](https://github.com/coder/code-server/releases/tag/v4.2.0) - 2022-03-22

Code v1.64.2

### Added

- Added tests for `handleArgsSocketCatchError`, `setDefaults` and
  `optionDescriptions`.

### Changed

- We switched from using the fork `coder/vscode` to a submodule of
  `microsoft/vscode` + patches managed by `quilt` for how Code sits inside the
  code-server codebase.
- Upgraded to Code 1.64.2.

### Fixed

- Update popup notification through `--disable-update-check` is now fixed.
- Fixed PWA icons not loading on iPad
- Fixed the homebrew release process. Our `cdrci` bot should now automatically
  update the version as part of the release pipeline.
- Fixed titleBar color setting being ignored in PWA.

### Security

- Updated to `minimist-list`.
- Updated `cloud-agent` to `v0.2.4` which uses `nhooyr.io/webscoket` `v1.8.7`.

## [4.1.0](https://github.com/coder/code-server/releases/tag/v4.1.0) - 2022-03-03

Code v1.63.0

### Added

- Support for injecting GitHub token into Code so extensions can make use of it.
  This can be done with the `GITHUB_TOKEN` environment variable or `github-auth`
  in the config file.
- New flag `--socket-mode` allows setting the mode (file permissions) of the
  socket created when using `--socket`.
- The version of Code bundled with code-server now appears when using the
  `--version` flag. For example: `4.0.2 5cdfe74686aa73e023f8354a9a6014eb30caa7dd with Code 1.63.0`.
  If you have been parsing this flag for the version you might want to use
  `--version --json` instead as doing that will be more stable.

### Changed

- The workspace or folder passed on the CLI will now use the same redirect
  method that the last opened workspace or folder uses. This means if you use
  something like `code-server /path/to/dir` you will now get a query parameter
  added (like so: `my-domain.tld?folder=/path/to/dir`), making it easier to edit
  by hand and making it consistent with the last opened and menu open behaviors.
- The folder/workspace query parameter no longer has encoded slashes, making
  them more readable and editable by hand. This was only affecting the last
  opened behavior, not opens from the menu.

### Fixed

- Fix web sockets not connecting when using `--cert`.
- Prevent workspace state collisions when opening a workspace that shares the
  same file path with another workspace on a different machine that shares the
  same domain. This was causing files opened in one workspace to be "re-"opened
  in the other workspace when the other workspace is opened.
- Pin the Express version which should make installing from npm work again.
- Propagate signals to code-server in the Docker image which means it should
  stop more quickly and gracefully.
- Fix missing argon binaries in the standalone releases on arm machines.

## [4.0.2](https://github.com/coder/code-server/releases/tag/v4.0.2) - 2022-01-27

Code v1.63.0

### Fixed

- Unset the `BROWSER` environment variable. This fixes applications that hard
  exit when trying to spawn the helper script `BROWSER` points to because the
  file is missing. While we do include the script now we are leaving the
  variable omitted because the script does not work yet.

## [4.0.1](https://github.com/coder/code-server/releases/tag/v4.0.1) - 2022-01-04

Code v1.63.0

code-server has been rebased on upstream's newly open-sourced server
implementation (#4414).

### Changed

- Web socket compression has been made the default (when supported). This means
  the `--enable` flag will no longer take `permessage-deflate` as an option.
- The static endpoint can no longer reach outside code-server. However the
  vscode-remote-resource endpoint still can.
- OpenVSX has been made the default marketplace.
- The last opened folder/workspace is no longer stored separately in the
  settings file (we rely on the already-existing query object instead).
- The marketplace override environment variables `SERVICE_URL` and `ITEM_URL`
  have been replaced with a single `EXTENSIONS_GALLERY` variable that
  corresponds to `extensionsGallery` in Code's `product.json`.

### Added

- `VSCODE_PROXY_URI` env var for use in the terminal and extensions.

### Removed

- Extra extension directories have been removed. The `--extra-extensions-dir`
  and `--extra-builtin-extensions-dir` flags will no longer be accepted.
- The `--install-source` flag has been removed.

### Deprecated

- `--link` is now deprecated (#4562).

### Security

- We fixed a XSS vulnerability by escaping HTML from messages in the error page (#4430).

## [3.12.0](https://github.com/coder/code-server/releases/tag/v3.12.0) - 2021-09-15

Code v1.60.0

### Changed

- Upgrade Code to 1.60.0.

### Fixed

- Fix logout when using a base path (#3608).

## [3.11.1](https://github.com/coder/code-server/releases/tag/v3.11.1) - 2021-08-06

Undocumented (see releases page).

## [3.11.0](https://github.com/coder/code-server/releases/tag/v3.11.0) - 2021-06-14

Undocumented (see releases page).

## [3.10.2](https://github.com/coder/code-server/releases/tag/v3.10.2) - 2021-05-21

Code v1.56.1

### Added

- Support `extraInitContainers` in helm chart values (#3393).

### Changed

- Change `extraContainers` to support templating in helm chart (#3393).

### Fixed

- Fix "Open Folder" on welcome page (#3437).

## [3.10.1](https://github.com/coder/code-server/releases/tag/v3.10.1) - 2021-05-17

Code v1.56.1

### Fixed

- Check the logged user instead of $USER (#3330).
- Fix broken node_modules.asar symlink in npm package (#3355).
- Update cloud agent to fix version issue (#3342).

### Changed

- Use xdgBasedir.runtime instead of tmp (#3304).

## [3.10.0](https://github.com/coder/code-server/releases/tag/v3.10.0) - 2021-05-10

Code v1.56.0

### Changed

- Update to Code 1.56.0 (#3269).
- Minor connections refactor (#3178). Improves connection stability.
- Use ptyHostService (#3308). This brings us closer to upstream Code.

### Added

- Add flag for toggling permessage-deflate (#3286). The default is off so
  compression will no longer be used by default. Use the --enable flag to
  toggle it back on.

### Fixed

- Make rate limiter not count against successful logins (#3141).
- Refactor logout (#3277). This fixes logging out in some scenarios.
- Make sure directories exist (#3309). This fixes some errors on startup.

### Security

- Update dependencies with CVEs (#3223).

## Previous versions

This was added with `3.10.0`, which means any previous versions are not
documented in the changelog.

To see those, please visit the [Releases page](https://github.com/coder/code-server/releases).
