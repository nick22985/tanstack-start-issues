import { tanstackConfig } from "@tanstack/eslint-config";

export default [
	{
		ignores: [
			"node_modules/**",
			".tanstack/**",
			".output/**",
			".nitro/**",
			"drizzle/**",
			"lib/tebex-sdk-nodejs/**",
			"playwright-report/**",
			"data/**",
		],
	},
	...tanstackConfig,
	{
		rules: {
			"@typescript-eslint/no-unnecessary-condition": "off",
			"import/order": "off",
		},
	},
];
