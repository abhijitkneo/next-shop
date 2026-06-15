'use client';

import React from 'react'
import { Button, Card } from 'react-bootstrap'

const EmptyCart = () => {
	return (
		<section className='section-empty-cart'>
			<Card className='mt-3 bg-transparent border-0'>
				<Card.Body className='d-flex flex-column align-items-center'>
					<img src="/assets/images/empty-cart-2.gif" alt="" className='empty-cart-img' />
					<h3 className='mb-0 mt-4 fw-normal'>Your Card is Empty</h3>
					<Button variant='outline-primary mt-5' href='/'>Continue Shopping</Button>
				</Card.Body>
			</Card>
		</section>
	)
}

export default EmptyCart