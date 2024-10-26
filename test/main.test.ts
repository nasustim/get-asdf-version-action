import { fs, vol } from "memfs";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { run } from "../src/main";

vi.mock("node:fs");
vi.mock("node:fs/promises");

const TEST_FILE_PATH = "/tmp/get-asdf-version-action/tool-versions";

describe("Success", () => {
	beforeEach(() => {
		vol.reset();
	});

	it("Can read the version that is specified package as arg", () => {
		fs.writeFileSync(TEST_FILE_PATH, "nodejs 16.0.0\n");
		run({
			versionFile: TEST_FILE_PATH,
			packageName: "nodejs",
		}).then((result) => {
			expect(result).toEqual({ version: "11.0.0" });
		});
	});
});
