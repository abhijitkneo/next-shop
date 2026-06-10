'use client';

import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/services/AuthService";
import { useRouter, useSearchParams } from "next/navigation";
//import { SaveToken } from "@/utils/auth";
import { useState } from "react"
import { Button } from "react-bootstrap";

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
		<form onSubmit={handleSubmit}>
			<input
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username"
			/>
			<input 
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
				type="password"
			/>
			<Button type="submit" className="btn btn-primary">Login</Button>
		</form>
	)
}