'use client';

import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext'
import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap';
import { BsTruck } from 'react-icons/bs';
import { MdShoppingCartCheckout } from 'react-icons/md';

const CartSummary = () => {
	const { cart, getCartTotal, getCartCount } = useCart();
	const { isAuthenticated } = useAuth();
	
	const TAX_RATE_PERCENT = 8.5;
	const DISCOUNT_AMOUNT = 20;

	const calculateTax = ():number => {
		const cartTotal = getCartTotal();
		return (cartTotal * TAX_RATE_PERCENT) / 100;
	}

	const calculateGradTotal = (): number => {
		const cartTotal = getCartTotal();
		const taxAmount = calculateTax();
		return cartTotal + taxAmount - DISCOUNT_AMOUNT
	}
	

	return (
		<>
		<Card className='sticky-top summary-card'>
			<Card.Body>
				<Card.Title>Order Summary</Card.Title>
				<ListGroup className='list-group-flush'>
					<ListGroup.Item className='d-flex align-items-center justify-content-between bg-transparent border-0 px-0'>
						<p className="fw-medium mb-0">Items ({getCartCount()})</p>
						<p className='fw-semibold mb-0'>${getCartTotal().toFixed(2)}</p>
					</ListGroup.Item>
					<ListGroup.Item className='d-flex align-items-center justify-content-between bg-transparent border-0 px-0'>
						<p className="fw-medium mb-0">Shipping</p>
						<p className='fw-semibold mb-0 text-uppercase text-success'>Free</p>
					</ListGroup.Item>
					<ListGroup.Item className='d-flex align-items-center justify-content-between bg-transparent border-0 px-0'>
						<p className="fw-medium mb-0">Discount</p>
						<p className='fw-semibold mb-0 text-uppercase text-success'>-${DISCOUNT_AMOUNT.toFixed(2)}</p>
					</ListGroup.Item>
					<ListGroup.Item className='d-flex align-items-center justify-content-between bg-transparent border-0 px-0'>
						<p className="fw-medium mb-0">Tax (8.5%)</p>
						<p className='fw-semibold mb-0'>${calculateTax().toFixed(2)}</p>
					</ListGroup.Item>
					<ListGroup.Item className='d-flex align-items-center justify-content-between bg-transparent border-top px-0 py-3 my-3'>
						<p className="fw-medium mb-0">Total</p>
						<h3 className='fw-semibold mb-0'>${calculateGradTotal().toFixed(2)}</h3>
					</ListGroup.Item>
					<ListGroup.Item className='d-flex align-items-center border-success-subtle border rounded bg-success bg-opacity-10 gap-3 p-3'>
						<BsTruck size={24} className='text-success'/>
						<p className="m-0 text-success lh-base small">
							<span className='fw-semibold'>Estimated Delivery</span>
							<span className='d-block'>22 - 24 June, 2026</span>
						</p>
					</ListGroup.Item>
					<ListGroup.Item className='d-flex align-items-center justify-content-between bg-transparent border-0 px-0 pb-0'>
						<Button 
							variant='primary' 
							className='w-100 fw-medium px-2 flex-center gap-2 mt-2'
							disabled={!isAuthenticated}
						>
							<MdShoppingCartCheckout size={24} />Proceed to Checkout
						</Button>
					</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
		
		</>
	)
}

export default CartSummary