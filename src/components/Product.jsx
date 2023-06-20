import Image from "next/image";
import React from "react";
import ProductCourosel from "./ProductCourosel";

const Product = () => {
	return (
		<div>
			<div>
				<ProductCourosel />
			</div>
			<div className="p-6">
				<span className="text-xs text-orange uppercase font-bold mb-5 inline-block">
					Sneaker Company
				</span>
				<h1 className="text-2xl font-bold mb-7">
					Fall Limited Edition Sneakers
				</h1>
				<p className="text-sm text-darkGrayishBlue mb-9">
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they’ll withstand everything
					the weather can offer.
				</p>
				<div className="flex justify-between mb-7">
					<div className="flex items-center">
						<h2 className="text-2xl font-bold mr-4">$125.00</h2>
						<span className="text-sm font-bold p-2 rounded-md text-orange bg-paleOrange">
							50%
						</span>
					</div>
					<span className="text-grayishBlue line-through">$250.00</span>
				</div>
				<div className="flex bg-lightGrayishBlue p-6 mb-4 rounded-md">
					<button>
						{" "}
						<Image
							src="\images\icon-minus.svg"
							alt="subtract quantity"
							width={16}
							height={16}
						/>{" "}
					</button>
					<span className="flex-1 text-center font-bold">0</span>
					<button>
						<Image
							src="\images\icon-plus.svg"
							alt="add quantity"
							width={16}
							height={16}
						/>
					</button>
				</div>
				<button className="inline-block bg-orange text-lightGrayishBlue font-bold w-full text-center py-6 rounded-md shadow-2xl shadow-orange">
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
	);
};

export default Product;
