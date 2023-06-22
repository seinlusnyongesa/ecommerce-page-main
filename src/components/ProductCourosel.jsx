"use client";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/constants/products";

const ProductCourosel = ({ handleIsLightBox }) => {
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
		<div>
			<div className="relative w-full ">
				<div className="w-full h-80 md:h-[450px] md:rounded-lg overflow-hidden md:mb-7">
					{products.map((v) => (
						<div
							key={v.id}
							className={`relative w-full h-full cursor-pointer ${
								hide(v.id) ? "hidden" : ""
							}`}
							onClick={handleIsLightBox}
						>
							<Image src={v.image} fill={true} />
						</div>
					))}
				</div>
				<div className="absolute w-full flex justify-between items-center top-[50%] -translate-y-[50%] px-4 md:hidden">
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
			<div className="hidden w-full md:flex justify-between">
				{products.map((p) => (
					<button
						key={p.id}
						className={`relative w-[90px] rounded-md overflow-hidden cursor-pointer h-[90px] group   ${
							hide(p.id) ? "" : "border-4 border-orange"
						}`}
						onClick={() => showAt(p.id)}
					>
						<div
							className={`${
								hide(p.id) ? "" : "  bg-lightGrayishBlue bg-opacity-80 "
							}absolute inset-0 z-10 group-hover:bg-lightGrayishBlue group-hover:bg-opacity-60`}
						></div>
						<Image src={p.thumbnail} alt="thumbnail" fill={true} />
					</button>
				))}
			</div>
		</div>
	);
};

export default ProductCourosel;
