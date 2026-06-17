'use client';

import RegistrationForm from '@/components/auth/RegistrationForm'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { HiMiniUserPlus } from 'react-icons/hi2';

const page = () => {
	return (
		<Row className="justify-content-center my-5">
			<Col md={6}>
				<Card>
					<Card.Body className="p-4">
						<div className="text-center mb-4">
							<span className="bg-primary-subtle lh-1 d-inline-block rounded-circle p-3 mb-3">
								<HiMiniUserPlus size={32} className="text-primary" />
							</span>
							<h3 className="mb-0">Create Account</h3>
							<p className="small text-black-50 fw-semibold mb-0">Fill in the details below to create an account</p>
						</div>
						<hr className="border border-dark border-opacity-25 border-start-0 border-end-0 border-bottom-0" />

						{/* Login form */}
						<RegistrationForm />
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}

export default page