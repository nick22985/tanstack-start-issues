import { usePublicCategories } from "~/lib/queries/categories";

export function Header() {
	const { data: categories } = usePublicCategories();

	return <header className="relative"></header>;
}
