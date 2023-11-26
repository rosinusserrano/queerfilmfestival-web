import "./globals.css";
import type { Metadata } from "next";
import { tele } from "../../fonts/fonts";
import BackgroundImage from "./components/BackgroundImage";
import { Footer } from "./components/Footer";
import Lettering from "./components/Lettering";
import { MenuBanner } from "./components/Menu/MenuBanner";
import SubLettering from "./components/SubLettering";
import { AnimatePresenceWrapper } from "./components/AnimatePresenceWrapper";
import { ExpandInOut } from "./components/ExpandInOut";

export const metadata: Metadata = {
	title: "Queerfilmfestival Weimar 2023",
	description: "Queeres Film Festival in Weimar 2023",
	keywords: "festival, weimar, queer, film, filmfestival, november",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="de" className="h-screen">
			<body className={`${tele.className} h-auto`}>
				<BackgroundImage />
				<Lettering />
				<SubLettering />
				<div className="h-screen" />
				<MenuBanner />
				<AnimatePresenceWrapper>{children}</AnimatePresenceWrapper>
				<Footer />
			</body>
		</html>
	);
}
