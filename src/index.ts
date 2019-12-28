'use strict';

const findUp = require('find-up');
const { extensions } = require('vscode');
const { promisify } = require('util');
const { readFile, readFileSync } = require('fs');
const { join, resolve } = require('path');

const readFileAsync = promisify(readFile);

const readManifest = async (extensionID: string): Promise<Object> => {
  let filePath;

  const extensionPath = extensions.getExtension(extensionID).extensionPath;
  filePath = resolve(extensionPath, 'package.json');

  try {
    const fileContents = await readFileAsync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (err) {
    return null;
  }
};

const readManifestSync = (extensionID: string): Object => {
  let filePath;

  const extensionPath = extensions.getExtension(extensionID).extensionPath;
  filePath = resolve(extensionPath, 'package.json');

  try {
    const fileContents = readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (err) {
    return null;
  }
};

export {
  readManifest,
  readManifestSync
};
