"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const main_1 = require("./main");
(0, main_1.run)({
    versionFile: (0, core_1.getInput)("version-file", { required: true }),
    packageName: (0, core_1.getInput)("package-name", { required: true }),
})
    .catch((err) => {
    (0, core_1.error)(err);
    process.exit(1);
})
    .then((result) => {
    (0, core_1.setOutput)("version", result.version);
    process.exit(0);
});
