'use strict';

const { extensions } = require('vscode');
const findUp = require('find-up');
const { promisify } = require('util');
const { readFile, readFileSync } = require('fs');
const { resolve } = require('path');

const readFileAsync = promisify(readFile);

module.exports = (extensionID = false) => {
    let filePath;

    if (extensionID) {
        const extensionPath = extensions.getExtension(extensionID).extensionPath;
        filePath = resolve(extensionPath, 'package.json');
    } else {
        filePath = findUp('package.json');
    }

    return readFileAsync(filePath, 'utf8').then(file => JSON.parse(file));
};

module.exports.sync = (extensionID = false) => {
    let filePath;

    if (extensionID) {
        const extensionPath = extensions.getExtension(extensionID).extensionPath;
        filePath = resolve(extensionPath, 'package.json');
    } else {
        filePath = findUp('package.json');
    }
    const file = readFileSync(filePath, 'utf8');

    return JSON.parse(file);
};
