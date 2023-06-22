import Image from "next/image";
import React from "react";
import ProductCourosel from "./ProductCourosel";

const Product = ({ quantity, addQuantity, subQuantity, addToCart }) => {
	return (
		<div className="md:flex ">
			<div className="flex-1">
				<div className="md:px-16">
					<ProductCourosel />
				</div>
			</div>
			<div className="flex-1 p-6">
				<div className="md:px-16">
					<span className="text-xs text-orange uppercase font-bold mb-5 md:mb-7 inline-block">
						Sneaker Company
					</span>
					<h1 className="text-3xl md:text-4xl font-bold mb-7 md:mb-12">
						Fall Limited Edition Sneakers
					</h1>
					<p className="text-sm text-darkGrayishBlue mb-9">
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they’ll withstand everything
						the weather can offer.
					</p>
					<div className="flex justify-between mb-7 md:mb-10 md:block">
						<div className="flex items-center md:mb-4">
							<h2 className="text-2xl font-bold mr-4">$125.00</h2>
							<span className="text-sm font-bold py-1 px-4 rounded-md text-orange bg-paleOrange">
								50%
							</span>
						</div>
						<span className="text-grayishBlue line-through">$250.00</span>
					</div>
					<div className="md:grid grid-cols-[2fr_3fr] gap-4 items-center">
						<div className=" flex bg-lightGrayishBlue p-4  mb-4 md:mb-0 rounded-md">
							<button className="relative" onClick={subQuantity}>
								{" "}
								<Image
									src="\images\icon-minus.svg"
									alt="subtract quantity"
									width={16}
									height={16}
								/>{" "}
								<div className="absolute inset-0 bg-lightGrayishBlue bg-opacity-0 hover:bg-opacity-50"></div>
							</button>
							<span className="flex-1 text-center font-bold">{quantity}</span>
							<button className="relative" onClick={addQuantity}>
								<Image
									src="\images\icon-plus.svg"
									alt="add quantity"
									width={16}
									height={16}
								/>
								<div className="absolute inset-0 bg-lightGrayishBlue bg-opacity-0 hover:bg-opacity-50"></div>
							</button>
						</div>
						<button
							className=" inline-block bg-orange hover:bg-opacity-60 py-4 text-lightGrayishBlue font-bold w-full text-center  rounded-md shadow-2xl shadow-orange"
							onClick={() => addToCart(quantity, 125)}
						>
							<Image
								src="\images\icon-cart-light.svg"
								alt="cart"
								width={18}
								height={18}
								className="inline-block mr-4 stroke-white"
							/>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
