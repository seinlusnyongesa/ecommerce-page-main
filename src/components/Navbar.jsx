"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const openMobileMenu = () => setMobileMenuOpen(true);

	const closeMobileMenu = () => setMobileMenuOpen(false);
	return (
		<header>
			<div className="flex items-center justify-between px-6 pt-6 pb-7">
				<div className="flex items-center">
					<button className="relative w-5 h-4 mr-4 " onClick={openMobileMenu}>
						<Image
							src="\images\icon-menu.svg"
							alt="ecommerce project page main logo"
							fill={true}
						/>
					</button>
					<div className="relative w-36 h-6">
						<Image
							src="\images\logo.svg"
							alt="ecommerce project page main logo"
							fill={true}
						/>
					</div>
				</div>
				<div className="flex">
					<button className="relative w-7 h-6 mr-5">
						<Image
							src="\images\icon-cart.svg"
							alt="ecommerce project page main logo"
							fill={true}
						/>
					</button>
					<div className="relative w-7 h-7">
						<Image
							src="/images/image-avatar.png"
							alt="ecommerce project page main logo"
							fill={true}
						/>
					</div>
				</div>
			</div>
			{mobileMenuOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-75">
					<div className="w-64 h-full bg-white">
						<div className="h-full p-6">
							<button className="mb-14" onClick={closeMobileMenu}>
								<Image
									src="\images\icon-close.svg"
									alt="close navigation bar"
									width={16}
									height={16}
								/>
							</button>

							<nav>
								<ul className="font-bold">
									<li className="mb-7">
										<Link href="#">Collections</Link>
									</li>
									<li className="mb-7">
										<Link href="#">Men</Link>
									</li>
									<li className="mb-7">
										<Link href="#">Women</Link>
									</li>
									<li className="mb-7">
										<Link href="#">About</Link>
									</li>
									<li className="">
										<Link href="#">Contact</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
