import "./globals.css";
import type { Metadata } from "next";
import { tele } from "./fonts/fonts";

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
				className={`${tele.className} text-white h-screen bg-black`}
			>
				{children}
				<div className="absolute top-0 left-0 w-screen h-screen -z-50">
          <video muted loop autoPlay className="object-cover min-h-full min-w-full">
            <source src="/Cherry Queer X P_2.mp4" type="video/mp4" />
          </video>
        </div>
			</body>
		</html>
	);
}
