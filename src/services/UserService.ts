import { RegisterPayload, User } from "@/types/user.types";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const registerUser = async( payload: RegisterPayload ): Promise<User> => {
	const res = await fetch(`${apiUrl}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	})

	if(!res.ok) {
		throw new Error('Failed to register new user');
	}
	
	return res.json();
	
}

export const getUser = async():Promise<User[]> => {
	const res = await fetch(`${apiUrl}/users`, {
		cache: 'no-store'
	})

	if(!res.ok) {
		throw new Error('Failed to fetch user list')
	}

	return res.json();
}