import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/unauthorized")({
	component: () => <div>test</div>,
});
