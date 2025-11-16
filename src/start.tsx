import { createStart } from "@tanstack/react-start";
import { test2Middleware } from "./middleware/test";

const middleware = [test2Middleware, test2Middleware];

export const startInstance = createStart(() => {
	return {
		functionMiddleware: middleware,
	};
});
