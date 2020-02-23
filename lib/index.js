'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var extensions = require('vscode').extensions;
var homedir = require('os').homedir;
var _a = require('path'), join = _a.join, resolve = _a.resolve;
var promisify = require('util').promisify;
var _b = require('fs'), readFile = _b.readFile, readFileSync = _b.readFileSync;
var callerCallsite = require('caller-callsite');
var findUp = require('find-up');
var readFileAsync = promisify(readFile);
var readManifest = function (extensionID) {
    if (extensionID === void 0) { extensionID = ''; }
    return __awaiter(void 0, void 0, void 0, function () {
        var filePath, fileContents, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    extensionID = (extensionID === null || extensionID === void 0 ? void 0 : extensionID.length) ? extensionID : getExtensionName();
                    filePath = resolveFilePath(extensionID);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, readFileAsync(filePath, 'utf8')];
                case 2:
                    fileContents = _a.sent();
                    return [2 /*return*/, JSON.parse(fileContents)];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.readManifest = readManifest;
var readManifestSync = function (extensionID) {
    if (extensionID === void 0) { extensionID = ''; }
    extensionID = (extensionID === null || extensionID === void 0 ? void 0 : extensionID.length) ? extensionID : getExtensionName();
    var filePath = resolveFilePath(extensionID);
    try {
        var fileContents = readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    }
    catch (err) {
        return null;
    }
};
exports.readManifestSync = readManifestSync;
function resolveFilePath(extensionID) {
    var extensionPath = extensions.getExtension(extensionID).extensionPath;
    var filePath = resolve(extensionPath, 'package.json');
    return filePath;
}
function getExtensionName() {
    var callerPath = callerCallsite().getFileName();
    var extensionsDirPath = resolve(homedir(), '.vscode', 'extensions');
    if (callerPath.startsWith(extensionsDirPath)) {
        return callerPath
            .replace(extensionsDirPath, '')
            .split('/')
            .filter(function (fragment) { return fragment; })[0]
            .replace(/-\d+\.\d+\.\d+$/, '') || '';
    }
    return '';
}
//# sourceMappingURL=index.js.map