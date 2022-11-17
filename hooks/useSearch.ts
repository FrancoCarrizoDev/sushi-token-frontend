import { useState, useEffect } from "react";
import { LocalEntity } from "../generated";

type Locals = {
	locales: Array<LocalEntity>;
};

export default function useSearch({ locales }: Locals) {
	const [filter, setFilter] = useState<string>("");
	const [storedFilter, setStoredFilter] = useState<LocalEntity[]>([]);

	useEffect(() => {
		if (filter === "") {
			setStoredFilter(locales);
		}
		{
			const storeFiltered = locales.filter((local) =>
				local.attributes
					?.nombre!.toUpperCase()
					.includes(filter.toUpperCase())
			);
			setStoredFilter(storeFiltered);
		}
	}, [filter, locales]);

	return {
		setFilter,
		storedFilter,
	};
}
