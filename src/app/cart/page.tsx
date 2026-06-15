'use client';

import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import { useCart } from '@/context/CartContext'
import React from 'react'
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { GoChevronLeft } from 'react-icons/go';
import { TbShoppingCartX } from 'react-icons/tb';

const CartPage = () => {
	const {cart, clearCart} = useCart();

	if(cart.length === 0) {
		return (
			<EmptyCart />
		)
	}

	return (
		<section className='my-3'>			
			<Row>
				<Col md={8}>
					<Row className='mb-3'>
						<Col md={8}>
							<div className="d-flex align-items-center gap-3">
								<h3 className='mb-0 fw-semibold'>Shopping Cart</h3>
								<Badge bg='secondary' className='text-dark bg-opacity-25 fw-medium lh-base'>{cart.length} Items</Badge>
							</div>
							<p className='m-0'>Review your items and proceed to checkout.</p>
						</Col>
						<Col md={4} className='align-self-center text-end'>
							<Button variant='outline-primary flex-center ms-auto'>
								<GoChevronLeft size={24} className='me-2' /> Continue Shopping
							</Button>
						</Col>
					</Row>
					{
						cart.map((item) => (
							<CartItem 
								key={item.product.id}
								item={item} 
							/>
						))
					}

					<Row>
						<Col className='text-end'>
							<Button variant='outline-danger' className='inline-flex-center gap-2' onClick={clearCart}>
								<TbShoppingCartX size={22}/> Clear Cart
							</Button>
						</Col>
					</Row>
				</Col>
				<Col md={4}>
					<CartSummary />
				</Col>
			</Row>
		</section>
	)
}

export default CartPage