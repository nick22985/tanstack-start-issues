import * as TanstackQuery from "./integrations/tanstack-query/root-provider";

import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";

import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { getCookie } from "@tanstack/react-start/server";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	const rqContext = TanstackQuery.getContext();
	const queryClient = rqContext.queryClient;

	const consent = getCookie("cookie-consent");
	const router = createTanStackRouter({
		routeTree,
		context: { queryClient, auth: null },
		defaultPreload: "intent",
		// react-query will handle data fetching & caching
		// https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#passing-all-loader-events-to-an-external-cache
		defaultPreloadStaleTime: 0,
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: NotFound,
		scrollRestoration: true,
		defaultStructuralSharing: true,
	});

	setupRouterSsrQueryIntegration({
		router,
		queryClient,
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
