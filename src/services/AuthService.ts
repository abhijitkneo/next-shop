import { LoginPayload, LoginResponse } from "@/types/auth.types";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const loginUser = async(payload: LoginPayload): Promise<LoginResponse> => {
	const res = await fetch(`${apiUrl}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	})

	if(!res.ok) {
		throw new Error('Invalid Username or Password');
	}

	return res.json();
}