'use client';

import { registerUser } from '@/services/UserService';
import { RegisterPayload } from '@/types/user.types';
import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { FiEye, FiLock, FiMail, FiUser, FiUserPlus } from 'react-icons/fi';

const RegistrationForm = () => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
		phone: ''
	})
	const [success, setSuccess] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const payload: RegisterPayload = {
			email: formData.email,
			username: formData.username,
			password: formData.password,
			name: {
				firstname: formData.firstName,
				lastname: formData.lastName
			},
			address: {
				city: '',
				street: '',
				number: 0,
				zipcode: '',
				geolocation: {
					lat: '',
					long: ''
				}
			},
			phone: formData.phone,
		}

		setLoading(true);

		try {
			console.log(payload, '<<<<<<< payload');
			
			const user = await registerUser(payload);
			setSuccess('Account created successfully!')

		} catch(error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Row className='gy-3'>
				<Col md={6}>
					<Form.Group controlId="firstname">
						<Form.Label>First Name</Form.Label>
						<div className="position-relative">
							<FiUser className="position-absolute start-0 top-50 ms-3 translate-middle-y" />
							<Form.Control 
								type="text"
								name='firstName'
								value={formData.firstName} 
								onChange={handleChange} 
								placeholder="Enter your first name"
								className="ps-5"
							/>
						</div>
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group controlId='lastname'>
						<Form.Label>Last Name</Form.Label>
						<div className="position-relative">
							<FiUser className="position-absolute start-0 top-50 ms-3 translate-middle-y" />
							<Form.Control
								type='text'
								name='lastName'
								value={formData.lastName}
								onChange={handleChange}
								placeholder='Enter your last name'
								className='ps-5'
							/>
						</div>
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group controlId='email'>
						<Form.Label>Email</Form.Label>
						<div className="position-relative">
							<FiMail className="position-absolute start-0 top-50 ms-3 translate-middle-y" />
							<Form.Control
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='Enter your email'
								className='ps-5'
							/>
						</div>
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group controlId='username'>
						<Form.Label>Username</Form.Label>
						<div className="position-relative">
							<FiUser className="position-absolute start-0 top-50 ms-3 translate-middle-y" />
							<Form.Control
								type='text'
								name='username'
								value={formData.username}
								onChange={handleChange}
								placeholder='Choose username'
								className='ps-5'
							/>
						</div>
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group controlId='password'>
						<Form.Label>Password</Form.Label>
						<div className="position-relative">
							<FiLock className="position-absolute start-0 top-50 ms-3 translate-middle-y" />
							<Form.Control
								type='password'
								name='password'
								value={formData.password}
								onChange={handleChange}
								placeholder='Create password'
								className='px-5'
							/>
							<Button variant='transparent' className='p-0 position-absolute end-0 top-50 me-3 translate-middle-y'>
								<FiEye />
								{/* <FiEyeOff /> */}
							</Button>
						</div>
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group controlId='password'>
						<Form.Label>Confirm Password</Form.Label>
						<div className="position-relative">
							<FiLock className="position-absolute start-0 top-50 ms-3 translate-middle-y" />
							<Form.Control
								type='password'
								name='confirmPassword'
								value={formData.confirmPassword}
								onChange={handleChange}
								placeholder='Confirm password'
								className='px-5'
							/>
							<Button variant='transparent' className='p-0 position-absolute end-0 top-50 me-3 translate-middle-y'>
								<FiEye />
							</Button>
						</div>
					</Form.Group>
				</Col>
				<Col md={12}>
					<Form.Group controlId='phone'>
						<Form.Label>Phone</Form.Label>
						<div className="position-relative">
							<FiLock className="position-absolute start-0 top-50 ms-3 translate-middle-y" />
							<Form.Control
								type='tel'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								placeholder='Enter your phone number'
								className='ps-5'
							/>
						</div>
					</Form.Group>
				</Col>
				<Col md={12}>
					<Button type='submit' variant='primary' className='w-100 flex-center gap-2'>
						{
							loading ? (
								<>
									<Spinner animation='border' size='sm' /> Creating Account...
								</>
							) : (
								<>
									<FiUserPlus size={24}/> Create Account
								</>
							)
						}
					</Button>
					{
						success && (
							<Alert variant='success' className='mb-0 mt-3' dismissible>{success}</Alert>
						)
					}
				</Col>
			</Row>
		</Form>
	)
}

export default RegistrationForm