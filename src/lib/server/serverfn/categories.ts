import { createServerFn } from "@tanstack/react-start";
import { test3Middleware } from "~/start";

export const getPublicCategories = createServerFn({
	method: "GET",
})
	.middleware([test3Middleware])
	.handler(async ({ context }) => {
		return [];
	});
