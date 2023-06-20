import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

const kumbh_sans = Kumbh_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
	title: "Frontend Mentor | E-commerce product page",
	description: "A project made from a frontendmentor challenge",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={kumbh_sans.className}>{children}</body>
		</html>
	);
}
