# vscode-read-manifest

[![npm](https://flat.badgen.net/npm/license/vscode-read-manifest)](https://www.npmjs.org/package/vscode-read-manifest)
[![npm](https://flat.badgen.net/npm/v/vscode-read-manifest)](https://www.npmjs.org/package/vscode-read-manifest)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/node-vscode-read-manifest)](https://circleci.com/gh/idleberg/node-vscode-read-manifest)
[![David](https://flat.badgen.net/david/dev/idleberg/node-vscode-read-manifest)](https://david-dm.org/idleberg/node-vscode-read-manifest?type=dev)

Read the manifest (`package.json`) of any Visual Studio Code extension

## Installation

`yarn add vscode-read-manifest || npm install vscode-read-manifest`

## Usage

Example usage in script:

```js
const readManifest = require('vscode-read-manifest');

// Unique package identifier
const packageID = 'idleberg.applescript';

// Asynchronous
(async () => {
    const manifest = await readManifest(packageID);
    console.log(manifest);
})();

// Synchronous
const manifest = readManifest.sync(packageID);
console.log(manifest);
```

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-vscode-read-manifest) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
