import tailwindcss from "@tailwindcss/vite";
// import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import { devtools } from "@tanstack/devtools-vite";
import { nitro } from "nitro/vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const ReactCompilerConfig = {
	target: "19",
};

export default defineConfig(() => {
	return {
		server: {
			port: 3000,
			allowedHosts: ["rimuru.nick22985.com", "nine-tools-bow.loca.lt"],
			// hmr: {
			// 	overlay: false,
			// },
		},
		plugins: [
			devtools({
				eventBusConfig: {
					port: 1234,
					debug: true,
					enabled: true,
				},
				enhancedLogs: {
					enabled: true,
				},
				logging: true,
				injectSource: {
					enabled: true,
					ignore: {
						// files to ignore source injection for
						files: ["node_modules", /.*\.test\.(js|ts|jsx|tsx)$/],
						// components to ignore source injection for
						// components: ["YourComponent", /.*Lazy$/],
					},
				},

				// editor: {
				// 	name: "nvim",
				// 	open: async (path, lineNumber, columnNumber) => {
				// 		const { exec } = await import("node:child_process");
				// 		exec(
				// 			`nvim -g "${path.replaceAll("$", "\\$")}${lineNumber ? `:${lineNumber}` : ""}${columnNumber ? `:${columnNumber}` : ""}"`,
				// 		);
				// 	},
				// },
			}),
			tsConfigPaths({
				projects: ["./tsconfig.json"],
			}),
			tailwindcss(),
			tanstackStart({}),
			// nitroV2Plugin(),
			nitro({
				preset: "bun",
			}),
			viteReact({
				babel: {
					// https://react.dev/learn/react-compiler
					plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
				},
			}),
		],
		// server: {
		// 	watch: {
		// 		usePolling: true,
		// 	},
		// 	hmr: {
		// 		port: 60104,
		// 		clientPort: 60100,
		// 	},
		// },
	};
});
