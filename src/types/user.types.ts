export interface UserGeoLocation {
	lat: string,
	long: string
}

export interface Address {
	city: string,
	street: string,
	number: number,
	zipcode: string,
	geolocation: UserGeoLocation
}

export interface Name {
	firstname: string,
	lastname: string
}

export interface RegisterPayload {
	email: string,
	username: string,
	password: string,
	phone: string,
	address: Address,
	name: Name
}

export interface User extends RegisterPayload {
	id: number
}