# vscode-read-manifest

[![npm](https://flat.badgen.net/npm/license/vscode-read-manifest)](https://www.npmjs.org/package/vscode-read-manifest)
[![npm](https://flat.badgen.net/npm/v/vscode-read-manifest)](https://www.npmjs.org/package/vscode-read-manifest)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/node-vscode-read-manifest)](https://circleci.com/gh/idleberg/node-vscode-read-manifest)
[![David](https://flat.badgen.net/david/dep/idleberg/node-vscode-read-manifest)](https://david-dm.org/idleberg/node-vscode-read-manifest)

Read the manifest (`package.json`) of any installed Visual Studio Code extension

## Installation

`npm install vscode-read-manifest -S`

## Usage

`readManifest(packageID?: string)` / `readManifestSync(packageID?: string)`

You can omit the package ID to retrieve the manifest of the package in use

**Example**:

```js
const { readManifest, readManifestSync } = require('vscode-read-manifest');

// Unique package identifier
const packageID = 'idleberg.applescript';

// Asynchronous
(async () => {
    const manifest = await readManifest(packageID);
    console.log(manifest);
})();

// Synchronous
const manifest = readManifestSync(packageID);
console.log(manifest);
```

## Related

- [atom-read-manifest](https://www.npmjs.com/package/atom-read-manifest)

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
