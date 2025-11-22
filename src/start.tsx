import { createStart } from "@tanstack/react-start";
import { testMiddleware } from "./middleware/test";

const middleware = [testMiddleware];

export const startInstance = createStart(() => {
	return {
		functionMiddleware: middleware,
	};
});
