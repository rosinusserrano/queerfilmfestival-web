import "./globals.css";
import type { Metadata } from "next";
import { tele } from "../fonts/fonts";
import BackgroundImage from "./components/BackgroundImage";
import { Footer } from "./components/Footer";
import Lettering from "./components/Lettering";
import { MenuBanner } from "./components/menu/MenuBanner";
import SubLettering from "./components/SubLettering";
import { AnimatePresenceWrapper } from "./components/AnimatePresenceWrapper";
import { ExpandInOut } from "./components/ExpandInOut";
import { SafariCheckAlert } from "./components/SafariCheckAlert";

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
		<html lang="de" className="h-screen snap-y snap-mandatory">
			<SafariCheckAlert />
			<body className={""}>
					<BackgroundImage />
					<div className="h-screen snap-start">
						<Lettering />
						<SubLettering />
					</div>
					<div className="min-h-screen snap-start">
						<MenuBanner />
						{children}
						<div className="h-12 snap-start"/>
					</div>
					<Footer />
			</body>
		</html>
	);
}
