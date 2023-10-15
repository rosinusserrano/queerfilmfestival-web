import "./globals.css";
import type { Metadata } from "next";
import { tele } from "./fonts/fonts";
import BackgroundVideo from "./BackgroundVideo";
import Footer from "./Footer";
import Header from "./Header";
import BigX from "./BigX";
import CenterDate from "./CenterDate";

export const metadata: Metadata = {
	title: "Queerfilmfestival",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="de">
			<body
				className={`${tele.className} text-white h-screen bg-pink flex flex-col`}
			>
				<Header />
				<div className="overlay-parent flex-1 px-2 py-20">
					<BigX />
					<CenterDate />
					{children}
				</div>
				<BackgroundVideo />
				<Footer />
			</body>
			
		</html>
	);
}
