'use client';

import { Product } from "@/types";
import { CartContextType, CartItem } from "@/types/cart.types";
import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({children} : {children: React.ReactNode}) => {
	const [cart, setCart] = useState<CartItem[]>([]);

	useEffect(() => {
		const storedCart = localStorage.getItem('cart');
		if(storedCart) {
			setCart(JSON.parse(storedCart));
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	},[cart])

	const addToCart = (product: Product) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.product.id === product.id);

			if(existingItem) {
				return prevCart.map((item) => item.product.id === product.id ? {
					...item,
					quantity: item.quantity + 1
				} : 
					item
				)
			}

			return [
				...prevCart,
				{
					product,
					quantity: 1
				}
			]
		})
	}

	const getCartCount = () => {
		return cart.reduce((total, item) => total + item.quantity, 0)
	}


	const increaseQuantity = (productId: number) => {
		setCart((prevCart) => (
			prevCart.map((item) => (
				item.product.id === productId ? {
					...item,
					quantity: item.quantity + 1
				} : item
			))
		))
	}

	const decreaseQuantity = (productId: number) => {
		setCart((prevCart) => (
			prevCart.map((item) => (
				item.product.id === productId ? {
					...item,
					quantity: item.quantity - 1
				} : item
			)).filter((item) => item.quantity > 0)
		))
	}

	const removeFromCart = (productId: number) => {
		setCart((prevCart) =>
			prevCart.filter((item) => item.product.id !== productId)
		);
	}

	const getCartTotal = () => {
		return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
	}

	const clearCart = () => {
		setCart([]);
	}

	return(
		<>
			{/* <CartContext.Provider
				value={{
					cart,
					addToCart,
					removeFromCart: () => {},
					increaseQuantity: () => {},
					decreaseQuantity: () => {},
					clearCart: () => {},
					getCartCount,
					getCartTotal: () => 0
				}}
			>
				{children}
			</CartContext.Provider> */}
			<CartContext.Provider
				value={{
					cart,
					addToCart,
					removeFromCart,
					increaseQuantity,
					decreaseQuantity,
					clearCart,
					getCartCount,
					getCartTotal
				}}
			>
				{children}
			</CartContext.Provider>
		</>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)
	if(!context) {
		throw new Error('cartContext must be used within the cartProvider')
	}
	return context;
}