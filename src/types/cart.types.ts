import { Product } from "./product.types";

export interface CartItem{
	product: Product,
	quantity: number
}

export interface CartContextType {
	cart: CartItem[],
	addToCart: (product: Product) => void,
	removeFromCart: (productId: number) => void,
	increaseQuantity: (productId: number) => void,
	decreaseQuantity: (productId: number) => void,
	clearCart: () => void,
	getCartCount: () => number,
	getCartTotal: () => number
}