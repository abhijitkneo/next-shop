'use client';

import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/services/AuthService";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
//import { SaveToken } from "@/utils/auth";
import { useState } from "react"
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { BiLogInCircle } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoIosLock } from "react-icons/io";
import { TbLockPassword } from "react-icons/tb";

export default function LoginPage() {
	const {login} = useAuth();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
	const searchParams = useSearchParams();
	const redirect = searchParams.get('redirect') || '/';

	const handleSubmit = async(e:any) => {
		e.preventDefault();
		try {
			const data = await loginUser({
				username, 
				password
			})
			console.log(data, '++++ login data');
			login(data.token);
			//SaveToken(data.token);
			//router.push('/');
			router.push(redirect);
		} catch(error) {
			console.error(error);
		}
	}

	return(
		<>
		<Row className="justify-content-center my-5">
			<Col md={4}>
				<Card>
					<Card.Body className="p-4">
						<div className="text-center mb-4">
							<span className="bg-primary-subtle lh-1 d-inline-block rounded-circle p-3 mb-3">
								<IoIosLock size={32} className="text-primary" />
							</span>
							<h3 className="mb-0">Welcome Back</h3>
							<p className="small text-black-50 fw-semibold mb-0">Login to your account to continue</p>
						</div>
						<hr className="border border-dark border-opacity-25 border-start-0 border-end-0 border-bottom-0" />
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
								<Link href={'#'} className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-offset-2 ms-2">Register</Link>
							</p>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		</>
	)
}