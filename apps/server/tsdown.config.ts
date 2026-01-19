import { defineConfig } from "tsdown";

export default defineConfig({
	entry: "./src/index.ts",
	format: ["module", "cjs"],
	platform: "node",
	outDir: "./dist",
	clean: true,
	noExternal: [/@fast-expo\/.*/],
});
