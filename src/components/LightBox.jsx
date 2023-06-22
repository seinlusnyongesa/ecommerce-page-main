"use client";
import React, { useState } from "react";
import { products } from "@/constants/products";
import Image from "next/image";

const LightBox = ({ handleIsLightBox }) => {
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
		<div className="hidden z-50 md:block fixed inset-0 bg-black bg-opacity-75">
			<div className="relative w-full h-screen flex justify-center items-center">
				<div className="relative">
					<button
						className="w-4 group h-f absolute z-40 right-0 -top-8"
						onClick={handleIsLightBox}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="13.436"
							height="13.436"
							viewBox="0 0 13.436 13.436"
						>
							<path
								id="icon-close"
								d="M11.6.782,13.718,2.9,9.12,7.5l4.6,4.6L11.6,14.218,7,9.62l-4.595,4.6L.283,12.1,4.878,7.5.282,2.9,2.4.782,7,5.378Z"
								transform="translate(-0.282 -0.782)"
								fill-rule="evenodd"
								className="fill-white group-hover:fill-orange"
							/>
						</svg>
					</button>
					<div className="relative mb-7">
						{products.map((p) => (
							<div
								key={p.id}
								className={`relative  w-[340px] h-[340px] rounded-md overflow-hidden ${
									hide(p.id) ? "hidden" : ""
								}`}
							>
								<Image src={p.image} fill={true} alt="product items" />
							</div>
						))}
						<div className="absolute  inset-0 flex justify-center items-center">
							<div className="w-full absolute">
								<button
									className=" group absolute left-0 -translate-x-[50%] top-0 w-11 h-11 bg-white flex justify-center items-center rounded-full cursor-pointer"
									onClick={prev}
								>
									<svg
										width="12"
										height="18"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 1 3 9l8 8"
											stroke-width="3"
											fill="none"
											fill-rule="evenodd"
											className="stroke-black group-hover:stroke-orange"
										/>
									</svg>
								</button>
								<button
									className="group absolute translate-x-[50%] right-0 top-0 w-11 h-11 bg-white flex justify-center items-center rounded-full cursor-pointer"
									onClick={next}
								>
									<svg
										width="13"
										height="18"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="m2 1 8 8-8 8"
											stroke-width="3"
											fill="none"
											fill-rule="evenodd"
											className="stroke-black group-hover:stroke-orange"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-between px-4">
						{products.map((p) => (
							<div
								key={p.id}
								className={`group relative w-[60px] h-[60px] rounded-md  overflow-hidden cursor-pointer ${
									hide(p.id) ? "" : "border-2 border-orange"
								}`}
								onClick={() => showAt(p.id)}
							>
								<Image
									src={p.thumbnail}
									fill={true}
									alt="product items thubnail"
								/>
								<div
									className={` absolute inset-0 bg-lightGrayishBlue bg-opacity-75 ${
										hide(p.id) ? "hidden" : ""
									}`}
								></div>
								<div className=" absolute inset-0 bg-lightGrayishBlue bg-opacity-0 group-hover:bg-opacity-50 "></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LightBox;
