import type { QueryClient } from "@tanstack/react-query";
import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Header } from "~/components/Header";

export const getUser = createServerFn({ method: "GET" }).handler(({ context }) => {
	return null;
});

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
	auth: Awaited<ReturnType<typeof getUser>>;
}>()({
	beforeLoad: async ({ context }) => {
		const auth = await context.queryClient.fetchQuery({
			queryKey: ["auth"],
			queryFn: ({ signal }) => getUser({ signal }),
		});
		return {
			auth,
		};
	},
	loader: async ({ context }) => {
		return {
			// auth: context.auth,
		};
	},
	component: RootComponent,
});

function RootComponent() {
	const { auth } = Route.useLoaderData();

	return (
		<RootDocument>
			<Header />
			<main>
				<Outlet />
			</main>
		</RootDocument>
	);
}

function RootDocument({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en" className="dark" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="dark:bg-[rgb(38_43_47/1)]">
				{children}
				<Scripts />
			</body>
		</html>
	);
}
