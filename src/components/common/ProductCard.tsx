'use client';
import { Product } from '@/types'
import React from 'react'
import { Card } from 'react-bootstrap'
import { BsStarFill } from 'react-icons/bs'

interface ProductCardProps {
	product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<>
		<Card className='product-card'>
			<Card.Body>
				<figure className='text-center bg-dark bg-opacity-10 p-3 rounded-2 flex-center'>
					<img src={product.image} alt="" className='img-fluid' />
				</figure>
				<div className="d-flex align-items-center justify-content-between mb-2">
					<Card.Text className='text-capitalize text-primary small mb-0 opacity-75'>{product.category}</Card.Text>
					<p className="m-0 small d-inline-flex align-items-center gap-2 lh-1">
						<BsStarFill className='text-warning lh-1'/> {product.rating?.rate ?? 'NA'} / 5
					</p>
				</div>
				<Card.Title className='text-truncate fw-medium'>{product.title}</Card.Title>
				<h5 className="m-0 fw-bold">$ {product.price}</h5>
			</Card.Body>
		</Card>
		</>
	)
}

export default ProductCard