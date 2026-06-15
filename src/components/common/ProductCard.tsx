'use client';
import { useCart } from '@/context/CartContext';
import useRequireAuth from '@/hooks/useRequireAuth';
import { Product } from '@/types'
import { slugify } from '@/utils/slugify';
import Link from 'next/link';
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { BsStarFill } from 'react-icons/bs'
import { LuExternalLink } from 'react-icons/lu';
import { RiShoppingCartLine } from 'react-icons/ri';

interface ProductCardProps {
	product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
	const requireAuth = useRequireAuth();
	const { addToCart } = useCart();

	const handleAddToCart = () => {
		if(!requireAuth()) {
			return
		}
		console.log('Add to cart', product);
		addToCart(product);
	}

	return (
		<>
		<Card className='product-card'>
			<Card.Body>
				<Link href={`/products/${product.id}/${slugify(product.title)}`} className='product-img-link'>
					<figure className='text-center bg-dark bg-opacity-10 p-3 rounded-2 flex-center overflow-hidden position-relative'>
						<img src={product.image} alt="" className='img-fluid' />
						<span className='d-block bg-primary position-absolute rounded p-2 link-icon shadow'>
							<LuExternalLink size={22} className='text-white lh-1' />
						</span>
					</figure>
				</Link>
				<div className="d-flex align-items-center justify-content-between mb-2">
					<Card.Text className='text-capitalize text-primary small mb-0 opacity-75'>{product.category}</Card.Text>
					<p className="m-0 small d-inline-flex align-items-center gap-2 lh-1">
						<BsStarFill className='text-warning lh-1'/> {product.rating?.rate ?? 'NA'} / 5
					</p>
				</div>
				<Card.Title className='text-truncate fw-medium'>{product.title}</Card.Title>
				<hr className='border border-dark border-bottom-0 border-start-0 border-end-0 border-opacity-50' />
				<div className="d-flex align-items-center justify-content-between">
					<h5 className="m-0 fw-bold">$ {product.price}</h5>
					<Button variant='primary' size='sm' className='inline-flex-center gap-2' onClick={handleAddToCart}>
						<RiShoppingCartLine size={18} /> Add to Cart
					</Button>
				</div>
			</Card.Body>
		</Card>
		</>
	)
}

export default ProductCard