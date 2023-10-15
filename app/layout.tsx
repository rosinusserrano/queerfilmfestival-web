import "./globals.css";
import type { Metadata } from "next";
import { tele } from "./fonts/fonts";
import BackgroundVideo from "./BackgroundVideo";
import Footer from "./Footer";

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
			<body className={`${tele.className} text-white h-screen bg-[#e83b96]`}>
				{children}
				<BackgroundVideo />
				<Footer />
			</body>
		</html>
	);
}
