import { constants, access, readFile } from "node:fs/promises";

import { info } from "@actions/core";

type ArgsType = {
	versionFile: string;
	packageName: string;
};
type ReturnType = {
	version: string;
};

export async function run(args: ArgsType): Promise<ReturnType> {
	const { versionFile, packageName } = args;

	if (packageName === "") {
		throw new Error("Please set package-name param");
	}

	try {
		await access(versionFile, constants.R_OK);
	} catch (e) {
		throw new Error(`Cannot read file ${versionFile}`);
	}

	const lines = (await readFile(versionFile, { encoding: "utf-8" })).split(/\r?\n/g);
	for (const line of lines) {
		if (line.startsWith(packageName)) {
			return { version: line.split(/\s+/)[1] };
		}
	}
	throw new Error(`Cannot find version for package ${packageName}`);
}
