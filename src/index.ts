'use strict';

const { extensions } = require('vscode');
const { homedir } = require('os');
const { join, resolve } = require('path');
const { promisify } = require('util');
const { readFile, readFileSync } = require('fs');
const callerCallsite = require('caller-callsite');
const findUp = require('find-up');

const readFileAsync = promisify(readFile);

const readManifest = async (extensionID: string = ''): Promise<Object> => {
  extensionID = extensionID?.length ? extensionID : getExtensionName();

  const filePath: string = resolveFilePath(extensionID);

  try {
    const fileContents: string = await readFileAsync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (err) {
    return null;
  }
};

const readManifestSync = (extensionID: string = ''): Object => {
  extensionID = extensionID?.length ? extensionID : getExtensionName();

  const filePath: string = resolveFilePath(extensionID);

  try {
    const fileContents: string = readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (err) {
    return null;
  }
};

function resolveFilePath(extensionID: string) {
  const extensionPath = extensions.getExtension(extensionID).extensionPath;
  const filePath: string | undefined = resolve(extensionPath, 'package.json');

  return filePath;
}

function getExtensionName(): string {
  const callerPath: string = callerCallsite().getFileName();
  const extensionsDirPath: string = resolve(homedir(), '.vscode', 'extensions');

  if (callerPath.startsWith(extensionsDirPath)) {
    return callerPath
      .replace(extensionsDirPath, '')
      .split('/')
      .filter(fragment => fragment)[0]
      .replace(/-\d+\.\d+\.\d+$/, '') || '';
  }

  return '';
}

export {
  readManifest,
  readManifestSync
};
