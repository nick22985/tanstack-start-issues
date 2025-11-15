import { createServerFn } from "@tanstack/react-start";

export const getPublicCategories = createServerFn({
	method: "GET",
}).handler(async () => {
	return [];
});
