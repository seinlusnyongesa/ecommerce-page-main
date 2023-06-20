import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Product />
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
		</main>
	);
}
// veryDarkBlue: "hsl(220, 13%, 13%)",
// 				darkGrayishBlue: "hsl(219, 9%, 45%)",
// 				grayishBlue: "hsl(220, 14%, 75%)",
// 				lightGrayishBlue: "hsl(223, 64%, 98%)",
// 				white: "hsl(0, 0%, 100%)",
// 				black: "hsl(0, 0%, 0%)",
