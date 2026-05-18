import { Product } from "@/types";

export const getCategoriesFromProducts = (products: Product[]) => {
	return [...new Set(products.map((p) => p.category).filter(Boolean))];
}