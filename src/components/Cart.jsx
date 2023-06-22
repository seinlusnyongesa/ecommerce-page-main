import Image from "next/image";
import React from "react";

const Cart = ({ cart, removeFromCart }) => {
	return (
		<div className="fixed top-[90px] left-[50%] -translate-x-[50%] w-[360px] h-[260px] bg-white rounded-lg  shadow-2xl overflow-hidden md:right-0 md:translate-x-[70%]">
			<div className=" px-7 py-6 border-[1px] ">
				<span className="font-bold text-veryDarkBlue">Cart</span>
			</div>
			<div className="text-center h-[calc(100%-67px)] flex items-center justify-center px-6">
				{cart.items.length > 0 ? (
					<div className="flex flex-col gap-7">
						<div className="flex items-center gap-3">
							<div className="relative w-14 h-14 rounded-md overflow-hidden">
								<Image
									src="/images/image-product-1-thumbnail.jpg"
									fill={true}
									alt="product thumbnail"
								/>
							</div>
							<div className="flex-1 text-left">
								<p className="text-darkGrayishBlue ">
									Fall Limited Edition Sneakers
								</p>
								<span className="text-darkGrayishBlue">
									${cart.items[0].price.toFixed(2)} x {cart.items[0].quantity}{" "}
									<span className="font-bold text-veryDarkBlue ml-2">
										${(cart.items[0].price * cart.items[0].quantity).toFixed(2)}
									</span>
								</span>
							</div>
							<button onClick={removeFromCart}>
								<Image src="\images\icon-delete.svg" width={16} height={16} />
							</button>
						</div>
						<button className="bg-orange py-4 rounded-md">Checkout</button>
					</div>
				) : (
					<p className="font-bold text-darkGrayishBlue">Your cart is empty.</p>
				)}
			</div>
		</div>
	);
};

export default Cart;
