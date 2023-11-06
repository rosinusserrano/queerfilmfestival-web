import "./globals.css";
import type { Metadata } from "next";
import { tele } from "./fonts/fonts";
import Footer from "./components/Footer";

export const metadata: Metadata = {
	title: "QueerXPlicit 2023 - Queerfilmfestival Leipzig",
	description: "Queeres Film Festival in Leipzig vom 8. - 12. November 2023",
	keywords: "festival, leipzig, queer, film, filmfestival, november",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="de" className="overflow-y-hidden">
			<body
				className={`${tele.className} text-white h-screen bg-pink flex flex-col`}
			>
				{children}
				<Footer />
			</body>
		</html>
	);
}
