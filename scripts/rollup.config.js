import typescript from "rollup-plugin-typescript2";
import {terser} from "rollup-plugin-terser";
import pkg from "../package.json";

const sharedConfig = {
	input: "index.ts",
	external: {
		...Object.keys(pkg.dependencies || {}),
	},
};

const tsConfig = {
  tsconfigOverride: {
    compilerOptions: {
      module: "esnext"
    }
  },
  sourceMap: true,
  tslib: require("tslib"),
}

export default [
	{
		...sharedConfig,
		output: {
			file: pkg.module,
			format: "es",
		},
		plugins: [
			typescript(tsConfig),
		],
	},
	{
		...sharedConfig,
		output: {
			file: pkg.main,
			format: "cjs",
		},
		plugins: [
			typescript(tsConfig),
			terser(),
		],
	},
	{
		...sharedConfig,
		output: {
			file: pkg.browser,
			format: "iife",
			name: "etcs",
		},
		plugins: [
			typescript(tsConfig),
			terser(),
		],
	},
];
