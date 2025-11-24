import { createStart } from "@tanstack/react-start";
import { test2Middleware, testMiddleware } from "./middleware/test";

const middleware = [testMiddleware, test2Middleware];

export const startInstance = createStart(() => {
	return {
		functionMiddleware: middleware,
	};
});

export const test3Middleware = startInstance
	.createMiddleware({ type: "function" })
	.server(async ({ next, context }) => {
		console.log("context", context);

		return next({ context: { auth: "test2", user: "test" } });
	});

export const test4Middleware = startInstance
	.createMiddleware({ type: "function" })
	.server(async ({ next, context }) => {
		console.log("context", context);

		return next();
	});
