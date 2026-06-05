import BackButton from '@/components/common/BackButton'
import ProductCard from '@/components/common/ProductCard'
import { getProducts } from '@/services/ProductService'
import { Product } from '@/types/product.types'
import { slugToCategory } from '@/utils/categorySlug'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

type Props = {
	params: Promise<{
		slug: string
	}>
}

export default async function CategoryPage({params}: Props) {
	const {slug} = await params
	const categoryName = slugToCategory(slug);
	const products = await getProducts();
	const filteredProducts = products.filter((product: Product) => product.category.toLowerCase() === categoryName.toLowerCase());

	return(
		<section className='my-3'>
			<h1 className='text-capitalize fs-3 fw-semibold mb-3 d-flex align-items-center gap-2'>
				<BackButton /> {categoryName}
			</h1>
			<Row className='g-3'>
				{
					filteredProducts.map((product: any) => (
						<Col key={product.id} md={3}>
							<ProductCard product={product} />
						</Col>
					))
				}
			</Row>
		</section>
	)
}
