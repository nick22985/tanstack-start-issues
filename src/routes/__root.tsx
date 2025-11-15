import type { QueryClient } from "@tanstack/react-query";
import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { Header } from "~/components/Header";

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	component: RootComponent,
});

function RootComponent() {
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
