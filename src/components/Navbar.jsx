"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({
	handleCartOpen,
	openMobileMenu,
	closeMobileMenu,
	mobileMenuOpen,
	quantity,
}) => {
	return (
		<header className="relative">
			<div className="flex items-center justify-between px-6 pt-6 pb-7 md:py-12 md:px-0 md:border-b-2 md:mb-24">
				<div className="flex items-center">
					<button
						className="md:hidden relative w-5 h-4 mr-4 "
						onClick={openMobileMenu}
					>
						<Image
							src="\images\icon-menu.svg"
							alt="ecommerce project page main logo"
							fill={true}
						/>
					</button>
					<div className="relative w-36 h-6 md:mr-14">
						<Image
							src="\images\logo.svg"
							alt="ecommerce project page main logo"
							fill={true}
						/>
					</div>
					<nav className="hidden md:block">
						<ul className="flex absolute h-full  top-0">
							<li className="mr-7 flex items-center cursor-pointer h-full hover:border-b-4 border-orange">
								<Link href="#">Collections</Link>
							</li>
							<li className="mr-7 flex items-center cursor-pointer h-full hover:border-b-4 border-orange">
								<Link href="#">Men</Link>
							</li>
							<li className="mr-7 flex items-center cursor-pointer h-full hover:border-b-4 border-orange">
								<Link href="#">Women</Link>
							</li>
							<li className="mr-7 flex items-center cursor-pointer h-full hover:border-b-4 border-orange">
								<Link href="#">About</Link>
							</li>
							<li className="flex items-center cursor-pointer h-full hover:border-b-4 border-orange">
								<Link href="#">Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="flex">
					<button
						className="relative w-7 h-6 mr-5 md:mr-12"
						onClick={handleCartOpen}
					>
						<Image
							src="\images\icon-cart.svg"
							alt="ecommerce project page main logo"
							fill={true}
						/>
						<span className="absolute -top-2 -right-2 bg-orange px-2 rounded-full text-white text-xs">
							{quantity}
						</span>
					</button>
					<div className="relative w-7 h-7 rounded-full cursor-pointer hover:border-2 border-orange">
						<Image
							src="/images/image-avatar.png"
							alt="ecommerce project page main logo"
							fill={true}
						/>
					</div>
				</div>
			</div>
			{mobileMenuOpen && (
				<div className="fixed z-30 inset-0 bg-black bg-opacity-75 ">
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
