'use strict';

const findUp = require('find-up');
const { extensions } = require('vscode');
const { promisify } = require('util');
const { readFile, readFileSync } = require('fs');
const { join, resolve } = require('path');

const readFileAsync = promisify(readFile);

const readManifest = async (extensionID = '') => {
  let filePath;

  if (extensionID) {
    const extensionPath = extensions.getExtension(extensionID).extensionPath;
    filePath = resolve(extensionPath, 'package.json');
  } else {
    const selfRoot = await findUp('package.json', { cwd: __dirname });
    filePath = await findUp('package.json', { cwd: join(selfRoot, '../..') });
  }

  return readFileAsync(filePath, 'utf8').then(file => JSON.parse(file));
};

const readManifestSync = (extensionID = '') => {
  let filePath;

  if (extensionID) {
    const extensionPath = extensions.getExtension(extensionID).extensionPath;
    filePath = resolve(extensionPath, 'package.json');
  } else {
    const selfRoot = findUp.sync('package.json', { cwd: __dirname });
    filePath = findUp.sync('package.json', { cwd: join(selfRoot, '../..') });
  }

  return JSON.parse(readFileSync(filePath, 'utf8'));
};

export {
  readManifest,
  readManifestSync
};
