import type { ErrorComponentProps } from "@tanstack/react-router";
import { ErrorComponent } from "@tanstack/react-router";

export function DefaultCatchBoundary({ error }: Readonly<ErrorComponentProps>) {
	return (
		<div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4">
			<ErrorComponent error={error} />
			<div className="flex flex-wrap items-center gap-2"></div>
		</div>
	);
}
