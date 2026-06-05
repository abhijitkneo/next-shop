export const categoryToSlug = (category: string) => {
	return category.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-');
}

export const slugToCategory = (slug: string) => {
	const map: Record<string, string> = {
		'mens-clothing': "men's clothing",
		'womens-clothing': "women's clothing",
		jewelry: 'jewelry',
		electronics: 'electronics'
	}
	return map[slug] || slug
}