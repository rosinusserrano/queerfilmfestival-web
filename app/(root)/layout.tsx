import "./globals.css";
import type { Metadata } from "next";
import { tele } from "../fonts/fonts";

export const metadata: Metadata = {
	title: "Queerfilmfestival 2023",
	description: "Queeres Film Festival 2023",
	keywords: "festival, 2023, queer, film, filmfestival, november",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="de" className="overflow-y-hidden">
			<body
				className={`${tele.className} min-h-screen`}
			>
				{children}
			</body>
		</html>
	);
}
