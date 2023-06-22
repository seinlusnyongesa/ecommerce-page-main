"use client";
import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { useState } from "react";

export default function Home() {
	const [cart, setCart] = useState({
		isOpen: false,
		quantity: 0,
		items: [],
	});
	const addItemToCart = (quantity, price) => {
		quantity === 0 ? (quantity = quantity + 1) : "";
		if (cart.items.length > 0) {
			let item = { id: 1, quantity: quantity + cart.items[0].quantity, price };
			setCart({ ...cart, items: [item] });
		} else {
			setCart({ ...cart, items: [{ id: 1, quantity, price }] });
		}
	};
	const removeItemFromCart = () => {
		setCart({ ...cart, items: [] });
	};
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const openMobileMenu = () => setMobileMenuOpen(true);
	const addQuantity = () => {
		setCart({ ...cart, quantity: cart.quantity + 1 });
	};
	const subQuantity = () => {
		setCart({
			...cart,
			quantity: cart.quantity > 0 ? cart.quantity - 1 : cart.quantity,
		});
	};
	const closeMobileMenu = () => setMobileMenuOpen(false);
	const handleCartOpen = () => {
		setCart({ ...cart, isOpen: !cart.isOpen });
	};

	return (
		<main
			className={`${
				cart.isOpen && "max-h-screen overflow-y-hidden"
			} flex justify-center`}
		>
			<div className=" max-w-[1120px]">
				<Navbar
					closeMobileMenu={closeMobileMenu}
					handleCartOpen={handleCartOpen}
					openMobileMenu={openMobileMenu}
					mobileMenuOpen={mobileMenuOpen}
					quantity={cart.items[0]?.quantity || 0}
				/>
				<Product
					quantity={cart.quantity}
					addQuantity={addQuantity}
					subQuantity={subQuantity}
					addToCart={addItemToCart}
					removeFromCart={removeItemFromCart}
				/>
				{cart.isOpen && (
					<Cart cart={cart} removeFromCart={removeItemFromCart} />
				)}

				<div className="w-full flex flex-col">
					<div className="flex-1 bg-darkGrayishBlue">darkGrayishBlue</div>
					<div className="flex-1 bg-grayishBlue">grayishBlue</div>
					<div className="flex-1 bg-lightGrayishBlue">lightGrayishBlue</div>
					<div className="flex-1 bg-white">white</div>
					<div className="flex-1 bg-black text-white">black</div>
					<div className="flex-1 bg-veryDarkBlue">veryDarkBlue</div>
					<div className="flex-1 bg-orange">orange</div>
					<div className="flex-1 bg-paleOrange">pale orange</div>
				</div>
			</div>
		</main>
	);
}
