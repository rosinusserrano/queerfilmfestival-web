import "./globals.css";
import type { Metadata } from "next";
import { tele } from "./fonts/fonts";
import BackgroundVideo from "./components/BackgroundVideo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BigX from "./components/BigX";
import LandingInfo from "./components/LandingInfo";

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
		<html lang="de" className="overflow-y-hidden">
			<body
				className={`${tele.className} text-white h-screen bg-pink flex flex-col`}
			>
				{/* <Header /> */}
				{children}
				<Footer />
			</body>
		</html>
	);
}
