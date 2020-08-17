import typescript from "rollup-plugin-typescript2";
import {terser} from "rollup-plugin-terser";
import pkg from "../package.json";

const sharedConfig = {
	input: "index.ts",
	external: {
		...Object.keys(pkg.dependencies || {}),
	},
};

export default [
	{
		...sharedConfig,
		output: {
			file: pkg.module,
			format: "es",
		},
		plugins: [
			typescript({
				typescript: require("typescript"),
				sourceMap: true,
				tslib: require("tslib"),
			}),
		],
	},
	{
		...sharedConfig,
		output: {
			file: pkg.main,
			format: "cjs",
		},
		plugins: [
			typescript({
				sourceMap: true,
				tslib: require("tslib"),
			}),
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
			typescript({
				sourceMap: true,
				tslib: require("tslib"),
			}),
			terser(),
		],
	},
];
