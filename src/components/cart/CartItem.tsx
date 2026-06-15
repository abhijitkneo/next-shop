'use client';

import { useCart } from '@/context/CartContext';
import { CartItem as CartItemType } from '@/types/cart.types'
import React from 'react'
import { Button, Card, Col, Figure, InputGroup, Row } from 'react-bootstrap';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { GoPlusCircle } from 'react-icons/go';
import { HiOutlineTrash } from 'react-icons/hi';
import { LuMinus, LuPlus } from 'react-icons/lu';
import ProductRatings from '../common/ProductRatings';
import { FaCircleCheck } from 'react-icons/fa6';
import Link from 'next/link';
import { slugify } from '@/utils/slugify';

interface CartItemProps {
	item: CartItemType,
}


const CartItem = ({item}: CartItemProps) => {	
	const productTotal = item.product.price * item.quantity;
	const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

	return (
		<Card className='mb-2 product-detail-card'>
			<Card.Body className='p-2'>
				<Row className='gx-3'>
					<Col md={6}>
						<div className="d-flex align-items-center gap-3">
							<Figure className='m-0 bg-dark bg-opacity-10 rounded p-2 flex-shrink-0 text-center'>
								<Link href={`/products/${item.product.id}/${slugify(item.product.title)}`}>
									<img src={item.product.image} alt='' className='img-fluid h-100' />
								</Link>
							</Figure>
							<div className="product-info text-truncate">
								<h5 className='mb-0 text-truncate'>{item.product.title}</h5>
								<p className="m-0 text-capitalize text-primary fw-medium small">{item.product.category}</p>
								<ProductRatings rate={item.product.rating.rate} />
								<h5 className='mb-0 mt-3'>$ {item.product.price}</h5>
							</div>
						</div>
					</Col>
					<Col md={4} className='align-self-center'>
						<div className="d-flex align-items-center justify-content-center flex-column">
							<InputGroup className='justify-content-center'>
								<Button variant="outline-secondary" className='border-secondary-subtle' onClick={() => decreaseQuantity(item.product.id)}>
									<LuMinus />
								</Button>
								<InputGroup.Text style={{width: '44px'}} className='justify-content-center border-secondary-subtle fw-medium'>{item.quantity}</InputGroup.Text>
								<Button variant="outline-secondary" className='border-secondary-subtle' onClick={() => increaseQuantity(item.product.id)}>
									<LuPlus />
								</Button>
							</InputGroup>
							
							<p className='mb-0 fw-medium small inline-flex-center gap-2 mt-2'>
								<FaCircleCheck className='text-success' />
								<span>In stock</span>
							</p>
						</div>
					</Col>
					<Col md={2} className='align-self-center text-center'>
						<h5 className='mb-3 text-center'>$ {productTotal}</h5>
						<Button variant='transparent' size='sm' className='p-0 text-danger inline-flex-center gap-1' onClick={() => removeFromCart(item.product.id)}>
							<HiOutlineTrash size={18} className='text-danger' /> Remove
						</Button>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	)
}

export default CartItem