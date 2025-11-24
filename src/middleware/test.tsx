import { createMiddleware } from "@tanstack/react-start";

// https://tanstack.com/start/latest/docs/framework/react/middleware
// This is a sample middleware that you can use in your server functions.

/**
 * Middleware to force authentication on a server function, and add the user to the context.
 */
export const testMiddleware = createMiddleware({ type: "function" }).server(
	async ({ next, context }) => {
		console.log("context", context);

		return next({ context: { auth: "test2", user: "test" } });
	},
);

export const test2Middleware = createMiddleware({ type: "function" }).server(
	async ({ next, context }) => {
		console.log("context", context);

		return next({ context: { auth: "test2", user: "test" } });
	},
);
