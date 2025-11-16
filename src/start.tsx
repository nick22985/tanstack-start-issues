import { createStart } from "@tanstack/react-start";
import { test, test2Middleware } from "./middleware/test";

const middleware = [test, test2Middleware];

export const startInstance = createStart(() => {
	return {
		functionMiddleware: middleware,
	};
});
