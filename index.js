'use strict';

const { extensions } = require('vscode');
const { promisify } = require('util');
const { readFile, readFileSync } = require('fs');
const { resolve } = require('path');

const readFileAsync = promisify(readFile);

module.exports = extensionID => {
    const extensionPath = extensions.getExtension(extensionID).extensionPath;
    const filePath = resolve(extensionPath, 'package.json');

    return readFileAsync(filePath, 'utf8').then(file => JSON.parse(file));
};

module.exports.sync = extensionID => {
    const extensionPath = extensions.getExtension(extensionID).extensionPath;
    const filePath = resolve(extensionPath, 'package.json');
    const file = readFileSync(filePath, 'utf8');

    return JSON.parse(file);
};
