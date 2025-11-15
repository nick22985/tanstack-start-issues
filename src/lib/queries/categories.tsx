import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getPublicCategories } from "~/lib/server/serverfn/categories";

export const getPublicCategoriesOptions = () =>
	queryOptions({
		queryKey: ["categories", "public"],
		queryFn: async () => getPublicCategories(),
		staleTime: 1000 * 60 * 30,
		gcTime: 1000 * 60 * 60,
	});

export const usePublicCategories = () => {
	return useSuspenseQuery(getPublicCategoriesOptions());
};
