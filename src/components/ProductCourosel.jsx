"use client";
import Image from "next/image";
import { useState } from "react";

let products = [
	{
		id: 1,
		image: "/images/image-product-1.jpg",
		thumbnail: "/images/image-product-1-thumbnail.jpg",
	},
	{
		id: 2,
		image: "/images/image-product-2.jpg",
		thumbnail: "/images/image-product-2-thumbnail.jpg",
	},
	{
		id: 3,
		image: "/images/image-product-3.jpg",
		thumbnail: "/images/image-product-3-thumbnail.jpg",
	},
	{
		id: 4,
		image: "/images/image-product-4.jpg",
		thumbnail: "/images/image-product-4-thumbnail.jpg",
	},
];
const ProductCourosel = () => {
	const [showID, setShowID] = useState(1);
	const hide = (id) => showID !== id;
	const showAt = (id) => setShowID(id);
	const prev = () => {
		if (showID === 1) setShowID(4);
		else setShowID(showID - 1);
	};
	const next = () => {
		if (showID === products.length) setShowID(1);
		else setShowID(showID + 1);
	};
	return (
		<div className="relative w-full ">
			<div className="w-full h-80">
				{products.map((v) => (
					<div
						key={v.id}
						className={`relative w-full h-full ${hide(v.id) ? "hidden" : ""}`}
					>
						<Image src={v.image} fill={true} />
					</div>
				))}
			</div>
			<div className="absolute w-full flex justify-between items-center top-[50%] -translate-y-[50%] px-4">
				<button
					className="w-11 h-11 bg-white flex justify-center items-center rounded-full cursor-pointer"
					onClick={prev}
				>
					<Image
						src="\images\icon-previous.svg"
						alt="previous"
						width={10}
						height={14}
					/>
				</button>
				<button
					className="w-11 h-11 bg-white flex justify-center items-center rounded-full cursor-pointer"
					onClick={next}
				>
					<Image
						src="\images\icon-next.svg"
						alt="next"
						width={10}
						height={14}
					/>
				</button>
			</div>
		</div>
	);
};

export default ProductCourosel;
