'use client';
import { getProducts } from '@/services/ProductService';
import { getCategoryIcon } from '@/utils/categoryIcon';
import { getCategoriesFromProducts } from '@/utils/getCategories';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Spinner } from 'react-bootstrap';

const ProductCategories = () => {
	const [categories, setCategories] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProducts()
		.then((products) => {
			const uniqueCategories = getCategoriesFromProducts(products)
			setCategories(uniqueCategories)
		}).catch((err) => {
			console.error('Failed to get the categories', err)
		}).finally(() => {
			setLoading(false)
		})
	}, [])

	console.log(categories);
	
	
	return (
		<section className='my-3'>
			<h5 className='text-capitalize fw-semibold'>Product <span className='text-primary'>categories</span></h5>
			<Row>
				{
					loading ? (
						<Spinner animation='border' variant='primary' className='mt-3 mx-auto'>
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					) : (
						categories.map((cat) => (
							<Col key={cat}>
								<Card className='category-card'>
									<Card.Body className='d-flex align-items-center justify-content-between'>
										<h5 className='text-capitalize m-0'>{cat}</h5>
										{getCategoryIcon(cat)}
									</Card.Body>
								</Card>
							</Col>
						))
					)
				}
			</Row>
		</section>
	)
}

export default ProductCategories