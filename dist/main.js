"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = run;
const promises_1 = require("node:fs/promises");
function run(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const { versionFile, packageName } = args;
        if (packageName === "") {
            throw new Error("Please set package-name param");
        }
        try {
            yield (0, promises_1.access)(versionFile, promises_1.constants.R_OK);
        }
        catch (e) {
            throw new Error(`Cannot read file ${versionFile}`);
        }
        const lines = (yield (0, promises_1.readFile)(versionFile, "utf8")).split("\n");
        for (const line of lines) {
            if (line.startsWith(packageName)) {
                return { version: line.split(/\s/)[1] };
            }
        }
        throw new Error(`Cannot find version for package ${packageName}`);
    });
}
