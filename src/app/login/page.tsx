'use client';

import LoginForm from "@/components/auth/LoginForm";
import { Card, Col, Row } from "react-bootstrap";
import { IoIosLock } from "react-icons/io";

export default function LoginPage() {

	return(
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

						{/* Login form */}
						<LoginForm />
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}