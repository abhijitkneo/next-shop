import { useAuth } from '@/context/AuthContext'
import { loginUser } from '@/services/AuthService'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { BiLogInCircle } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { TbLockPassword } from 'react-icons/tb'

const LoginForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const {login} = useAuth();
	const router = useRouter();
	const searchParams = useSearchParams();
	const redirect = searchParams.get('redirect') || '/';

	const handleSubmit = async(e:any) => {
		e.preventDefault();
		try {
			const data = await(loginUser({
				username,
				password
			}))
			console.log(data, '++++ user data');
			
			login(data.token);
			router.push(redirect);

		} catch(error) {
			console.error(error)
		}
	}
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="username" className="mb-3">
				<Form.Label>Username</Form.Label>
				<div className="position-relative">
					<FiUser className="position-absolute start-0 top-50 ms-3 translate-middle-y" />
					<Form.Control 
						type="text"
						value={username} 
						onChange={(e) => setUsername(e.target.value)} 
						placeholder="Enter Username"
						className="ps-5"
					/>
				</div>
			</Form.Group>
			<Form.Group controlId="password" className="mb-3">
				<Form.Label>Password</Form.Label>
				<div className="position-relative">
					<TbLockPassword className="position-absolute start-0 top-50 ms-3 translate-middle-y" />
					<Form.Control 
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter Password"
						className="ps-5"
					/>
				</div>
			</Form.Group>
			<Button type="submit" className="btn btn-primary flex-center w-100 gap-2 mb-4">
				<BiLogInCircle size={24} /> Login
			</Button>
			<p className="small text-black-50 fw-semibold mb-0 text-center">
				Don't have an account? 
				<Link href={'/register'} className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-offset-2 ms-2">Register</Link>
			</p>
		</Form>
	)
}

export default LoginForm