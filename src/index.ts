import { error, getInput, setOutput } from "@actions/core";
import { run } from "./main";

run({
	versionFile: getInput("version-file", { required: true }),
	packageName: getInput("package-name", { required: true }),
})
	.catch((err) => {
		error(err);
		process.exit(1);
	})
	.then((result) => {
		setOutput("version", result.version);
		process.exit(0);
	});
